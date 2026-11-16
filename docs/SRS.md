# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)
**Dự án:** Ứng dụng Sân khấu LED — Nghi thức Kích hoạt Chuyển đổi số & Dịch vụ công Quốc gia  
**Phiên bản tài liệu:** 1.0  
**Ngày cập nhật:** 16/11/2026  
**Tiêu chuẩn tham chiếu:** IEEE 830 / ISO/IEC/IEEE 29148  

---

## 1. Giới Thiệu

### 1.1 Mục đích
Tài liệu này đặc tả đầy đủ các yêu cầu chức năng, phi chức năng, giao diện vận hành và ràng buộc kỹ thuật của hệ thống trình chiếu tương tác sân khấu LED phục vụ **Nghi thức Lãnh đạo Bấm nút / Chạm tay Kích hoạt Chuyển đổi số & Cổng Dịch vụ công**. Tài liệu là cơ sở thống nhất giữa Ban tổ chức sự kiện, Đạo diễn sân khấu, Kỹ thuật viên vận hành và Nhóm phát triển/bảo trì phần mềm.

### 1.2 Phạm vi sản phẩm
Hệ thống là một ứng dụng web độc lập (Client-side Single Page Application) chạy trực tiếp trên trình duyệt web hiện đại (Google Chrome / Microsoft Edge) ở chế độ toàn màn hình (`F11`) trên màn hình LED sân khấu chính, hỗ trợ cả **màn hình cảm ứng đa điểm** và **điều khiển từ xa qua bàn kỹ thuật**.

Các thành phần chính thuộc phạm vi hệ thống:
- Sân khấu trình chiếu LED (`#stage`) gồm lớp video nền, lớp Canvas hạt & hiệu ứng pháo/hào quang, tâm năng lượng Trống Đồng Đông Sơn (`#core-hologram`), dãy bục chạm tay lãnh đạo (`#touch-zones`) và màn hình Vinh danh (`#celebration-screen`).
- Hệ thống tổng hợp âm thanh sự kiện thời gian thực bằng Web Audio API (`StateCeremonyAudio`) không phụ thuộc tệp âm thanh rời.
- Bảng điều hành kỹ thuật 4 Tab (`#control-panel`) cho phép hiệu chỉnh trực tiếp tại hiện trường và lưu cấu hình tự động vào `localStorage`.

### 1.3 Đối tượng sử dụng
| Vai trò | Mô tả tương tác |
| :--- | :--- |
| **Lãnh đạo / Đại biểu** | Tiến lên sân khấu, đặt bàn tay lên các bục trống đồng mạ vàng (trên màn LED cảm ứng) hoặc thực hiện động tác chạm tượng trưng theo hiệu lệnh MC. |
| **MC / Đạo diễn sự kiện** | Điều phối nhịp đếm ngược `5 - 4 - 3 - 2 - 1` và thời điểm chụp ảnh lưu niệm (Photo-Op) trên nền màn hình Vinh danh. |
| **Kỹ thuật viên Sân khấu (AV/LED)** | Vận hành bảng điều khiển (`H`), kích hoạt dự phòng (`SPACE`), reset (`R`), cân chỉnh vị trí bục chạm/tâm core, hiệu chuẩn độ sáng chống cháy sáng mặt khi chụp ảnh, kiểm tra âm lượng mixer và nguồn video nền. |

### 1.4 Thuật ngữ và Viết tắt
- **LED Stage**: Màn hình LED khổ lớn trung tâm sân khấu.
- **Key Moment**: Khoảnh khắc cao trào đếm ngược `5 - 4 - 3 - 2 - 1` chuyển sang bùng nổ kích hoạt.
- **Photo-Op**: Thời điểm các đồng chí Lãnh đạo đứng trước màn hình Vinh danh để báo chí và nhiếp ảnh gia tác nghiệp.
- **Overscan**: Kỹ thuật phóng đại khung hình video YouTube (`youtube-player-wrap`) vượt kích thước khung nhìn để loại bỏ thanh tiêu đề, nút chia sẻ và logo YouTube khỏi vùng hiển thị LED.

---

## 2. Mô Tả Tổng Quan

### 2.1 Bối cảnh vận hành
- **Chế độ trực tuyến (Online)**: Tải video nền Trống Đồng từ YouTube Iframe API (mặc định ID `sbDz4hoZWCk`) với cơ chế tự động chuyển về nguồn an toàn khi video gặp lỗi nhúng.
- **Chế độ ngoại tuyến (Offline)**: Mở trực tiếp tệp `index.html` trên máy tính bàn điều hành; sử dụng tệp video MP4 nội bộ (ví dụ: `Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4`), toàn bộ đồ họa SVG, Canvas 2D và âm thanh Web Audio chạy nội bộ 100% không cần Internet.

### 2.2 Ràng buộc thiết kế & Quy chuẩn thẩm mỹ
- **Công nghệ thuần (Zero-Build)**: Chỉ sử dụng HTML5, CSS3 và Vanilla JavaScript ES6 (`index.html`, `styles.css`, `app.js`), không phụ thuộc framework hay công cụ đóng gói ngoài.
- **Thẩm mỹ Lễ tân Nhà nước**: Tông màu chủ đạo **Đỏ Lễ Tiết & Vàng Kim Hoàng Gia** (hoặc tùy chọn **Xanh Dịch Vụ Công & Vàng Đồng**), họa tiết Trống Đồng Đông Sơn, Ngôi sao vàng và đường nét kiến trúc đô thị thông minh (`#city-skyline`).
- **Sạch sẽ tuyệt đối khi trình chiếu**: Ẩn toàn bộ giao diện kỹ thuật khi nhấn `H`; ẩn toàn bộ bục chạm, tâm nạp và tiêu đề phụ khi chuyển sang màn hình Vinh danh (`body.in-celebration`).

---

## 3. Yêu Cầu Chức Năng (Functional Requirements)

### FR-01: Trạng thái Chờ (Standby) & Tiêu đề Sự kiện
- **FR-01.1**: Khi mới khởi động hoặc sau khi Reset (`R`), hệ thống phải ở trạng thái chờ sạch sẽ (`body` không có class `charging` và `in-celebration`).
- **FR-01.2**: Ở chế độ Key Moment (`animationStyle = 'keymoment'`), tâm Trống Đồng phải ẩn số đếm ngược (`.countdown-big-number`) và hiển thị biểu trưng **Ngôi sao Trống Đồng Đông Sơn** (`.countdown-standby-star`).
- **FR-01.3**: Tiêu đề sự kiện ở phần đầu trang (`header`) mặc định ở trạng thái ẩn (`state.showHeader = false`) để ưu tiên trình chiếu nền Trống Đồng thoáng rộng; kỹ thuật viên có thể bật/tắt qua công tắc `#toggle-show-header` trong Tab 4.

### FR-02: Tương tác Bục Chạm Tay & Kích hoạt Dự phòng
- **FR-02.1**: Hệ thống sinh động từ **1 đến 12 bục chạm** (`state.handCount`, mặc định `5`) trong `#touch-zones`, hỗ trợ sự kiện chạm đa điểm (`touchstart`/`touchend`) và chuột (`mousedown`/`mouseup`).
- **FR-02.2**: Khi một bục được chạm, gọi `activateHand(id)`, phát âm thanh chạm khánh tiết (`playTouchChime()`) và phát tia năng lượng hướng tâm.
- **FR-02.3**: Khi toàn bộ bục đang hiển thị cùng được chạm (`activeHands.size >= handCount`) hoặc khi kỹ thuật viên nhấn phím `SPACE` / nút **Kích hoạt Tất cả** (`#btn-trigger-all`), hệ thống chuyển ngay sang trạng thái nạp nghi thức (`startChargingProcess()`).

### FR-03: Hai Chế Độ Hoạt Ảnh Trung Tâm
- **FR-03.1 (Chế độ `keymoment` — Mặc định)**: Trong suốt thời gian `state.chargeDuration` (3000ms / 5000ms / 7000ms), thêm class `body.charging`, ẩn `.countdown-standby-star`, hiển thị `.countdown-big-number` đếm ngược theo giây từ `5` về `1` (hoặc tương ứng theo `chargeDuration`) đồng bộ với âm thanh `playCountdownBeep(sec)`.
- **FR-03.2 (Chế độ `liquid`)**: Dâng mức năng lượng lỏng vàng kim từ `0%` đến `100%` bên trong `#liquid-vessel` với 2 lớp sóng (`#liquid-wave-back`, `#liquid-wave-front`).
- **FR-03.3**: Nếu người dùng buông tay trước khi hoàn thành (khi kích hoạt bằng chạm thực tế), `cancelChargingProcess()` phải hủy tiến trình, gỡ class `body.charging` và đưa tâm về trạng thái chờ ban đầu.

### FR-04: Cao Trào Mở Khóa & Màn Hình Vinh Danh (Celebration / Photo-Op)
- **FR-04.1**: Khi tiến độ đạt `100%`, `completeActivation()` kích hoạt chớp sáng vàng kim (`#climax-flash`), sóng xung kích (`StateShockwave`), pháo hoa/kim tuyến vàng (`triggerStageFirework`, `triggerStateExplosion`, `GoldConfettiParticle`) và phát khúc nhạc kèn đồng (`playFanfare()`).
- **FR-04.2**: Kích hoạt class `body.in-celebration` và hiển thị `#celebration-screen`. Ở trạng thái này, CSS tự động ẩn Header, `#core-hologram`, `#touch-zones` và `#city-skyline` để chỉ còn **nền Trống Đồng + nội dung Vinh danh**.
- **FR-04.3**: Màn hình Vinh danh hiển thị: Biểu trưng mặc định (`#celeb-default-logo`) hoặc Logo đơn vị tải lên (`#celeb-custom-logo`), dải Ribbon, Tiêu đề chính (`#celeb-title`), Khẩu hiệu (`#celeb-desc`) và 3 Trụ cột Chuyển đổi số (Chính quyền số, Kinh tế số, Xã hội số).
- **FR-04.4**: Hỗ trợ nút **Xem Màn Vinh Danh** (`#btn-preview-finale`) ở Tab 1 để đạo diễn kiểm tra nhanh khung hình Photo-Op mà không cần chờ đếm ngược.

### FR-05: Hệ Thống Âm Thanh Sân Khấu (`StateCeremonyAudio`)
- **FR-05.1**: Sử dụng Web Audio API với nút âm lượng tổng `masterGain` điều chỉnh qua `#range-volume` (`0` – `1.0`, mặc định `0.8`).
- **FR-05.2**: Hỗ trợ bật/tắt tiếng nhanh bằng phím `M` hoặc nút `#btn-audio-toggle`, và nút thử âm thanh `#btn-test-audio` để cân chỉnh mixer hội trường trước giờ G.

### FR-06: Quản Lý Video Nền & Cơ Chế Dự Phòng Lỗi
- **FR-06.1**: Hỗ trợ 2 nguồn video trong `#video-bg-container`: **YouTube** (`src-youtube`, mặc định `sbDz4hoZWCk`) và **Tệp MP4 nội bộ** (`src-local`, `#input-local-video`).
- **FR-06.2**: Tự động trích xuất Video ID từ URL YouTube bất kỳ (`extractYouTubeId()`).
- **FR-06.3**: Khi YouTube Iframe API trả về mã lỗi `101`, `150` (chủ sở hữu tắt nhúng) hoặc `2` (ID không hợp lệ), `initYouTubePlayer()` phải tự động chuyển về ID dự phòng an toàn `sbDz4hoZWCk` và cập nhật lại `localStorage`.
- **FR-06.4**: Cho phép bật/tắt video nền (`#toggle-video-bg`), chỉnh độ mờ video (`#range-opacity`) và độ phủ tối (`#range-tint`).

### FR-07: Bảng Điều Hành Kỹ Thuật 4 Tab & Phím Tắt
- **FR-07.1 (Phím tắt toàn cục)**:
  - `SPACE`: Bắt đầu nghi thức (`triggerAllHands()`).
  - `R`: Reset toàn bộ trạng thái về màn hình chờ (`resetActivation()`).
  - `H`: Ẩn / Hiện bảng điều khiển (`toggleControlPanel()`).
  - `F11`: Bật / Tắt toàn màn hình trình duyệt.
  - `M`: Bật / Tắt âm thanh.
- **FR-07.2 (Tab 1 — Điều hành `#tab-control`)**: Chứa các nút Kích hoạt, Reset, Fullscreen, Mixer âm lượng + Test âm thanh, Xem màn vinh danh, và **Ghi hình Video Canvas** (`#btn-export-video` dùng `MediaRecorder` xuất tệp `.webm` 1920×1080 @ 60fps).
- **FR-07.3 (Tab 2 — Vị trí & Kích thước `#tab-position`)**:
  - Điều chỉnh số lượng đại biểu (`1` – `12` bục).
  - Điều chỉnh vị trí cao/thấp (`#range-pod-y`), kích thước đường kính (`#range-pod-size`), khoảng cách (`#range-pod-gap`) của bục chạm và nút đặt lại (`#btn-reset-position`).
  - Điều chỉnh độ cao (`#range-core-y`) và tỷ lệ phóng to/thu nhỏ (`#range-core-scale`) của Tâm năng lượng & đồng hồ đếm ngược kèm nút đặt lại (`#btn-reset-core-position`).
- **FR-07.4 (Tab 3 — Video nền & Độ sáng LED `#tab-video`)**:
  - Hiệu chuẩn độ sáng màn LED (`#range-brightness`: 40%–100%, mặc định `72%` chống cháy sáng mặt khi chụp ảnh) và các preset nhanh (`#group-brightness-preset`).
  - Công tắc **Tự động cân bằng sáng khi mở khóa** (`#toggle-photo-dim`) đưa độ sáng về mức dịu tối ưu lúc Photo-Op.
  - Chọn nguồn video YouTube / MP4 nội bộ, preset video nhanh (`#btn-preset-dongson`, `#btn-preset-keymoment`).
- **FR-07.5 (Tab 4 — Cấu hình sự kiện `#tab-settings`)**:
  - Chọn tông màu Nhà nước (`#group-theme-color`: Đỏ & Vàng Kim hoặc Xanh DVC & Vàng Đồng).
  - Chọn kiểu hoạt ảnh trung tâm (`#group-animation-style`: `keymoment` hoặc `liquid`).
  - Chọn thời gian nạp (`#select-duration`: 3s, 5s, 7s).
  - Tùy chỉnh nội dung chữ (`#input-badge`, `#input-title`, `#input-subtitle`), ẩn/hiện header (`#toggle-show-header`), và tải Logo đơn vị PNG (`#input-logo`).

### FR-08: Lưu Trữ Bền Vững & Tự Động Di Trú Cấu Hình
- **FR-08.1**: Mọi tham số cấu hình sân khấu (`handCount`, `podY`, `podSize`, `podGap`, `coreY`, `coreScale`, `masterVolume`, `screenBrightness`, `autoPhotoOpDim`, `animationStyle`, `showHeader`, `youtubeVideoId`, `customLogoData`) phải được lưu trong `localStorage` để giữ nguyên sau khi tải lại trang (`F5`).
- **FR-08.2**: Khi khởi tạo, nếu `localStorage.getItem('youtubeVideoId') === 'qyW8818wHhA'` (ID cũ bị chặn nhúng), hệ thống tự động di trú sang `'sbDz4hoZWCk'`.

---

## 4. Yêu Cầu Phi Chức Năng (Non-Functional Requirements)

| Mã | Nhóm | Yêu cầu chi tiết |
| :--- | :--- | :--- |
| **NFR-01** | Hiệu năng | Vòng lặp đồ họa Canvas (`renderBg`, `renderFX`) vận hành mượt mà ở mức ~60fps trên độ phân giải Full HD (1920×1080), tự co giãn theo kích thước cửa sổ (`resizeCanvases()`). |
| **NFR-02** | Khả năng chạy Offline | Không phụ thuộc CDN bắt buộc cho logic lõi; hoạt động đầy đủ khi mở bằng giao thức `file://` hoặc web server nội bộ với nguồn video MP4 dự phòng. |
| **NFR-03** | Độ tin cậy sự kiện | Có cơ chế fallback tự động cho YouTube Iframe error (`101`, `150`, `2`), phím tắt `SPACE` dự phòng trường hợp màn LED không hỗ trợ cảm ứng đa điểm, và `R` khôi phục tức thì dưới 1 giây. |
| **NFR-04** | Khả năng bảo trì | Tách biệt rõ cấu trúc DOM (`index.html`), giao diện & biến CSS (`styles.css`), và logic trạng thái/âm thanh/đồ họa (`app.js`). |
| **NFR-05** | Tương thích | Hoạt động ổn định trên Google Chrome và Microsoft Edge phiên bản mới nhất trên Windows. |

---

## 5. Ma Trận Truy Vết Yêu Cầu (RTM)

| Mã Yêu Cầu | Thành Phần DOM (`index.html`) | Xử Lý Logic (`app.js`) | Trạng Thái CSS (`styles.css`) |
| :--- | :--- | :--- | :--- |
| **FR-01** | `#countdown-standby-star`, `header` | `DOMContentLoaded`, `resetActivation()` | `.countdown-standby-star`, `body.header-visible` |
| **FR-02** | `#touch-zones`, `#btn-trigger-all` | `renderTouchPedestals()`, `activateHand()`, `triggerAllHands()` | `.touch-pod`, `.touch-pod.active` |
| **FR-03** | `#core-countdown-state`, `#countdown-big-number`, `#liquid-vessel` | `startChargingProcess()`, `cancelChargingProcess()`, `updateLiquidWave()` | `body.charging`, `.mode-keymoment`, `.mode-liquid` |
| **FR-04** | `#celebration-screen`, `#climax-flash`, `#btn-preview-finale` | `completeActivation()`, `triggerStageFirework()`, `triggerStateExplosion()` | `body.in-celebration`, `#celebration-screen.visible` |
| **FR-05** | `#range-volume`, `#btn-audio-toggle`, `#btn-test-audio` | `StateCeremonyAudio`, `updateVolumeSettings()` | `.btn-icon` |
| **FR-06** | `#video-bg-container`, `#youtube-player`, `#local-video-player` | `initYouTubePlayer()`, `updateVideoBg()`, `extractYouTubeId()` | `.video-bg-layer`, `.youtube-overscan` |
| **FR-07** | `#control-panel`, `#tab-control`, `#tab-position`, `#tab-video`, `#tab-settings` | `setupEventListeners()`, `applyPodSettings()`, `applyCoreSettings()`, `applyBrightnessSettings()` | `.control-panel`, `.panel-hidden` |
| **FR-08** | Toàn bộ input cấu hình | `state`, `localStorage` get/set & auto-migration | — |

