import { getPatternById } from './patterns.js';

export const STORAGE_KEY = 'cham_tay_studio_config_v2';
export const PATTERN_CONFIGS_KEY = 'cham_tay_pattern_configs_v1';
export const SAVED_PRESETS_KEY = 'cham_tay_saved_presets_v1';
export const CHANNEL_NAME = 'cham_tay_stage_sync_v2';

export const BUILTIN_BG_VIDEOS = [
  {
    id: 'trong-dong',
    name: 'Trống Đồng & Bản Đồ VN',
    subtitle: 'Họa tiết Đông Sơn đỏ vàng (10s)',
    src: './bg-trong-dong-loop.mp4',
    accentColor: '#f5c542',
  },
  {
    id: 'hud-cyan',
    name: 'Mạch HUD Công Nghệ Xanh',
    subtitle: 'Giao diện số Cyan hiện đại (6.5s)',
    src: './bg-hud-xanh-cyan.mp4',
    accentColor: '#38bdf8',
  },
  {
    id: 'hud-gold',
    name: 'Mạch HUD Công Nghệ Vàng 3D',
    subtitle: 'Mạch vi xử lý 3D Vàng Cam (6.5s)',
    src: './bg-hud-vang-3d.mp4',
    accentColor: '#fbbf24',
  },
];

export function getBuiltinBgVideoById(id) {
  return BUILTIN_BG_VIDEOS.find((v) => v.id === id) || BUILTIN_BG_VIDEOS[0];
}

export const BUILTIN_COUNTDOWN_AUDIO_STYLES = [
  {
    id: 'gravity-strike',
    name: "Gravity's Final Strike",
    desc: '5 nhịp đập mạnh dần + Tiếng nổ bùng & âm vang',
  },
  {
    id: 'classic',
    name: 'Trống & Nhịp đếm (5-1)',
    desc: 'Tiếng trống từng giây + Nhạc Vinh danh',
  },
];

export const DEFAULT_CONFIG = {
  patternId: 'dong-son',
  handCount: 5,
  chargeDuration: 5000,
  podY: -40,
  podSize: 108,
  podGap: 36,
  coreY: 0,
  coreScale: 1.0,
  videoBgEnabled: false,
  videoSource: 'local', // 'local' (offline MP4) | 'youtube' | 'none'
  localVideoId: 'trong-dong', // 'trong-dong' | 'hud-cyan' | 'hud-gold'
  youtubeVideoId: 'sbDz4hoZWCk',
  videoOpacity: 0.55,
  tintDarkness: 0.45,
  screenBrightness: 76,
  autoPhotoOpDim: true,
  masterVolume: 0.8,
  audioEnabled: true,
  soundPreset: 'ceremony', // 'ceremony' | 'tech' | 'minimal'
  countdownAudioStyle: 'gravity-strike', // 'gravity-strike' | 'classic'
  touchSoundEnabled: true,
  touchVolume: 0.85,
  countdownSoundEnabled: true,
  countdownVolume: 0.9,
  fanfareSoundEnabled: true,
  fanfareVolume: 1.0,
  bgAudioEnabled: false,
  bgAudioVolume: 0.45,
  hasCustomBgAudio: false,
  hasCustomCountdownAudio: false,
  hasCustomFanfareAudio: false,
  showHeader: false,
  eventBadge: 'ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ',
  eventTitle: 'NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ',
  eventSubtitle: 'CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN',
  celebrationTitle: 'CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG',
  celebrationDesc: 'ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG',
  customLogoData: null,

  // Custom Hand & Video Ceremony Settings
  handIconStyle: 'palm', // 'palm' | 'one-finger' | 'fingerprint'
  handGlowColor: '#f5c542',
  showPodLabels: true,
  podLabels: ['Đại biểu 1', 'Đại biểu 2', 'Đại biểu 3', 'Đại biểu 4', 'Đại biểu 5'],
  hasCustomHandImage: false,
  hasCustomBgVideo: false,
  hasCustomActivationVideo: false,
  activationVideoMuted: true,
  custom3dModelType: 'preset', // 'preset' | 'uploaded' | 'none'
  custom3dModelId: 'crystal-core',

  // Extended Celebration Page Customization
  celebrationRibbon: 'NGHI THỨC KÍCH HOẠT HOÀN THÀNH',
  logoSize: 112,
  showCelebrationPillars: true,
  celebrationTheme: 'match-pattern', // 'match-pattern' | 'royal-gold' | 'tech-cyan'
  celebrationPillars: [
    { title: 'CHÍNH QUYỀN SỐ', desc: 'Minh bạch & Kiến tạo' },
    { title: 'KINH TẾ SỐ', desc: 'Đột phá & Bền vững' },
    { title: 'XÃ HỘI SỐ', desc: 'Phục vụ Nhân dân' },
  ],
};

export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return 'sbDz4hoZWCk';
  const trimmed = String(urlOrId).trim();
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?/\s]{11})/
  );
  if (match && match[1]) return match[1];
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  return 'sbDz4hoZWCk';
}

const VALID_3D_MODEL_TYPES = new Set(['preset', 'uploaded', 'none']);
const VALID_HAND_ICON_STYLES = new Set(['palm', 'one-finger', 'fingerprint']);
const VALID_LOCAL_VIDEO_IDS = new Set(BUILTIN_BG_VIDEOS.map((v) => v.id));
const VALID_COUNTDOWN_AUDIO_STYLES = new Set(BUILTIN_COUNTDOWN_AUDIO_STYLES.map((s) => s.id));

export function normalizeConfig(rawConfig = {}) {
  const merged = { ...DEFAULT_CONFIG, ...(rawConfig && typeof rawConfig === 'object' ? rawConfig : {}) };
  if (!VALID_3D_MODEL_TYPES.has(merged.custom3dModelType)) {
    merged.custom3dModelType = DEFAULT_CONFIG.custom3dModelType;
  }
  if (typeof merged.custom3dModelId !== 'string' || !merged.custom3dModelId.trim()) {
    merged.custom3dModelId = DEFAULT_CONFIG.custom3dModelId;
  }
  if (!VALID_HAND_ICON_STYLES.has(merged.handIconStyle)) {
    merged.handIconStyle = DEFAULT_CONFIG.handIconStyle;
  }
  if (!VALID_LOCAL_VIDEO_IDS.has(merged.localVideoId)) {
    merged.localVideoId = DEFAULT_CONFIG.localVideoId;
  }
  if (!VALID_COUNTDOWN_AUDIO_STYLES.has(merged.countdownAudioStyle)) {
    merged.countdownAudioStyle = DEFAULT_CONFIG.countdownAudioStyle;
  }
  return merged;
}

export function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONFIG };
    const parsed = JSON.parse(raw);
    if (parsed.youtubeVideoId === 'qyW8818wHhA') {
      parsed.youtubeVideoId = 'sbDz4hoZWCk';
    }
    return normalizeConfig(parsed);
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function loadPatternConfigs() {
  try {
    const raw = localStorage.getItem(PATTERN_CONFIGS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function savePatternConfigForId(patternId, config) {
  if (!patternId || !config) return;
  try {
    const map = loadPatternConfigs();
    map[patternId] = normalizeConfig({ ...config, patternId });
    localStorage.setItem(PATTERN_CONFIGS_KEY, JSON.stringify(map));
  } catch (err) {
    console.warn('Could not save per-pattern config:', err);
  }
}

export function saveConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    if (config?.patternId) {
      savePatternConfigForId(config.patternId, config);
    }
  } catch (err) {
    console.warn('Could not save config to localStorage:', err);
  }
}

export function applyPatternDefaults(config, patternId) {
  const pattern = getPatternById(patternId);
  return {
    ...config,
    patternId: pattern.id,
    ...(typeof pattern.defaults.handCount === 'number'
      ? { handCount: pattern.defaults.handCount }
      : {}),
    ...(typeof pattern.defaults.chargeDuration === 'number'
      ? { chargeDuration: pattern.defaults.chargeDuration }
      : {}),
    videoBgEnabled:
      pattern.id === 'custom-ceremony' ? Boolean(config.videoBgEnabled) : false,
    eventBadge: pattern.defaults.eventBadge,
    eventTitle: pattern.defaults.eventTitle,
    eventSubtitle: pattern.defaults.eventSubtitle,
    celebrationTitle: pattern.defaults.celebrationTitle,
    celebrationDesc: pattern.defaults.celebrationDesc,
  };
}

export function switchPattern(currentConfig, nextPatternId) {
  const pattern = getPatternById(nextPatternId);
  if (currentConfig?.patternId) {
    savePatternConfigForId(currentConfig.patternId, currentConfig);
  }
  const map = loadPatternConfigs();
  const savedForTarget = map[pattern.id];
  if (savedForTarget && typeof savedForTarget === 'object') {
    const restored = normalizeConfig({ ...savedForTarget, patternId: pattern.id });
    savePatternConfigForId(pattern.id, restored);
    return restored;
  }
  const fresh = applyPatternDefaults(currentConfig || DEFAULT_CONFIG, pattern.id);
  savePatternConfigForId(pattern.id, fresh);
  return fresh;
}

export function resetPatternConfig(currentConfig, patternId) {
  const targetId = patternId || currentConfig?.patternId || DEFAULT_CONFIG.patternId;
  const pattern = getPatternById(targetId);
  const fresh = applyPatternDefaults(DEFAULT_CONFIG, pattern.id);
  try {
    const map = loadPatternConfigs();
    delete map[pattern.id];
    localStorage.setItem(PATTERN_CONFIGS_KEY, JSON.stringify(map));
  } catch (err) {
    console.warn('Could not reset pattern config:', err);
  }
  saveConfig(fresh);
  return fresh;
}

export function loadSavedPresets() {
  try {
    const raw = localStorage.getItem(SAVED_PRESETS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item === 'object' && item.id && item.config)
      .map((item) => ({
        id: String(item.id),
        name: String(item.name || 'Thiết lập chưa đặt tên'),
        patternId: String(item.patternId || item.config.patternId || DEFAULT_CONFIG.patternId),
        updatedAt: Number(item.updatedAt) || Date.now(),
        config: normalizeConfig(item.config),
      }))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
}

export function saveNamedPreset({ id, name, config }) {
  const normalized = normalizeConfig(config || DEFAULT_CONFIG);
  const pattern = getPatternById(normalized.patternId);
  const cleanName =
    (typeof name === 'string' && name.trim()) ||
    `${pattern.name} - ${normalized.eventTitle?.slice(0, 28) || 'Mặc định'}`;
  const now = Date.now();
  const existing = loadSavedPresets();
  const presetId =
    typeof id === 'string' && id.trim()
      ? id.trim()
      : `preset-${now}-${Math.random().toString(36).slice(2, 7)}`;

  const entry = {
    id: presetId,
    name: cleanName,
    patternId: pattern.id,
    updatedAt: now,
    config: JSON.parse(JSON.stringify(normalized)),
  };

  const next = [entry, ...existing.filter((item) => item.id !== presetId)];
  try {
    localStorage.setItem(SAVED_PRESETS_KEY, JSON.stringify(next));
  } catch (err) {
    console.warn('Could not save named preset:', err);
  }
  return { preset: entry, presets: next };
}

export function deleteSavedPreset(id) {
  const next = loadSavedPresets().filter((item) => item.id !== id);
  try {
    localStorage.setItem(SAVED_PRESETS_KEY, JSON.stringify(next));
  } catch (err) {
    console.warn('Could not delete named preset:', err);
  }
  return next;
}

export function createSyncChannel(onMessage) {
  if (typeof BroadcastChannel === 'undefined') {
    return {
      post: () => {},
      close: () => {},
    };
  }
  const channel = new BroadcastChannel(CHANNEL_NAME);
  channel.onmessage = (event) => {
    if (onMessage && event.data) {
      onMessage(event.data);
    }
  };
  return {
    post: (type, payload = {}) => {
      try {
        channel.postMessage({ type, payload, timestamp: Date.now() });
      } catch (err) {
        console.warn('BroadcastChannel post failed:', err);
      }
    },
    close: () => channel.close(),
  };
}

