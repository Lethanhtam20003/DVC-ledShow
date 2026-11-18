import type { TechPillarItem } from './types';

export const SPEARHEAD_TIMING = {
  IGNITION_MS: 1200,
  BREAKTHROUGH_MS: 4000,
  DAWN_MS: 1100,
  TOTAL_MS: 6300,
} as const;

/** Normalized progress milestones where Logo smashes each 3D Hex Barrier */
export const BARRIER_PROGRESS_MILESTONES = [0.27, 0.51, 0.76] as const;

export const DEFAULT_SPEARHEAD_TITLE = 'KÍCH HOẠT NGÀY HỘI CHUYỂN ĐỔI SỐ 2026';
export const DEFAULT_SPEARHEAD_BADGE =
  'DẪN ĐẦU CÔNG PHÁ • KIẾN TẠO THẾ HỆ CÔNG NGHỆ MỚI';

export const DEFAULT_TECH_PILLARS: TechPillarItem[] = [
  {
    id: 'ai-data',
    tag: 'AI & DỮ LIỆU LỚN',
    title: 'Chính quyền số',
    desc: 'Vận hành thông minh dựa trên dữ liệu lớn, kiến tạo & minh bạch',
    iconKey: 'gov',
  },
  {
    id: 'nextgen-infra',
    tag: 'HẠ TẦNG ĐÁM MÂY & 5G',
    title: 'Kinh tế số',
    desc: 'Bứt phá năng suất bằng công nghệ lõi, tự động hóa & đổi mới sáng tạo',
    iconKey: 'ai',
  },
  {
    id: 'smart-society',
    tag: 'KẾT NỐI THẾ HỆ MỚI',
    title: 'Xã hội số',
    desc: 'Phổ cập công nghệ hiện đại, an toàn & lấy con người làm trung tâm',
    iconKey: 'cloud',
  },
];
