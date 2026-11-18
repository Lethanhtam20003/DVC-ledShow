import test from 'node:test';
import assert from 'node:assert/strict';
import { PATTERNS, getPatternById } from '../src/shared/patterns.js';
import {
  BUILTIN_BG_VIDEOS,
  DEFAULT_CONFIG,
  STORAGE_KEY,
  applyPatternDefaults,
  createSyncChannel,
  deleteSavedPreset,
  extractYouTubeId,
  getBuiltinBgVideoById,
  loadConfig,
  loadSavedPresets,
  normalizeConfig,
  resetPatternConfig,
  saveConfig,
  saveNamedPreset,
  switchPattern,
} from '../src/shared/ceremonyStore.js';
import { BUILTIN_3D_MODELS } from '../src/shared/models3d.js';

test('PATTERNS contains 6 unique stage patterns with required fields', () => {
  assert.equal(PATTERNS.length, 6);
  const ids = new Set(PATTERNS.map((p) => p.id));
  assert.equal(ids.size, 6);

  for (const p of PATTERNS) {
    assert.ok(p.name && p.colors?.primary && p.colors?.bgBottom);
    assert.ok(p.defaults?.eventTitle && p.defaults?.celebrationTitle);
  }
});

test('getPatternById returns matching pattern or falls back to first', () => {
  assert.equal(getPatternById('holo-globe').id, 'holo-globe');
  assert.equal(getPatternById('non-existent-id').id, PATTERNS[0].id);
});

test('extractYouTubeId parses standard, short, embed, shorts URLs and raw IDs', () => {
  assert.equal(
    extractYouTubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    'dQw4w9WgXcQ'
  );
  assert.equal(extractYouTubeId('https://youtu.be/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(
    extractYouTubeId('https://www.youtube.com/embed/dQw4w9WgXcQ'),
    'dQw4w9WgXcQ'
  );
  assert.equal(
    extractYouTubeId('https://www.youtube.com/shorts/dQw4w9WgXcQ'),
    'dQw4w9WgXcQ'
  );
  assert.equal(extractYouTubeId('sbDz4hoZWCk'), 'sbDz4hoZWCk');
  assert.equal(extractYouTubeId('invalid'), 'sbDz4hoZWCk');
  assert.equal(extractYouTubeId(''), 'sbDz4hoZWCk');
});

test('applyPatternDefaults updates pattern text while preserving unrelated settings', () => {
  const custom = { ...DEFAULT_CONFIG, handCount: 8, masterVolume: 0.5 };
  const next = applyPatternDefaults(custom, 'smart-city');
  assert.equal(next.patternId, 'smart-city');
  assert.equal(next.handCount, 8);
  assert.equal(next.masterVolume, 0.5);
  assert.equal(
    next.eventTitle,
    getPatternById('smart-city').defaults.eventTitle
  );
});

test('loadConfig migrates legacy blocked YouTube ID and handles invalid JSON', () => {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };

  store.set(STORAGE_KEY, JSON.stringify({ youtubeVideoId: 'qyW8818wHhA', handCount: 7 }));
  const migrated = loadConfig();
  assert.equal(migrated.youtubeVideoId, 'sbDz4hoZWCk');
  assert.equal(migrated.handCount, 7);

  store.set(STORAGE_KEY, '{bad-json');
  const fallback = loadConfig();
  assert.equal(fallback.patternId, DEFAULT_CONFIG.patternId);

  saveConfig({ ...DEFAULT_CONFIG, handCount: 10 });
  assert.equal(loadConfig().handCount, 10);
});

test('createSyncChannel returns safe no-op when BroadcastChannel is unavailable', () => {
  const channel = createSyncChannel(() => {});
  assert.doesNotThrow(() => {
    channel.post('CMD_RESET', {});
    channel.close();
  });
});

test('BUILTIN_3D_MODELS contains all 9 expected 3D model presets', () => {
  assert.equal(BUILTIN_3D_MODELS.length, 9);
  const expectedIds = [
    'cdsqg-2026',
    'dong-son',
    'holo-globe',
    'smart-city',
    'crystal-core',
    'lotus-3d',
    'golden-star',
    'ai-cube',
    'none',
  ];
  assert.deepEqual(
    BUILTIN_3D_MODELS.map((m) => m.id),
    expectedIds
  );
  for (const m of BUILTIN_3D_MODELS) {
    assert.ok(m.name && m.subtitle && m.badge && m.accentColor);
  }
});

test('custom3dModelType and custom3dModelId defaults and normalization', () => {
  assert.equal(DEFAULT_CONFIG.custom3dModelType, 'preset');
  assert.equal(DEFAULT_CONFIG.custom3dModelId, 'crystal-core');

  const validPreset = normalizeConfig({
    custom3dModelType: 'preset',
    custom3dModelId: 'lotus-3d',
  });
  assert.equal(validPreset.custom3dModelType, 'preset');
  assert.equal(validPreset.custom3dModelId, 'lotus-3d');

  const validUploaded = normalizeConfig({
    custom3dModelType: 'uploaded',
    custom3dModelId: '3d-abc-123',
  });
  assert.equal(validUploaded.custom3dModelType, 'uploaded');
  assert.equal(validUploaded.custom3dModelId, '3d-abc-123');

  const validNone = normalizeConfig({
    custom3dModelType: 'none',
    custom3dModelId: 'none',
  });
  assert.equal(validNone.custom3dModelType, 'none');
  assert.equal(validNone.custom3dModelId, 'none');

  const invalid = normalizeConfig({
    custom3dModelType: 'invalid-type',
    custom3dModelId: '   ',
  });
  assert.equal(invalid.custom3dModelType, 'preset');
  assert.equal(invalid.custom3dModelId, 'crystal-core');

  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };
  store.set(
    STORAGE_KEY,
    JSON.stringify({ custom3dModelType: 'bogus', custom3dModelId: null })
  );
  const loaded = loadConfig();
  assert.equal(loaded.custom3dModelType, 'preset');
  assert.equal(loaded.custom3dModelId, 'crystal-core');
});

test('switchPattern preserves customized settings per pattern and resetPatternConfig restores defaults', () => {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };

  const customizedCdsqg = {
    ...applyPatternDefaults(DEFAULT_CONFIG, 'cdsqg-2026'),
    eventTitle: 'TIÊU ĐỀ ĐÃ TÙY CHỈNH 10.10',
    handCount: 9,
  };
  saveConfig(customizedCdsqg);

  const switchedToGlobe = switchPattern(customizedCdsqg, 'holo-globe');
  assert.equal(switchedToGlobe.patternId, 'holo-globe');
  assert.equal(
    switchedToGlobe.eventTitle,
    getPatternById('holo-globe').defaults.eventTitle
  );

  const switchedBack = switchPattern(switchedToGlobe, 'cdsqg-2026');
  assert.equal(switchedBack.patternId, 'cdsqg-2026');
  assert.equal(switchedBack.eventTitle, 'TIÊU ĐỀ ĐÃ TÙY CHỈNH 10.10');
  assert.equal(switchedBack.handCount, 9);

  const reset = resetPatternConfig(switchedBack, 'cdsqg-2026');
  assert.equal(reset.patternId, 'cdsqg-2026');
  assert.equal(
    reset.eventTitle,
    getPatternById('cdsqg-2026').defaults.eventTitle
  );
  assert.equal(reset.handCount, DEFAULT_CONFIG.handCount);
});

test('saveNamedPreset, loadSavedPresets, update and deleteSavedPreset manage named setups', () => {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  };

  assert.deepEqual(loadSavedPresets(), []);

  const cfg1 = {
    ...applyPatternDefaults(DEFAULT_CONFIG, 'cdsqg-2026'),
    eventTitle: 'PHIÊN KHAI MẠC SÁNG',
  };
  const { preset: p1, presets: list1 } = saveNamedPreset({
    name: 'Kịch bản Sáng 10.10',
    config: cfg1,
  });
  assert.equal(list1.length, 1);
  assert.equal(p1.name, 'Kịch bản Sáng 10.10');
  assert.equal(p1.config.eventTitle, 'PHIÊN KHAI MẠC SÁNG');

  // Update existing preset by id
  const { preset: p1Updated, presets: listAfterUpdate } = saveNamedPreset({
    id: p1.id,
    name: 'Kịch bản Sáng 10.10 (Đã sửa)',
    config: { ...cfg1, handCount: 7 },
  });
  assert.equal(listAfterUpdate.length, 1);
  assert.equal(p1Updated.id, p1.id);
  assert.equal(p1Updated.name, 'Kịch bản Sáng 10.10 (Đã sửa)');
  assert.equal(p1Updated.config.handCount, 7);

  const remaining = deleteSavedPreset(p1.id);
  assert.equal(remaining.length, 0);
  assert.equal(loadSavedPresets().length, 0);
});

test('BUILTIN_BG_VIDEOS and localVideoId normalization work as expected', () => {
  assert.equal(BUILTIN_BG_VIDEOS.length, 3);
  assert.equal(getBuiltinBgVideoById('hud-cyan').src, './bg-hud-xanh-cyan.mp4');
  assert.equal(getBuiltinBgVideoById('hud-gold').src, './bg-hud-vang-3d.mp4');
  assert.equal(getBuiltinBgVideoById('unknown').id, 'trong-dong');

  assert.equal(normalizeConfig({ localVideoId: 'hud-cyan' }).localVideoId, 'hud-cyan');
  assert.equal(normalizeConfig({ localVideoId: 'bogus' }).localVideoId, 'trong-dong');
});
