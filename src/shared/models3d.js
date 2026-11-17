export const BUILTIN_3D_MODELS = [
  {
    id: 'cdsqg-2026',
    name: 'Biểu Tượng CĐSQG 10.10.2026 3D',
    subtitle: 'Logo 3 cánh xoay hội tụ & Vòng hội tụ dữ liệu 2026',
    badge: '10.10.2026',
    accentColor: '#FBAB18',
  },
  {
    id: 'dong-son',
    name: 'Trống Đồng Hoàng Gia 3D',
    subtitle: 'Biểu tượng văn hóa & lễ tân nhà nước',
    badge: 'Truyền thống',
    accentColor: '#f5c542',
  },
  {
    id: 'holo-globe',
    name: 'Quả Cầu Số Hologram 3D',
    subtitle: 'Địa cầu mạng lưới dữ liệu & kết nối số',
    badge: 'Công nghệ',
    accentColor: '#38bdf8',
  },
  {
    id: 'smart-city',
    name: 'Đô Thị Thông Minh 3D',
    subtitle: 'Quần thể kiến trúc Smart City phát sáng',
    badge: 'Kiến trúc',
    accentColor: '#fbbf24',
  },
  {
    id: 'crystal-core',
    name: 'Lõi Pha Lê Năng Lượng 3D',
    subtitle: 'Tinh thể năng lượng đa trục sang trọng',
    badge: 'Mặc định',
    accentColor: '#f59e0b',
  },
  {
    id: 'lotus-3d',
    name: 'Hoa Sen Vàng 3D',
    subtitle: 'Đóa sen vàng nhiều lớp cánh tỏa hào quang',
    badge: 'Mới',
    accentColor: '#fb7185',
  },
  {
    id: 'golden-star',
    name: 'Ngôi Sao Vàng 3D',
    subtitle: 'Ngôi sao 5 cánh nổi khối & vòng quỹ đạo',
    badge: 'Mới',
    accentColor: '#facc15',
  },
  {
    id: 'ai-cube',
    name: 'Chip AI & Lập Phương Số',
    subtitle: 'Khối lập phương công nghệ & mạch dữ liệu AI',
    badge: 'Mới',
    accentColor: '#22d3ee',
  },
  {
    id: 'none',
    name: 'Tắt vật thể 3D',
    subtitle: 'Ẩn vật thể 3D trung tâm để ưu tiên video/logo',
    badge: 'Tối giản',
    accentColor: '#94a3b8',
  },
];

export function getBuiltin3dModelById(id) {
  return (
    BUILTIN_3D_MODELS.find((m) => m.id === id) ||
    BUILTIN_3D_MODELS.find((m) => m.id === 'crystal-core') ||
    BUILTIN_3D_MODELS[0]
  );
}
