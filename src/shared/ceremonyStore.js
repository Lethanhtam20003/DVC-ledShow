import { getPatternById } from './patterns';

export const STORAGE_KEY = 'cham_tay_studio_config_v2';
export const CHANNEL_NAME = 'cham_tay_stage_sync_v2';

export const DEFAULT_CONFIG = {
  patternId: 'dong-son',
  handCount: 5,
  chargeDuration: 5000,
  podY: -40,
  podSize: 108,
  podGap: 36,
  coreY: 0,
  coreScale: 1.0,
  videoBgEnabled: true,
  videoSource: 'local', // 'local' (offline MP4) | 'youtube' | 'none'
  youtubeVideoId: 'sbDz4hoZWCk',
  videoOpacity: 0.55,
  tintDarkness: 0.45,
  screenBrightness: 76,
  autoPhotoOpDim: true,
  masterVolume: 0.8,
  audioEnabled: true,
  showHeader: false,
  eventBadge: 'ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ',
  eventTitle: 'NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ',
  eventSubtitle: 'CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN',
  celebrationTitle: 'CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG',
  celebrationDesc: 'ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG',
  customLogoData: null,
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

export function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONFIG };
    const parsed = JSON.parse(raw);
    if (parsed.youtubeVideoId === 'qyW8818wHhA') {
      parsed.youtubeVideoId = 'sbDz4hoZWCk';
    }
    return { ...DEFAULT_CONFIG, ...parsed };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function saveConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.warn('Could not save config to localStorage:', err);
  }
}

export function applyPatternDefaults(config, patternId) {
  const pattern = getPatternById(patternId);
  return {
    ...config,
    patternId: pattern.id,
    eventBadge: pattern.defaults.eventBadge,
    eventTitle: pattern.defaults.eventTitle,
    eventSubtitle: pattern.defaults.eventSubtitle,
    celebrationTitle: pattern.defaults.celebrationTitle,
    celebrationDesc: pattern.defaults.celebrationDesc,
  };
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

