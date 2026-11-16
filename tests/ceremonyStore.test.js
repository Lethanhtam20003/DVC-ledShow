import test from 'node:test';
import assert from 'node:assert/strict';
import { PATTERNS, getPatternById } from '../src/shared/patterns.js';
import {
  DEFAULT_CONFIG,
  STORAGE_KEY,
  applyPatternDefaults,
  createSyncChannel,
  extractYouTubeId,
  loadConfig,
  saveConfig,
} from '../src/shared/ceremonyStore.js';

test('PATTERNS contains 5 unique stage patterns with required fields', () => {
  assert.equal(PATTERNS.length, 5);
  const ids = new Set(PATTERNS.map((p) => p.id));
  assert.equal(ids.size, 5);

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
