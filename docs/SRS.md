# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)
**Dự án:** Studio Trình Diễn Sân Khấu LED 3D (`cham-tay-led-3d-studio`) — Nghi thức Chạm Tay Kích Hoạt Chuyển Đổi Số & Sự Kiện Khánh Tiết  
**Phiên bản tài liệu:** 2.0  
**Phiên bản phần mềm:** 2.0.0  
**Ngày cập nhật:** 16/11/2026  
**Tiêu chuẩn tham chiếu:** IEEE 830 / ISO/IEC/IEEE 29148  

---

## 1. Giới Thiệu

### 1.1 Mục đích
Tài liệu này đặc tả đầy đủ các yêu cầu chức năng, phi chức năng, kiến trúc giao diện hai cửa sổ (Studio & Stage), mô hình dữ liệu và ràng buộc kỹ thuật của hệ thống **Studio Trình Diễn LED 3D** phục vụ **Nghi thức Lãnh đạo Chạm tay / Bấm nút Kích hoạt Chuyển đổi số, Dịch vụ công và Lễ Khai mạc**. Tài liệu là cơ sở thống nhất giữa Ban tổ chức sự kiện, Đạo diễn sân khấu, Kỹ thuật viên vận hành AV/LED và Nhóm phát triển/bảo trì phần mềm.

### 1.2 Phạm vi sản phẩm
Hệ thống là một ứng dụng web đa trang (Multi-Page Client-Side Application) xây dựng trên **React 19, Vite 6, Tailwind CSS v4 và Three.js (WebGL + Post-processing Bloom)**, vận hành hoàn toàn phía trình duyệt (hỗ trợ cả Online và Offline) với kiến trúc **2 cửa sổ tách biệt đồng bộ thời gian thực**:

1. **Cửa sổ Điều Hành — Studio (`index.html` → `src/studio/`)**:
   - Giao diện chọn 5 mẫu sân khấu 3D (`PatternGrid`), thanh điều khiển nhanh màn hình LED (`RemoteBar`), và không gian thiết lập trước giờ G kèm màn hình Demo 3D trực tiếp (`SetupWorkspace`).
2. **Cửa sổ Trình Chiếu — LED Stage (`stage.html` → `src/stage/`)**:
   - Cửa sổ trình chiếu toàn màn hình (`1920×1080` hoặc theo độ phân giải màn LED), hiển thị nền video/YouTube, không gian WebGL 3D (`ThreeStage`), dãy bục chạm đa điểm (`TouchPods`), hiệu ứng đếm ngược/video kích hoạt và màn hình Vinh danh (`Celebration`).
3. **Lớp Dùng Chung (`src/shared/`)**:
   - Lưu trữ cấu hình & đồng bộ đa cửa sổ (`ceremonyStore.js`), lưu trữ tệp media nhị phân (`mediaStorage.js`), danh mục mẫu 3D (`patterns.js`), và bộ tổng hợp âm thanh Web Audio API (`audioEngine.js`).

> **Ghi chú di sản (Legacy):** Phiên bản v1.0 thuần HTML/CSS/JS (Zero-Build) được lưu trữ tại thư mục `legacy/` (và một số tệp gốc cũ `app.js`, `styles.css`). Phiên bản hiện hành v2.0.0 sử dụng mã nguồn trong `src/` và đóng gói ra `dist/`.

### 1.3 Đối tượng sử dụng
| Vai trò | Mô tả tương tác |
| :--- | :--- |
| **Lãnh đạo / Đại biểu** | Tiến lên sân khấu, đặt bàn tay lên các bục chạm hiển thị trên màn LED cảm ứng (hoặc thực hiện động tác chạm tượng trưng theo hiệu lệnh MC). |
| **MC / Đạo diễn sự kiện** | Điều phối nhịp đếm ngược (`3s / 5s / 7s`), kiểm tra khung hình Demo trước giờ G trên `SetupWorkspace`, và điều phối thời điểm chụp ảnh lưu niệm (Photo-Op) trên màn hình Vinh danh. |
| **Kỹ thuật viên Sân khấu (AV/LED)** | Mở cửa sổ Studio trên màn hình laptop điều khiển, thiết lập mẫu/logo/video/bục chạm, mở cửa sổ Stage (`stage.html`) kéo sang màn hình LED mở rộng và bật `F11`, điều khiển qua `RemoteBar` hoặc phím tắt (`Space`, `R`, `M`, `F11`). |

### 1.4 Thuật ngữ và Viết tắt
- **Studio (`index.html`)**: Cửa sổ điều hành dành cho kỹ thuật viên, không hiển thị lên màn LED chính.
- **Stage (`stage.html`)**: Cửa sổ trình chiếu sạch tuyệt đối dành cho màn hình LED sân khấu.
- **Key Moment**: Khoảnh khắc cao trào đếm ngược (`5 - 4 - 3 - 2 - 1` hoặc `3s` / `7s`) hoặc phát video kích hoạt trước khi bùng nổ chuyển sang màn hình Vinh danh.
- **Photo-Op**: Thời điểm các đại biểu đứng trước màn hình Vinh danh để báo chí và nhiếp ảnh gia chụp ảnh lưu niệm.
- **Overscan**: Kỹ thuật phóng đại khung hình YouTube Iframe (`130%`, lệch `-15%`) để loại bỏ thanh tiêu đề và nút điều khiển khỏi vùng hiển thị LED.

---

## 2. Mô Tả Tổng Quan

### 2.1 Kiến trúc công nghệ & Bối cảnh vận hành
- **Nền tảng kỹ thuật**:
  - **React 19.1.0** & **React DOM 19.1.0**
  - **Vite 6.3.5** (Multi-page build với `base: './'`, đầu vào `studio: index.html` và `stage: stage.html`, đầu ra `dist/`)
  - **Tailwind CSS 4.1.6** (`@tailwindcss/vite`)
  - **Three.js 0.176.0** (`WebGLRenderer`, `ACESFilmicToneMapping`, `EffectComposer`, `RenderPass`, `UnrealBloomPass`, `OutputPass`)
  - **Lucide React 0.511.0** (Biểu tượng giao diện)
- **Vận hành Trực tuyến (Online)**: Hỗ trợ nhúng video nền từ YouTube (`youtubeVideoId`, mặc định `sbDz4hoZWCk`).
- **Vận hành Ngoại tuyến (Offline)**: Chạy ổn định qua máy chủ nội bộ (`vite preview` / static server) với tệp video MP4 mặc định (`./Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4`) hoặc video/ảnh do người dùng tải lên lưu trong **IndexedDB**, kết hợp đồ họa WebGL 3D và âm thanh Web Audio API nội bộ 100%.

### 2.2 Quy chuẩn thẩm mỹ & Phân lớp hiển thị
- **5 Chủ đề 3D chuyên biệt** phục vụ đa dạng bối cảnh (Lễ tân Nhà nước Đỏ-Vàng Trống Đồng, Công nghệ cao Cyan-Xanh dương, Đô thị thông minh, Lõi pha lê, và Mẫu tự thiết kế).
- **Sạch sẽ tuyệt đối trên Stage**: Cửa sổ `stage.html` không chứa bất kỳ thanh công cụ điều khiển nào; khi bước vào pha `celebration`, khối 3D trung tâm tự thu nhỏ biến mất (`scale -> 0.001`), `TouchPods` và `Header` bị ẩn để giữ khung hình Photo-Op thoáng sạch.

---

## 3. Yêu Cầu Chức Năng (Functional Requirements)

### FR-01: Quản Lý Mẫu Sân Khấu 3D (`PATTERNS` & `ThreeStage`)
- **FR-01.1**: Hệ thống cung cấp **5 mẫu sân khấu 3D** định nghĩa trong `src/shared/patterns.js`:
  1. `dong-son`: **Trống Đồng Hoàng Gia 3D** (3 vòng đồng tâm, đĩa lõi, 12 tia Mặt Trời Lạc Việt, vòng quỹ đạo; tông Vàng Kim `#f5c542` & Đỏ `#b91c1c`).
  2. `holo-globe`: **Quả Cầu Số Hologram 3D** (Khối đa diện wireframe `IcosahedronGeometry`, lõi cầu phát sáng, 2 vòng xích đạo; tông Cyan `#38bdf8` & Xanh dương `#0369a1`).
  3. `smart-city`: **Đô Thị Thông Minh 3D** (Cụm 7 tòa tháp kèm khung dây trên bệ đĩa nổi và vòng hào quang; tông Vàng `#fbbf24` & Xanh `#1d4ed8`).
  4. `crystal-core`: **Lõi Pha Lê Năng Lượng 3D** (Khối bát diện kim loại `OctahedronGeometry`, lồng wireframe và 3 vòng từ trường vuông góc; tông Vàng hổ phách `#f59e0b` & Tím `#4c1d95`).
  5. `custom-ceremony`: **Tự Thiết Kế Mẫu Lễ Khai Mạc** (`isCustom: true`, tối ưu cho ảnh bàn tay và video trình chiếu riêng).
- **FR-01.2**: Khi chọn mẫu trên `PatternGrid`, `applyPatternDefaults()` tự động cập nhật `patternId` cùng bộ chữ mặc định (`eventBadge`, `eventTitle`, `eventSubtitle`, `celebrationTitle`, `celebrationDesc`) và đồng bộ ngay sang Stage.
- **FR-01.3**: `ThreeStage` dựng sân khấu WebGL gồm: sương mù `FogExp2`, lưới sàn `GridHelper` (36×36), hệ thống đèn (`AmbientLight` + 2 `PointLight`), trường hạt `1.600` điểm chuyển động theo pha, hiệu ứng parallax theo con trỏ chuột và hậu kỳ `UnrealBloomPass`.

### FR-02: Kiến Trúc Hai Cửa Sổ & Đồng Bộ Thời Gian Thực
- **FR-02.1**: Từ Studio (`App.jsx`), người dùng nhấn **Trình chiếu Sân khấu** để mở `stage.html` trong cửa sổ riêng (`LED_STAGE_WINDOW`).
- **FR-02.2**: Giao tiếp hai chiều qua `BroadcastChannel('cham_tay_stage_sync_v2')` kết hợp sự kiện `storage` của trình duyệt:
  - **Studio → Stage**: `CONFIG_UPDATE` (cập nhật cấu hình tức thì), `MEDIA_UPDATED` (tải lại blob media từ IndexedDB), `CMD_START` (bắt đầu kích hoạt), `CMD_RESET` (đưa về chờ), `CMD_PREVIEW_CELEBRATION` (mở nhanh màn Vinh danh), `CMD_TEST_AUDIO` (phát thử nhạc Fanfare).
  - **Stage → Studio**: `STAGE_PHASE` thông báo trạng thái hiện tại (`standby` | `charging` | `celebration`) lên `RemoteBar`.

### FR-03: Không Gian Thiết Lập & Demo Trực Tiếp (`SetupWorkspace`)
- **FR-03.1**: Cửa sổ `SetupWorkspace` chia làm 2 phần: khung **Demo 3D trực tiếp** (`StageViewport` với `isPreview={true}` tỷ lệ 16:9 co giãn từ khung chuẩn `1920×1080`) cho phép chuyển nhanh 3 pha (`standby`, `charging`, `celebration`) hoặc bấm thử nghi thức ngay trên màn hình cấu hình; và bảng điều chỉnh **4 Tab**:
  - **Tab 1 (`custom` — Tay & Video)**: Tải ảnh bàn tay chạm tùy chỉnh, chọn màu phát sáng (`#f5c542`, `#38bdf8`, `#ef4444`, `#ffffff` hoặc bảng màu), chọn nguồn video nền (`local`, `youtube`, `none`), tải video nền MP4 và video kích hoạt tùy chỉnh.
  - **Tab 2 (`celebration` — Vinh Danh)**: Tùy chỉnh tông màu Vinh danh (`match-pattern`, `royal-gold`, `tech-cyan`), dải ruy-băng (`celebrationRibbon`), tiêu đề chính, khẩu hiệu, tải Logo đơn vị (`customLogoData`) & chỉnh kích thước Logo (`72px` – `220px`), bật/tắt và chỉnh sửa 3 Trụ cột (`celebrationPillars`), bật/tắt Header đầu trang (`showHeader`) cùng nội dung `eventBadge`, `eventTitle`, `eventSubtitle`.
  - **Tab 3 (`pods` — Bục & 3D)**: Chỉnh số lượng bục (`1` – `12`), thời gian đếm ngược (`3s`, `5s`, `7s`), độ cao bục `podY` (`-200px` – `60px`), kích thước bục `podSize` (`70px` – `180px`), khoảng cách `podGap` (`10px` – `100px`), tỷ lệ khối 3D `coreScale` (`0.6x` – `1.6x`), độ cao khối 3D `coreY` (`-150px` – `150px`), bật/tắt nhãn tên (`showPodLabels`) và sửa nhãn từng đại biểu (`podLabels`).
  - **Tab 4 (`stage` — Sáng & Loa)**: Chỉnh độ rõ video nền `videoOpacity` (`15%` – `100%`), độ sáng màn LED `screenBrightness` (`45%` – `100%`, mặc định `76%`), công tắc tự dịu sáng khi Vinh danh `autoPhotoOpDim`, âm lượng tổng `masterVolume` (`0%` – `100%`), tắt tiếng gốc video kích hoạt `activationVideoMuted`, và nút thử âm thanh.

### FR-04: Tương Tác Bục Chạm Tay (`TouchPods`) & Luồng Nạp Nghi Thức
- **FR-04.1**: `TouchPods` hiển thị từ `1` đến `12` bục chạm (mặc định `5`), hỗ trợ cảm ứng đa điểm (`touchstart`/`touchend`/`touchcancel`) và chuột (`mousedown`/`mouseup`/`mouseleave`). Khi số bục > 6 tự thu tỷ lệ `0.88`, khi > 8 tự thu `0.78`.
- **FR-04.2**: Mỗi bục hỗ trợ hiển thị biểu tượng mặc định (`Fingerprint`) hoặc ảnh bàn tay tải lên (`customHandImageUrl`) kèm hiệu ứng phát sáng theo `handGlowColor` và nhãn tên bên dưới.
- **FR-04.3**: Khi một bục được chạm ở pha `standby`, `StageApp` phát âm thanh `playTouchChime()`. Khi đủ toàn bộ số bục (`activeHands.size >= config.handCount`), hệ thống tự động chuyển sang pha `charging` (`startCharging(false)`).
- **FR-04.4**: Nếu kích hoạt bằng chạm thực tế (`!manualLockedRef.current`) mà người dùng buông tay trước khi hoàn thành, `handleDeactivateHand()` gọi `resetStage()` đưa sân khấu về trạng thái `standby`. Nếu kích hoạt bằng phím `Space` hoặc `CMD_START` (`manualLockedRef.current = true`), tiến trình chạy tự động đến hết thời lượng.
- **FR-04.5**: Trong pha `charging`:
  - Nếu **không có** video kích hoạt tùy chỉnh: Hiển thị số đếm ngược 3D (`countdownSec`) với hiệu ứng `animate-count-pop`, đồng bộ âm thanh `playCountdownBeep(sec)`, trường hạt 3D hút dần vào tâm và tăng cường độ `UnrealBloomPass`.
  - Nếu **có** video kích hoạt tùy chỉnh (`customActivationVideoUrl`): Ẩn khối 3D trung tâm (`hideCenterpiece={true}`) và ẩn số đếm ngược, phát video kích hoạt toàn màn hình ở lớp `z-20`; khi video kết thúc (`onEnded`) gọi `completeActivation()`.

### FR-05: Màn Hình Vinh Danh (Celebration / Photo-Op)
- **FR-05.1**: Khi hoàn thành pha nạp, `completeActivation()` bật chớp sáng `flashActive` (chuyển pha sau `320ms` trong `StageApp`), phát nhạc kèn đồng `playFanfare()` và chuyển sang pha `celebration`.
- **FR-05.2**: `Celebration` hiển thị Logo đơn vị (hoặc huy hiệu `Award` mặc định), dải Ribbon, Tiêu đề 3D ánh kim (`gold-3d-text` hoặc `cyan-3d-text`), Khẩu hiệu và 3 thẻ Trụ cột (nếu `showCelebrationPillars !== false`).
- **FR-05.3**: Nếu bật `autoPhotoOpDim` (mặc định `true`), độ sáng sân khấu tại pha `celebration` được giới hạn tối đa ở mức `72%` (`Math.min(config.screenBrightness, 72)`) để chống lóa/cháy sáng mặt đại biểu khi chụp ảnh.

### FR-06: Quản Lý Video Nền & Media Tùy Chỉnh
- **FR-06.1**: Hỗ trợ 3 chế độ nền: `'local'` (video tải lên hoặc tệp MP4 mặc định), `'youtube'` (tự trích xuất ID qua `extractYouTubeId()` và nhúng chế độ Overscan `130%`), hoặc `'none'` (chỉ dùng nền WebGL 3D).
- **FR-06.2**: Ảnh bàn tay (`customHandImage`), video nền (`customBgVideo`) và video kích hoạt (`customActivationVideo`) được lưu dạng Blob trong **IndexedDB** (`cham_tay_media_db`, object store `media_blobs`) để vượt giới hạn dung lượng của `localStorage`.

### FR-07: Hệ Thống Âm Thanh (`StateCeremonyAudio`) & Phím Tắt Sân Khấu
- **FR-07.1**: Tổng hợp âm thanh thời gian thực bằng Web Audio API (`AudioContext` + `masterGain`) với 3 hiệu ứng: `playTouchChime()`, `playCountdownBeep(num)` (sub-bass + chuông), và `playFanfare()` (hợp âm kèn đồng sawtooth qua bộ lọc lowpass).
- **FR-07.2**: Phím tắt trực tiếp trên cửa sổ Stage (`StageApp.jsx`):
  - `Space`: Bắt đầu kích hoạt khi đang ở pha `standby`.
  - `R`: Reset sân khấu về `standby`.
  - `M`: Bật / Tắt âm thanh (`audioEnabled`) và lưu cấu hình.
  - `F11`: Bật / Tắt toàn màn hình trình duyệt.

### FR-08: Lưu Trữ Cấu Hình & Di Trú Tự Động
- **FR-08.1**: Toàn bộ cấu hình văn bản, vị trí, độ sáng, âm lượng và ảnh Logo (`customLogoData`) được lưu bền vững trong `localStorage` dưới khóa `cham_tay_studio_config_v2`.
- **FR-08.2**: Khi tải cấu hình (`loadConfig()`), nếu phát hiện `youtubeVideoId === 'qyW8818wHhA'`, hệ thống tự động di trú sang `'sbDz4hoZWCk'`.

---

## 4. Yêu Cầu Phi Chức Năng (Non-Functional Requirements)

| Mã | Nhóm | Yêu cầu chi tiết |
| :--- | :--- | :--- |
| **NFR-01** | Hiệu năng đồ họa | Vòng lặp `ThreeStage` (`requestAnimationFrame`) vận hành mượt ở ~60fps với `1.600` hạt 3D và hậu kỳ `UnrealBloomPass`, tự giới hạn `devicePixelRatio` tối đa `2` và tự cập nhật kích thước khi thay đổi khung nhìn. |
| **NFR-02** | Khả năng chạy Offline | Không phụ thuộc tài nguyên CDN bên ngoài cho giao diện, đồ họa 3D và âm thanh; chạy hoàn chỉnh trên mạng nội bộ hoặc localhost với video MP4 offline và IndexedDB. |
| **NFR-03** | Độ tin cậy vận hành | Tách biệt cửa sổ điều hành (Studio) và trình chiếu (Stage); hỗ trợ kích hoạt dự phòng bằng phím `Space` hoặc nút `RemoteBar` nếu màn LED không hỗ trợ cảm ứng đa điểm; `R` khôi phục tức thì về trạng thái chờ. |
| **NFR-04** | Khả năng bảo trì | Tách module rõ ràng theo 3 miền: `src/shared/` (trạng thái, media, âm thanh, mẫu), `src/studio/` (điều hành & thiết lập), `src/stage/` (trình chiếu LED & WebGL 3D). |
| **NFR-05** | Tương thích | Hoạt động ổn định trên Google Chrome và Microsoft Edge phiên bản mới nhất (hỗ trợ WebGL, Web Audio API, `BroadcastChannel` và `IndexedDB`). |

---

## 5. Ma Trận Truy Vết Yêu Cầu (RTM)

| Mã Yêu Cầu | Thành Phần Giao Diện | Xử Lý Logic & Trạng Thái | Dữ Liệu / Tài Nguyên |
| :--- | :--- | :--- | :--- |
| **FR-01** | `PatternGrid.jsx`, `ThreeStage.jsx` | `buildCenterpiece()`, `applyPatternDefaults()` | `src/shared/patterns.js` |
| **FR-02** | `App.jsx`, `RemoteBar.jsx`, `StageApp.jsx` | `createSyncChannel()`, `onStorage` | `BroadcastChannel('cham_tay_stage_sync_v2')` |
| **FR-03** | `SetupWorkspace.jsx`, `StageViewport.jsx` | 4 Tab cấu hình & Demo preview `1920×1080` | `DEFAULT_CONFIG` (`ceremonyStore.js`) |
| **FR-04** | `TouchPods.jsx`, `StageViewport.jsx` | `handleActivateHand()`, `handleDeactivateHand()`, `startCharging()` | `activeHands`, `phase`, `chargeDuration` |
| **FR-05** | `Celebration.jsx`, `StageViewport.jsx` | `completeActivation()`, `autoPhotoOpDim` | `celebrationTitle`, `celebrationPillars`, `customLogoData` |
| **FR-06** | `StageViewport.jsx`, `SetupWorkspace.jsx` | `extractYouTubeId()`, `saveMediaBlob()`, `loadAllCustomMediaUrls()` | `IndexedDB('cham_tay_media_db')`, tệp MP4 mặc định |
| **FR-07** | `StageApp.jsx`, `RemoteBar.jsx` | `StateCeremonyAudio`, `keydown` listener (`Space`, `R`, `M`, `F11`) | `src/shared/audioEngine.js` |
| **FR-08** | `App.jsx`, `StageApp.jsx` | `loadConfig()`, `saveConfig()` | `localStorage('cham_tay_studio_config_v2')` |
