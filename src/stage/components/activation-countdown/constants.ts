import type { HandAnchor, PillarItem } from './types';

export const SVG_CENTER = { x: 960, y: 470 };

export const SIX_HAND_ANCHORS: HandAnchor[] = [
  { id: 0, label: 'Đại biểu 1', svgX: 260, svgY: 876, leftPct: 13.5417, bottomPct: 18.8889, tiltDeg: -10 },
  { id: 1, label: 'Đại biểu 2', svgX: 540, svgY: 910, leftPct: 28.125, bottomPct: 15.7407, tiltDeg: -6 },
  { id: 2, label: 'Đại biểu 3', svgX: 820, svgY: 928, leftPct: 42.7083, bottomPct: 14.0741, tiltDeg: -2 },
  { id: 3, label: 'Đại biểu 4', svgX: 1100, svgY: 928, leftPct: 57.2917, bottomPct: 14.0741, tiltDeg: 2 },
  { id: 4, label: 'Đại biểu 5', svgX: 1380, svgY: 910, leftPct: 71.875, bottomPct: 15.7407, tiltDeg: 6 },
  { id: 5, label: 'Đại biểu 6', svgX: 1660, svgY: 876, leftPct: 86.4583, bottomPct: 18.8889, tiltDeg: 10 },
];

export const DEFAULT_PILLARS: PillarItem[] = [
  {
    id: 'chinh-quyen-so',
    title: 'Chính quyền số',
    desc: 'Kiến tạo • Minh bạch • Hiệu lực, hiệu quả',
    iconKey: 'gov',
  },
  {
    id: 'kinh-te-so',
    title: 'Kinh tế số',
    desc: 'Đột phá năng suất • Động lực tăng trưởng mới',
    iconKey: 'eco',
  },
  {
    id: 'xa-hoi-so',
    title: 'Xã hội số',
    desc: 'Lấy người dân làm trung tâm • Kết nối toàn diện',
    iconKey: 'soc',
  },
];

export const DEFAULT_MAIN_TITLE = 'KÍCH HOẠT NGÀY HỘI CHUYỂN ĐỔI SỐ 2026';
export const DEFAULT_SUBTITLE_BADGE = 'NGHI THỨC CHẠM TAY KÍCH HOẠT • 10.10.2026';
