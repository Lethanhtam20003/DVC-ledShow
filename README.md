# HƯỚNG DẪN VẬN HÀNH NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ
### SỰ KIỆN KHÁNH TIẾT CƠ QUAN NHÀ NƯỚC & CỔNG DỊCH VỤ CÔNG

Ứng dụng trình chiếu sân khấu LED phục vụ **Nghi thức Lãnh đạo Bấm nút / Chạm tay Kích hoạt Chuyển đổi số & Dịch vụ công**, thiết kế theo quy chuẩn lễ tân khánh tiết cấp Nhà nước: **Tông màu Đỏ Lễ Tiết & Vàng Kim Hoàng Gia, Họa tiết Trống Đồng Đông Sơn, Hào quang Mặt Trời Lạc Việt**.

---

## 1. Khởi Động Nhanh Trên Màn Hình LED
- Click đúp mở tệp **[index.html](file:///d:/dichvucong/ngày%20hội%20chuyên%20đổi%20số/chạm%20tay/index.html)** bằng trình duyệt **Google Chrome** hoặc **Microsoft Edge**.
- Bấm phím **`F11`** để chuyển sang chế độ Toàn Màn Hình (Fullscreen) chuẩn sân khấu LED.
- Bấm phím **`H`** để ẩn thanh điều khiển kỹ thuật để màn hình hoàn toàn trang nghiêm và sạch sẽ trước khi đại biểu lên sân khấu.

### 📚 Tài Liệu Kỹ Thuật & Đặc Tả
- **[Đặc tả Yêu cầu Phần mềm (SRS)](file:///d:/dichvucong/ngày%20hội%20chuyên%20đổi%20số/chạm%20tay/docs/SRS.md)**: Chi tiết yêu cầu chức năng (`FR-01` – `FR-08`), phi chức năng (`NFR-01` – `NFR-05`) và ma trận truy vết.
- **[Kiến trúc Hệ thống (Architecture)](file:///d:/dichvucong/ngày%20hội%20chuyên%20đổi%20số/chạm%20tay/docs/ARCHITECTURE.md)**: Sơ đồ luồng trạng thái, phân lớp CSS, cấu trúc `localStorage` và các phân hệ Canvas/Audio/Video.

---

## 2. Kịch Bản Khánh Tiết Chuẩn (MC & Bàn Kỹ Thuật Phối Hợp)

### 📌 Giai Đoạn 1: Mời Lãnh Đạo Lên Bục (Sẵn Sàng Khởi Động)
- **MC**: *"Kính thưa quý vị đại biểu, sau đây xin trân trọng kính mời các đồng chí Lãnh đạo tiến lên sân khấu để thực hiện Nghi thức chính thức Kích hoạt Chuyển đổi số và Vận hành Hệ thống Dịch vụ công..."*
- **Màn hình LED**: Trống đồng Đông Sơn xoay uy nghi, ánh hào quang mặt trời Lạc Việt tỏa rạng, 5 bục trống đồng mạ vàng nhấp nháy ánh vàng kim trang trọng.

### 📌 Giai Đoạn 2: Chạm Tay & Đếm Ngược Khởi Động (5 - 4 - 3 - 2 - 1)
- **MC**: *"Kính mời các đồng chí Lãnh đạo cùng đặt bàn tay lên bục kích hoạt... Xin toàn thể hội trường cùng đếm ngược: 5... 4... 3... 2... 1... KÍCH HOẠT!"*
- **Thao tác**:
  - **Màn LED cảm ứng**: Các đồng chí lãnh đạo chạm tay trực tiếp lên các bục đĩa trống đồng.
  - **Màn LED thường**: Kỹ thuật viên tại bàn âm thanh/ánh sáng chỉ cần bấm phím **`SPACE` (Phím cách)**.
- **Hiệu ứng**:
  - Dải lụa ánh sáng vàng kim vương giả phóng từ các bục trống đồng hội tụ về tâm.
  - Số đếm ngược khổng lồ màu vàng kim **`5... 4... 3... 2... 1`** hiển thị ở trung tâm đồng bộ với tiếng chuông đồng điểm nhịp.
  - Âm vang Trống đồng rền vang hùng tráng dâng cao.

### 📌 Giai Đoạn 3: Kích Hoạt Thành Công & Chụp Ảnh Vinh Danh (Photo-Op)
- Mở khóa rực rỡ, sóng xung kích hào quang vàng kim tỏa rộng.
- Biểu trưng Dịch vụ công / Quốc gia số xuất hiện rực rỡ cùng dải biểu ngữ: **"CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG"**.
- Khúc nhạc kèn đồng Fanfare khánh tiết vang dội cùng mưa kim tuyến vàng kim bay nhẹ nhàng trong suốt thời gian các đồng chí Lãnh đạo đứng chụp ảnh lưu niệm trên sân khấu.

---

## 3. Bảng Phím Tắt Sân Khấu (Kỹ Thuật Nhanh)

| Phím Tắt | Chức Năng | Thời Điểm Sử Dụng |
| :--- | :--- | :--- |
| **`SPACE` (Phím cách)** | **Bắt đầu nghi thức** | Bấm khi lãnh đạo chạm tay hoặc khi MC hô đếm |
| **`R`** | **Làm lại / Reset** | Đưa về màn hình chờ ban đầu để chuẩn bị hoặc tổng duyệt |
| **`H`** | **Ẩn / Hiện Bảng Kỹ Thuật** | Ẩn toàn bộ menu kỹ thuật để màn hình LED trang nghiêm |
| **`F11`** | **Toàn màn hình** | Phóng to tràn viền LED sân khấu |
| **`M`** | **Bật / Tắt Âm thanh** | Bật/tắt tiếng trống hội & kèn fanfare |

---

## 4. Các Tùy Chỉnh Có Sẵn Trên Bàn Điều Hành
Hệ thống được chia thành 4 Tab điều hành trực quan (Bấm phím **`H`** để mở):

### 🎮 Tab 1: ĐIỀU HÀNH
- **Bắt đầu nghi thức (Phím Space)**: Khởi động dâng nước năng lượng và mở khóa nghi thức.
- **Làm lại / Reset (Phím R)**: Khôi phục lại trạng thái chờ ban đầu.
- **Toàn màn hình (Phím F11)**: Mở rộng tràn toàn bộ màn LED.
- **Âm lượng tổng (Mixer Master Out)**: Thanh trượt 0 - 100% kèm nút **Thử âm thanh Fanfare** để kiểm tra mức âm lượng với bàn mixer hội trường trước giờ G.
- **Bật / Tắt âm thanh (Phím M)**: Tắt/mở nhanh âm thanh.
- **🏆 XEM MÀN VINH DANH**: Bật/tắt tức thì màn hình vinh danh chuẩn điện ảnh để đạo diễn duyệt góc máy quay và pháo sáng.
- **Ghi và tải Video Dự phòng**: Tự động quay lại lớp hiệu ứng Canvas 60fps Full HD (`1920×1080`, định dạng `.webm`) để phát dự phòng trên vMix / Resolume.

### 📐 Tab 2: VỊ TRÍ & SỐ LƯỢNG BỤC CHẠM TAY
- **Số lượng đại biểu tham gia (1 - 12 Lãnh đạo)**: Nút chọn nhanh từ 1 đến 10 và bộ tăng giảm `[-]` `[+]` linh hoạt theo đúng danh sách lãnh đạo thực tế. Tự động co giãn kích thước thông minh khi số lượng người đông (8 - 12 người).
- **Độ cao bục chạm (Nâng lên / Hạ xuống)**: Kéo trượt từ -220px đến +80px để nâng hàng bục lên đúng chiều cao đứng tự nhiên của lãnh đạo trên sân khấu (không phải cúi người).
- **Kích thước bục chạm (Đường kính)**: Điều chỉnh từ 60px đến 200px (mặc định chuẩn tay là 110px). Kéo đến đâu kích thước thay đổi tức thì đến đó.
- **Khoảng cách giữa các bục (Pod Gap)**: Căn đều khoảng cách đứng giữa các vị lãnh đạo (8px đến 110px).
- **Vị trí & Tỷ lệ Tâm Năng Lượng (Core)**: Điều chỉnh độ cao (`coreY`) và tỷ lệ phóng to/thu nhỏ (`coreScale`) của vòng Trống Đồng & đồng hồ đếm ngược trung tâm.
- *Các thiết lập này tự động lưu lại trong máy (`localStorage`), không bị mất khi tải lại trang!*

### 🎬 Tab 3: VIDEO NỀN & ĐỘ SÁNG LED (PHOTO-OP)
- **Độ sáng màn hình LED & Chống cháy sáng mặt (Photo-Op Calibration)**:
  - Thanh trượt từ 40% đến 100% kèm các preset nhanh: `65% (Dịu nhẹ)`, `72% (Chuẩn Photo khuyến nghị)`, `85% (Tiêu chuẩn)`, `100% (Tối đa)`.
  - Công tắc **Tự động cân bằng sáng chống lóa khi Mở Khóa**: Tự động đưa độ sáng về mức 70% dịu đẹp khi lãnh đạo đứng chụp hình.
- **Kỹ thuật Overscan 130%**: Che triệt để 100% thanh tiêu đề và các nút logo của YouTube, không bao giờ bị hiện lên khi chuyển tab.
- **Nguồn 1 - YouTube**: Mặc định chạy video **"Background Trống Đồng Bản Đồ Việt Nam | I Love Viet Nam"** (`sbDz4hoZWCk`).
- **Nguồn 2 - Tải Video MP4 Từ Máy Tính**: Chạy ngoại tuyến an toàn khi hội trường không có Internet.
- **Thanh trượt Độ Mờ (Opacity) & Độ Phủ Tối (Tint)**: Tinh chỉnh ánh sáng video nền để nổi bật sân khấu.

### ⚙️ Tab 4: CẤU HÌNH SỰ KIỆN
- **Tông màu Nhà nước**: *Đỏ & Vàng Kim* hoặc *Xanh Dịch Vụ Công & Vàng Đồng*.
- **Kiểu hoạt ảnh trung tâm**: *Key Moment đếm ngược 5-4-3-2-1* (mặc định, trạng thái chờ hiển thị Ngôi sao Trống Đồng) hoặc *Bình nước Năng lượng*.
- **Thời gian nạp nghi thức**: 3 giây, 5 giây (chuẩn MC đếm 5-4-3-2-1), hoặc 7 giây (hào hùng trang nghiêm).
- **Thông tin đơn vị & Tiêu đề**: Tên cơ quan chỉ đạo, Tên nghi thức, Khẩu hiệu, công tắc ẩn/hiện tiêu đề đầu trang (`showHeader`, mặc định ẩn để giữ nền Trống Đồng sạch), Tải Logo riêng (PNG trong suốt).
