/**
 * NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ & DỊCH VỤ CÔNG QUỐC GIA
 * Giao diện Sân khấu LED Lễ tân Nhà nước: Đỏ & Vàng Kim / Họa tiết Trống Đồng
 * Tích hợp Video Background: "Trống Đồng Bản Đồ Việt Nam" (sbDz4hoZWCk) hoặc Video MP4 nội bộ
 */

// ======================== STATE & CẤU HÌNH ========================
const state = {
  handCount: parseInt(localStorage.getItem('handCount') || '5', 10), // Số lượng đại biểu (1 - 12)
  chargeDuration: 5000,      // Thời gian nạp nghi thức (ms)
  isCharging: false,         // Đang trong tiến trình nạp
  isUnlocked: false,         // Đã mở khóa kích hoạt thành công
  progress: 0,               // Tiến độ 0 - 100%
  activeHands: new Set(),    // Danh sách id các bục đang được chạm
  audioEnabled: true,        // Trạng thái âm thanh
  isRecording: false,        // Đang ghi hình xuất video
  autoChargeInterval: null,

  // VIDEO BACKGROUND CONFIG (MẶC ĐỊNH TRỐNG ĐỒNG BẢN ĐỒ VIỆT NAM SẠCH SẼ, CHUẨN NHÀ NƯỚC)
  videoBgEnabled: true,     // Bật Video Background
  videoSource: 'youtube',    // 'youtube' hoặc 'local'
  youtubeVideoId: (localStorage.getItem('youtubeVideoId') === 'qyW8818wHhA' || !localStorage.getItem('youtubeVideoId')) ? 'sbDz4hoZWCk' : localStorage.getItem('youtubeVideoId'), // Mặc định Trống Đồng sbDz4hoZWCk (hoạt động ổn định 100%)
  videoOpacity: 0.65,        // Độ mờ video (0.2 -> 1.0)
  tintDarkness: 0.45,        // Độ phủ tối (0.0 -> 0.85)

  // KIỂU HOẠT ẢNH TRUNG TÂM (KEY MOMENT ĐẾM 5-4-3-2-1 vs BÌNH NƯỚC)
  animationStyle: localStorage.getItem('animationStyle') || 'keymoment',
  lastCountdownSec: 5,

  // THIẾT LẬP VỊ TRÍ & KÍCH THƯỚC TÂM NĂNG LƯỢNG / ĐẾM NGƯỢC (CORE)
  coreY: parseInt(localStorage.getItem('coreY') || '0', 10),
  coreScale: parseFloat(localStorage.getItem('coreScale') || '1.0'),

  // THIẾT LẬP VỊ TRÍ BỤC CHẠM TAY LÃNH ĐẠO (Được lưu vĩnh viễn trong localStorage)
  podY: parseInt(localStorage.getItem('podY') || '-60', 10),
  podSize: parseInt(localStorage.getItem('podSize') || '110', 10),
  podGap: parseInt(localStorage.getItem('podGap') || '38', 10),

  // THIẾT LẬP ÂM THANH & ĐỘ SÁNG MÀN LED SÂN KHẤU (KHUYẾN NGHỊ BIÊN TẬP VIÊN)
  masterVolume: parseFloat(localStorage.getItem('masterVolume') || '0.8'),
  screenBrightness: parseInt(localStorage.getItem('screenBrightness') || '72', 10), // Mức 72% chuẩn chống cháy sáng mặt
  autoPhotoOpDim: localStorage.getItem('autoPhotoOpDim') !== 'false',

  // HIỂN THỊ TIÊU ĐỀ SỰ KIỆN Ở HEADER (MẶC ĐỊNH FALSE: ẨN ĐỂ CHỈ TRÌNH CHIẾU NỀN TRỐNG ĐỒNG)
  showHeader: localStorage.getItem('showHeader') === 'true',
};

// ======================== YOUTUBE & VIDEO BACKGROUND CONTROLLER ========================
let ytPlayer = null;
let isYtApiReady = false;

window.onYouTubeIframeAPIReady = function() {
  isYtApiReady = true;
  if (state.videoBgEnabled && state.videoSource === 'youtube') {
    initYouTubePlayer();
  }
};

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return 'sbDz4hoZWCk';
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : urlOrId.trim();
}

function initYouTubePlayer() {
  if (!window.YT || !window.YT.Player) return;
  const container = document.getElementById('youtube-player');
  if (!container) return;

  const vId = state.youtubeVideoId || 'sbDz4hoZWCk';
  try {
    ytPlayer = new YT.Player('youtube-player', {
      videoId: vId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: vId,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        disablekb: 1,
        fs: 0
      },
      events: {
        onReady: (e) => {
          e.target.mute();
          if (state.videoBgEnabled && state.videoSource === 'youtube') {
            e.target.playVideo();
          }
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            e.target.playVideo();
          }
        },
        onError: (e) => {
          console.warn('YouTube Player error code:', e.data);
          // 101/150: Video owner disabled 3rd-party embedding. 2: Invalid video ID.
          // Tự động chuyển về video Trống Đồng ổn định chuẩn Lễ tân Nhà nước
          if (e.data === 101 || e.data === 150 || e.data === 2) {
            state.youtubeVideoId = 'sbDz4hoZWCk';
            localStorage.setItem('youtubeVideoId', 'sbDz4hoZWCk');
            const inputYtId = document.getElementById('input-yt-id');
            if (inputYtId) inputYtId.value = 'sbDz4hoZWCk';
            if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
              ytPlayer.loadVideoById('sbDz4hoZWCk');
            }
          }
        }
      }
    });
  } catch (err) {
    console.warn('YouTube Player init error:', err);
  }
}

function updateVideoBg() {
  const container = document.getElementById('video-bg-container');
  const ytWrap = document.getElementById('youtube-player-wrap');
  const localVideo = document.getElementById('local-video-player');
  const tintOverlay = document.getElementById('video-tint-overlay');

  if (state.videoBgEnabled) {
    container.classList.remove('hidden');
    container.style.opacity = state.videoOpacity;
    tintOverlay.style.background = `rgba(20, 2, 4, ${state.tintDarkness})`;

    if (state.videoSource === 'youtube') {
      ytWrap.classList.remove('hidden');
      localVideo.classList.add('hidden');
      localVideo.pause();

      if (ytPlayer && ytPlayer.playVideo) {
        ytPlayer.playVideo();
      } else if (!ytPlayer && (isYtApiReady || (window.YT && window.YT.Player))) {
        initYouTubePlayer();
      }
    } else {
      ytWrap.classList.add('hidden');
      localVideo.classList.remove('hidden');
      if (ytPlayer && ytPlayer.pauseVideo) {
        ytPlayer.pauseVideo();
      }
      localVideo.play().catch(() => {});
    }
  } else {
    container.classList.add('hidden');
    if (ytPlayer && ytPlayer.pauseVideo) {
      ytPlayer.pauseVideo();
    }
    localVideo.pause();
  }
}

// ======================== ÂM THANH NGHI LỄ NHÀ NƯỚC (WEB AUDIO API) ========================
class StateCeremonyAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.drumDroneOsc = null;
    this.drumDroneGain = null;
    this.chargeOsc = null;
    this.chargeGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(state.audioEnabled ? state.masterVolume : 0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(state.audioEnabled ? state.masterVolume : 0, this.ctx.currentTime);
    }
  }

  setVolume(vol) {
    state.masterVolume = Math.max(0, Math.min(1, vol));
    localStorage.setItem('masterVolume', state.masterVolume);
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(state.audioEnabled ? state.masterVolume : 0, this.ctx.currentTime);
    }
  }

  getDestination() {
    return this.masterGain || (this.ctx ? this.ctx.destination : null);
  }

  // Tiếng chuông khánh tiết thanh nhã khi chạm tay vào bục
  playTouchChime() {
    if (!state.audioEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.15); // E6

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);

      osc.connect(gain);
      gain.connect(this.getDestination());

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Tiếng đếm ngược 5 - 4 - 3 - 2 - 1 siêu uy lực chuẩn Key Moment sân khấu LED
  playCountdownBeep(num) {
    if (!state.audioEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;

      // 1. Cú đánh sub-bass đập rền vang (Kick drum tác động trực tiếp vào tim)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(125 - (5 - num) * 10, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.38);

      subGain.gain.setValueAtTime(0.75, now);
      subGain.gain.exponentialRampToValueAtTime(0.005, now + 0.38);

      subOsc.connect(subGain);
      subGain.connect(this.getDestination());
      subOsc.start(now);
      subOsc.stop(now + 0.4);

      // 2. Tiếng kèn đồng / chuông âm vang metallic hoàng gia
      const bellOsc = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      bellOsc.type = 'triangle';

      const bellFreqs = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
      const freq = bellFreqs[Math.min(bellFreqs.length - 1, 6 - num)] || 783.99;
      bellOsc.frequency.setValueAtTime(freq, now);

      bellGain.gain.setValueAtTime(0.4, now);
      bellGain.gain.exponentialRampToValueAtTime(0.005, now + 0.45);

      bellOsc.connect(bellGain);
      bellGain.connect(this.getDestination());
      bellOsc.start(now);
      bellOsc.stop(now + 0.48);

      // 3. Tiếng xé gió rít năng lượng (Whoosh) dâng trào
      const whooshOsc = this.ctx.createOscillator();
      const whooshGain = this.ctx.createGain();
      whooshOsc.type = 'sawtooth';
      whooshOsc.frequency.setValueAtTime(300 + (5 - num) * 120, now);
      whooshOsc.frequency.exponentialRampToValueAtTime(850 + (5 - num) * 150, now + 0.25);

      whooshGain.gain.setValueAtTime(0.18, now);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      whooshOsc.connect(whooshGain);
      whooshGain.connect(this.getDestination());
      whooshOsc.start(now);
      whooshOsc.stop(now + 0.3);
    } catch (e) {
      console.warn('Countdown audio error:', e);
    }
  }

  // Âm thanh tích tụ năng lượng trống hội hào hùng
  startCeremonyChargeSound() {
    if (!state.audioEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;

      this.drumDroneOsc = this.ctx.createOscillator();
      this.drumDroneGain = this.ctx.createGain();
      this.drumDroneOsc.type = 'sine';
      this.drumDroneOsc.frequency.setValueAtTime(65, now);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, now);
      filter.frequency.linearRampToValueAtTime(600, now + state.chargeDuration / 1000);

      this.drumDroneGain.gain.setValueAtTime(0.02, now);
      this.drumDroneGain.gain.linearRampToValueAtTime(0.35, now + 0.5);

      this.drumDroneOsc.connect(filter);
      filter.connect(this.drumDroneGain);
      this.drumDroneGain.connect(this.getDestination());
      this.drumDroneOsc.start(now);

      this.chargeOsc = this.ctx.createOscillator();
      this.chargeGain = this.ctx.createGain();
      this.chargeOsc.type = 'triangle';
      this.chargeOsc.frequency.setValueAtTime(220, now);
      this.chargeOsc.frequency.exponentialRampToValueAtTime(880, now + state.chargeDuration / 1000);

      this.chargeGain.gain.setValueAtTime(0.01, now);
      this.chargeGain.gain.linearRampToValueAtTime(0.25, now + state.chargeDuration / 1000);

      this.chargeOsc.connect(this.chargeGain);
      this.chargeGain.connect(this.getDestination());
      this.chargeOsc.start(now);
    } catch (e) {
      console.warn('Charge audio error:', e);
    }
  }

  stopCeremonyChargeSound() {
    try {
      const now = this.ctx ? this.ctx.currentTime : 0;
      if (this.drumDroneGain && this.drumDroneOsc) {
        this.drumDroneGain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        this.drumDroneOsc.stop(now + 0.25);
        this.drumDroneOsc = null;
      }
      if (this.chargeGain && this.chargeOsc) {
        this.chargeGain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        this.chargeOsc.stop(now + 0.25);
        this.chargeOsc = null;
      }
    } catch (e) {
      console.warn('Stop audio error:', e);
    }
  }

  // Âm thanh Đại tiệc Khởi động: Trống hội rền vang & Kèn đồng Fanfare vinh quang
  playStateCeremonyFanfare() {
    if (!state.audioEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;

      const drumOsc = this.ctx.createOscillator();
      const drumGain = this.ctx.createGain();
      drumOsc.type = 'sine';
      drumOsc.frequency.setValueAtTime(140, now);
      drumOsc.frequency.exponentialRampToValueAtTime(32, now + 1.5);

      drumGain.gain.setValueAtTime(0.85, now);
      drumGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

      drumOsc.connect(drumGain);
      drumGain.connect(this.getDestination());
      drumOsc.start(now);
      drumOsc.stop(now + 3.1);

      const bufferSize = this.ctx.sampleRate * 2.0;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1600, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(250, now + 2.0);
      noiseFilter.Q.setValueAtTime(3.0, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.35, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 2.0);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.getDestination());
      noise.start(now);
      noise.stop(now + 2.1);

      const fanfareChords = [293.66, 369.99, 440.00, 587.33, 739.99, 880.00, 1174.66];
      fanfareChords.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + 0.05);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.16, now + 0.15 + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 4.2);

        osc.connect(gain);
        gain.connect(this.getDestination());

        osc.start(now + 0.05);
        osc.stop(now + 4.3);
      });
    } catch (e) {
      console.warn('Fanfare audio error:', e);
    }
  }
}

const sfx = new StateCeremonyAudio();

// ======================== CANVAS NỀN HẠT VÀNG KIM ========================
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
let bgParticles = [];

function resizeCanvases() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  bgCanvas.width = w;
  bgCanvas.height = h;
  fxCanvas.width = w;
  fxCanvas.height = h;
  initBgParticles();
}

function initBgParticles() {
  bgParticles = [];
  const count = Math.floor((bgCanvas.width * bgCanvas.height) / 11000);
  for (let i = 0; i < count; i++) {
    bgParticles.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.1,
      size: Math.random() * 2.2 + 1,
      alpha: Math.random() * 0.6 + 0.25,
      pulse: Math.random() * Math.PI,
    });
  }
}

function renderBg() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  for (let i = 0; i < bgParticles.length; i++) {
    const p = bgParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.pulse += 0.02;

    if (p.x < 0) p.x = bgCanvas.width;
    if (p.x > bgCanvas.width) p.x = 0;
    if (p.y < 0) p.y = bgCanvas.height;
    if (p.y > bgCanvas.height) p.y = 0;

    const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.2;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(255, 215, 0, ${Math.max(0.12, currentAlpha)})`;
    bgCtx.shadowBlur = 10;
    bgCtx.shadowColor = '#ffd700';
    bgCtx.fill();
  }

  requestAnimationFrame(renderBg);
}

// ======================== FX CANVAS: DẢI LỤA VÀNG KIM & PHÁO SÁNG LỄ HỘI ========================
const fxCanvas = document.getElementById('fx-canvas');
const fxCtx = fxCanvas.getContext('2d');
let explosionParticles = [];
let shockwaves = [];

class StateShockwave {
  constructor(x, y, color = '#ffd700') {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.95;
    this.alpha = 1;
    this.color = color;
    this.lineWidth = 18;
  }
  update() {
    this.radius += 24;
    this.alpha *= 0.94;
    this.lineWidth = Math.max(1, this.lineWidth * 0.96);
  }
  draw(ctx) {
    if (this.alpha < 0.01) return;
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = 40;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.restore();
  }
}

class GoldConfettiParticle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 14 + 5;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.size = Math.random() * 3.5 + 2;
    this.alpha = 1;
    this.decay = Math.random() * 0.025 + 0.018; // Tan biến dứt khoát, không bị ì ạch
    this.color = color;
    this.gravity = 0.22;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.vx *= 0.95;
    this.vy *= 0.95;
    this.alpha -= this.decay;
  }
  draw(ctx) {
    if (this.alpha <= 0) return;
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function triggerStageFirework(targetX, targetY) {
  const colors = ['#ffd700', '#ffffff', '#fae17d', '#ffedd5'];
  const count = 28; // Tinh gọn, nổ giòn giã thanh thoát
  for (let i = 0; i < count; i++) {
    const col = colors[Math.floor(Math.random() * colors.length)];
    const p = new GoldConfettiParticle(targetX, targetY, col);
    explosionParticles.push(p);
  }
}

function triggerStateExplosion(centerX, centerY) {
  shockwaves.push(new StateShockwave(centerX, centerY, '#ffd700'));
  setTimeout(() => shockwaves.push(new StateShockwave(centerX, centerY, '#fff2a3')), 120);

  const colors = ['#ffd700', '#fff2a3', '#ffffff', '#f59e0b'];
  for (let i = 0; i < 90; i++) {
    const col = colors[Math.floor(Math.random() * colors.length)];
    explosionParticles.push(new GoldConfettiParticle(centerX, centerY, col));
  }
}

function renderFX() {
  fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
  const time = performance.now();

  // 1. TIA NĂNG LƯỢNG LASER VÀNG KIM NỐI TỪ BỤC LÊN TRUNG TÂM (CHUẨN VIDEO qyW8818wHhA)
  if (state.isCharging) {
    const coreEl = document.getElementById('core-hologram');
    const coreRect = coreEl ? coreEl.getBoundingClientRect() : { left: fxCanvas.width / 2, top: fxCanvas.height / 2, width: 0, height: 0 };
    const coreX = coreRect.left + coreRect.width / 2;
    const coreY = coreRect.top + coreRect.height / 2;

    const pedestals = document.querySelectorAll('.hand-pedestal.active');
    pedestals.forEach((pedestal, idx) => {
      const scanner = pedestal.querySelector('.hand-scanner');
      if (!scanner) return;
      const rect = scanner.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      fxCtx.save();

      // Tia hào quang vàng kim phát sáng rộng
      fxCtx.beginPath();
      fxCtx.moveTo(startX, startY);
      fxCtx.lineTo(coreX, coreY);
      fxCtx.strokeStyle = 'rgba(255, 215, 0, 0.42)';
      fxCtx.lineWidth = 14;
      fxCtx.stroke();

      // Tia trung tâm vàng óng
      fxCtx.beginPath();
      fxCtx.moveTo(startX, startY);
      fxCtx.lineTo(coreX, coreY);
      fxCtx.strokeStyle = '#ffd700';
      fxCtx.lineWidth = 5;
      fxCtx.stroke();

      // Tia lõi trắng nhiệt độ cao
      fxCtx.beginPath();
      fxCtx.moveTo(startX, startY);
      fxCtx.lineTo(coreX, coreY);
      fxCtx.strokeStyle = '#ffffff';
      fxCtx.lineWidth = 2.2;
      fxCtx.stroke();

      // Hạt plasma điện quang chạy tốc độ cao từ bục phóng lên tâm
      const pulseT = ((time * 0.0028 + idx * 0.22) % 1.0);
      const px = startX + (coreX - startX) * pulseT;
      const py = startY + (coreY - startY) * pulseT;

      fxCtx.fillStyle = '#ffffff';
      fxCtx.fillRect(px - 3, py - 3, 6, 6);
      fxCtx.fillStyle = '#ffd700';
      fxCtx.fillRect(px - 7, py - 7, 14, 14);

      fxCtx.restore();
    });

    // 1b. DẢI LỤA VÀNG KIM XOẮN VÒM CHỮ S (ĐẶC TRƯNG CHÍNH CỦA VIDEO qyW8818wHhA)
    // Xuất hiện cuồn cuộn khi đếm về 1 (tiến độ 60% -> 100%) và lao vào tâm tạo vụ nổ
    if (state.progress >= 55) {
      const pNorm = (state.progress - 55) / 45; // 0.0 -> 1.0
      const w = fxCanvas.width;
      const h = fxCanvas.height;

      fxCtx.save();

      // Ribbon 1: Lượn từ góc dưới bên trái sang tâm
      const r1StartX = -40 + pNorm * 60;
      const r1StartY = h * 0.85;
      const r1Cp1X = w * 0.22;
      const r1Cp1Y = h * 0.08 + Math.sin(time * 0.005) * 35;
      const r1Cp2X = w * 0.42;
      const r1Cp2Y = h * 0.92 - Math.cos(time * 0.005) * 35;
      const r1EndX = coreX;
      const r1EndY = coreY;

      fxCtx.beginPath();
      fxCtx.moveTo(r1StartX, r1StartY);
      fxCtx.bezierCurveTo(r1Cp1X, r1Cp1Y, r1Cp2X, r1Cp2Y, r1EndX, r1EndY);
      fxCtx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
      fxCtx.lineWidth = 24 * pNorm;
      fxCtx.stroke();

      fxCtx.beginPath();
      fxCtx.moveTo(r1StartX, r1StartY);
      fxCtx.bezierCurveTo(r1Cp1X, r1Cp1Y, r1Cp2X, r1Cp2Y, r1EndX, r1EndY);
      fxCtx.strokeStyle = '#ffd700';
      fxCtx.lineWidth = 8 * pNorm;
      fxCtx.stroke();

      fxCtx.beginPath();
      fxCtx.moveTo(r1StartX, r1StartY);
      fxCtx.bezierCurveTo(r1Cp1X, r1Cp1Y, r1Cp2X, r1Cp2Y, r1EndX, r1EndY);
      fxCtx.strokeStyle = '#ffffff';
      fxCtx.lineWidth = 3 * pNorm;
      fxCtx.stroke();

      // Ribbon 2: Lượn từ góc trên bên phải sang tâm
      const r2StartX = w + 40 - pNorm * 60;
      const r2StartY = h * 0.15;
      const r2Cp1X = w * 0.78;
      const r2Cp1Y = h * 0.92 + Math.cos(time * 0.005) * 35;
      const r2Cp2X = w * 0.58;
      const r2Cp2Y = h * 0.08 - Math.sin(time * 0.005) * 35;
      const r2EndX = coreX;
      const r2EndY = coreY;

      fxCtx.beginPath();
      fxCtx.moveTo(r2StartX, r2StartY);
      fxCtx.bezierCurveTo(r2Cp1X, r2Cp1Y, r2Cp2X, r2Cp2Y, r2EndX, r2EndY);
      fxCtx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
      fxCtx.lineWidth = 24 * pNorm;
      fxCtx.stroke();

      fxCtx.beginPath();
      fxCtx.moveTo(r2StartX, r2StartY);
      fxCtx.bezierCurveTo(r2Cp1X, r2Cp1Y, r2Cp2X, r2Cp2Y, r2EndX, r2EndY);
      fxCtx.strokeStyle = '#ffd700';
      fxCtx.lineWidth = 8 * pNorm;
      fxCtx.stroke();

      fxCtx.beginPath();
      fxCtx.moveTo(r2StartX, r2StartY);
      fxCtx.bezierCurveTo(r2Cp1X, r2Cp1Y, r2Cp2X, r2Cp2Y, r2EndX, r2EndY);
      fxCtx.strokeStyle = '#ffffff';
      fxCtx.lineWidth = 3 * pNorm;
      fxCtx.stroke();

      // Chuỗi hạt lấp lánh bay dọc theo 2 dải lụa
      const sparkCount = 16;
      for (let s = 0; s < sparkCount; s++) {
        const st = ((s / sparkCount) + (time * 0.0009)) % 1.0;
        const omt = 1 - st;
        const sx1 = Math.pow(omt, 3) * r1StartX + 3 * Math.pow(omt, 2) * st * r1Cp1X + 3 * omt * Math.pow(st, 2) * r1Cp2X + Math.pow(st, 3) * r1EndX;
        const sy1 = Math.pow(omt, 3) * r1StartY + 3 * Math.pow(omt, 2) * st * r1Cp1Y + 3 * omt * Math.pow(st, 2) * r1Cp2Y + Math.pow(st, 3) * r1EndY;
        
        fxCtx.fillStyle = s % 2 === 0 ? '#ffffff' : '#ffd700';
        fxCtx.fillRect(sx1 - 2.5, sy1 - 2.5, 5, 5);

        const sx2 = Math.pow(omt, 3) * r2StartX + 3 * Math.pow(omt, 2) * st * r2Cp1X + 3 * omt * Math.pow(st, 2) * r2Cp2X + Math.pow(st, 3) * r2EndX;
        const sy2 = Math.pow(omt, 3) * r2StartY + 3 * Math.pow(omt, 2) * st * r2Cp1Y + 3 * omt * Math.pow(st, 2) * r2Cp2Y + Math.pow(st, 3) * r2EndY;
        
        fxCtx.fillStyle = s % 2 === 0 ? '#ffffff' : '#ffd700';
        fxCtx.fillRect(sx2 - 2.5, sy2 - 2.5, 5, 5);
      }

      fxCtx.restore();
    }
  }

  // 2. PHÁO HOA VINH DANH HAI CÁNH GÀ (CHUẨN BỐ CỤC VIDEO qyW8818wHhA)
  if (state.isUnlocked) {
    // Pháo hoa bung nở ở 2 góc trên trái & phải, không che tiêu đề ở giữa
    if (Math.random() < 0.02 && explosionParticles.length < 45) {
      const isLeft = Math.random() < 0.5;
      const fwX = isLeft 
        ? Math.random() * (fxCanvas.width * 0.28) + 40
        : Math.random() * (fxCanvas.width * 0.28) + (fxCanvas.width * 0.68);
      const fwY = Math.random() * (fxCanvas.height * 0.32) + 70;
      triggerStageFirework(fwX, fwY);
    }

    // Mưa kim tuyến vàng kim bay nhẹ nhàng
    if (Math.random() < 0.12 && explosionParticles.length < 60) {
      const x = Math.random() * fxCanvas.width;
      const p = new GoldConfettiParticle(x, -10, Math.random() < 0.7 ? '#ffd700' : '#ffffff');
      p.vx = (Math.random() - 0.5) * 1.2;
      p.vy = Math.random() * 2 + 1;
      p.gravity = 0.03;
      p.decay = 0.005;
      p.size = Math.random() * 3 + 1.5;
      explosionParticles.push(p);
    }
  }

  // 3. Cập nhật & vẽ Shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.update();
    sw.draw(fxCtx);
    if (sw.alpha <= 0.01) {
      shockwaves.splice(i, 1);
    }
  }

  // Giới hạn số lượng hạt tối đa để đảm bảo 60fps mượt mà tuyệt đối không khựng lag
  if (explosionParticles.length > 70) {
    explosionParticles.splice(0, explosionParticles.length - 70);
  }

  // 4. Cập nhật & vẽ hạt pháo sáng (vẽ nhanh GPU, không bị khựng)
  for (let i = explosionParticles.length - 1; i >= 0; i--) {
    const p = explosionParticles[i];
    p.update();
    p.draw(fxCtx);
    if (p.alpha <= 0) {
      explosionParticles.splice(i, 1);
    }
  }
  fxCtx.globalAlpha = 1;

  requestAnimationFrame(renderFX);
}

// ==========================================================================
// THIẾT KẾ BỤC CHẠM MẶT TRỐNG ĐỒNG ĐÔNG SƠN MẠ VÀNG (GOLDEN BRONZE DRUM PODS)
// ==========================================================================
const touchZonesContainer = document.getElementById('touch-zones');

const DONGSON_POD_SVG = `
<svg class="dongson-pod-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="75" class="drum-outer-ring" />
  <circle cx="80" cy="80" r="66" class="drum-middle-ring" />
  <circle cx="80" cy="80" r="54" stroke="rgba(255,215,0,0.6)" stroke-width="1.2" fill="none" />
  
  <g class="drum-sun-rays">
    <polygon points="80,26 84,48 80,44 76,48" />
    <polygon points="104,32 96,51 94,47 90,52" />
    <polygon points="122,48 106,60 106,56 101,63" />
    <polygon points="132,71 112,74 112,70 108,77" />
    <polygon points="132,89 112,86 112,90 108,83" />
    <polygon points="122,112 106,100 106,104 101,97" />
    <polygon points="104,128 96,109 94,113 90,108" />
    <polygon points="80,134 84,112 80,116 76,112" />
    <polygon points="56,128 64,109 66,113 70,108" />
    <polygon points="38,112 54,100 54,104 59,97" />
    <polygon points="28,89 48,86 48,90 52,83" />
    <polygon points="28,71 48,74 48,70 52,77" />
    <polygon points="38,48 54,60 54,56 59,63" />
    <polygon points="56,32 64,51 66,47 70,52" />
  </g>

  <circle cx="80" cy="80" r="26" fill="rgba(220, 38, 38, 0.45)" stroke="#ffd700" stroke-width="2" />
  <polygon points="80,60 86,74 100,74 89,83 93,97 80,88 67,97 71,83 60,74 74,74" class="drum-center-star" />
</svg>
`;

function renderTouchPedestals() {
  touchZonesContainer.innerHTML = '';
  state.activeHands.clear();

  for (let i = 1; i <= state.handCount; i++) {
    const pedestal = document.createElement('div');
    pedestal.className = 'hand-pedestal';
    pedestal.id = `pedestal-${i}`;
    pedestal.dataset.id = i;

    pedestal.innerHTML = `
      <div class="hand-scanner" title="Đại biểu chạm tay">
        <div class="radar-sweep"></div>
        ${DONGSON_POD_SVG}
      </div>
    `;

    const scanner = pedestal.querySelector('.hand-scanner');
    scanner.style.width = `${state.podSize}px`;
    scanner.style.height = `${state.podSize}px`;
    const svgPod = pedestal.querySelector('.dongson-pod-svg');
    if (svgPod) {
      const svgDim = Math.round(state.podSize * 0.76);
      svgPod.style.width = `${svgDim}px`;
      svgPod.style.height = `${svgDim}px`;
    }

    const handleTouchStart = (e) => {
      e.preventDefault();
      if (state.isUnlocked) return;
      sfx.playTouchChime();
      activateHand(i);
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      if (!state.autoChargeInterval && !state.isUnlocked) {
        deactivateHand(i);
      }
    };

    scanner.addEventListener('pointerdown', handleTouchStart);
    scanner.addEventListener('pointerup', handleTouchEnd);
    scanner.addEventListener('pointercancel', handleTouchEnd);

    touchZonesContainer.appendChild(pedestal);
  }
}

function activateHand(id) {
  const pedestal = document.getElementById(`pedestal-${id}`);
  if (pedestal && !pedestal.classList.contains('active')) {
    pedestal.classList.add('active');
    state.activeHands.add(id);
    checkActivationState();
  }
}

function deactivateHand(id) {
  const pedestal = document.getElementById(`pedestal-${id}`);
  if (pedestal) {
    pedestal.classList.remove('active');
    state.activeHands.delete(id);
    checkActivationState();
  }
}

function checkActivationState() {
  if (state.isUnlocked) return;

  if (state.activeHands.size === state.handCount) {
    if (!state.isCharging) {
      startChargingProcess();
    }
  } else {
    if (state.isCharging && !state.autoChargeInterval) {
      cancelChargingProcess();
    }
  }
}

// ======================== TIẾN TRÌNH NẠP NĂNG LƯỢNG NƯỚC & MỞ KHÓA ========================
const coreHologram = document.getElementById('core-hologram');
const liquidLevelEl = document.getElementById('liquid-level');
const liquidWaveBackEl = document.getElementById('liquid-wave-back');
const liquidWaveFrontEl = document.getElementById('liquid-wave-front');
const starOnWaterEl = document.querySelector('.star-on-water');
const climaxFlashEl = document.getElementById('climax-flash');

let chargeStartTime = null;
let chargeRafId = null;

function updateLiquidWave(time, progress) {
  // Nước dâng từ Y=160 (đáy bình) đến Y=0 (đỉnh bình)
  const currentY = 160 - (progress / 100) * 160;
  if (liquidLevelEl) liquidLevelEl.setAttribute('y', currentY);

  const phase = time * 0.007;
  const amp = state.isCharging ? 5 : 2;
  const yFront = currentY + Math.sin(phase) * amp;
  const yBack = currentY + Math.cos(phase) * amp;

  if (liquidWaveFrontEl) {
    liquidWaveFrontEl.setAttribute('d', `M 0 ${yFront} Q 40 ${currentY - amp} 80 ${yFront} T 160 ${yFront} L 160 160 L 0 160 Z`);
  }
  if (liquidWaveBackEl) {
    liquidWaveBackEl.setAttribute('d', `M 0 ${yBack} Q 40 ${currentY + amp} 80 ${yBack} T 160 ${yBack} L 160 160 L 0 160 Z`);
  }

  if (starOnWaterEl) {
    if (progress >= 95) {
      starOnWaterEl.classList.add('full');
    } else {
      starOnWaterEl.classList.remove('full');
    }
  }
}

function resetLiquidLevel() {
  if (liquidLevelEl) liquidLevelEl.setAttribute('y', 160);
  if (liquidWaveFrontEl) liquidWaveFrontEl.setAttribute('d', 'M 0 160 L 160 160 Z');
  if (liquidWaveBackEl) liquidWaveBackEl.setAttribute('d', 'M 0 160 L 160 160 Z');
  if (starOnWaterEl) starOnWaterEl.classList.remove('full');
}

function startChargingProcess() {
  state.isCharging = true;
  document.body.classList.add('charging');
  chargeStartTime = performance.now();
  
  const totalSec = Math.max(1, Math.round(state.chargeDuration / 1000));
  state.lastCountdownSec = totalSec;

  const countNumEl = document.getElementById('countdown-big-number');
  if (countNumEl) {
    countNumEl.textContent = totalSec;
    countNumEl.classList.remove('pop');
    void countNumEl.offsetWidth;
    countNumEl.classList.add('pop');
  }

  sfx.playCountdownBeep(totalSec);
  sfx.startCeremonyChargeSound();

  const coreEl = document.getElementById('core-hologram');
  if (coreEl) {
    const rect = coreEl.getBoundingClientRect();
    shockwaves.push(new StateShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, '#ffd700'));
  }

  function updateCharge(time) {
    const elapsed = time - chargeStartTime;
    state.progress = Math.min(100, (elapsed / state.chargeDuration) * 100);

    // Xử lý bước nhảy đếm ngược 5 - 4 - 3 - 2 - 1 chuẩn Key Moment
    const remainingSec = Math.max(1, Math.ceil((state.chargeDuration - elapsed) / 1000));
    if (remainingSec !== state.lastCountdownSec) {
      state.lastCountdownSec = remainingSec;
      if (countNumEl) {
        countNumEl.textContent = remainingSec;
        countNumEl.classList.remove('pop');
        void countNumEl.offsetWidth;
        countNumEl.classList.add('pop');
      }
      sfx.playCountdownBeep(remainingSec);

      if (coreEl) {
        const rect = coreEl.getBoundingClientRect();
        shockwaves.push(new StateShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, '#ffd700'));
      }
    }

    // Cập nhật mức nước nếu dùng style bình nước
    if (state.animationStyle === 'liquid') {
      updateLiquidWave(time, state.progress);
    }

    if (state.progress >= 100) {
      completeActivation();
    } else {
      chargeRafId = requestAnimationFrame(updateCharge);
    }
  }

  chargeRafId = requestAnimationFrame(updateCharge);
}

function cancelChargingProcess() {
  state.isCharging = false;
  state.progress = 0;
  document.body.classList.remove('charging');
  if (chargeRafId) cancelAnimationFrame(chargeRafId);
  sfx.stopCeremonyChargeSound();
  resetLiquidLevel();

  const countNumEl = document.getElementById('countdown-big-number');
  if (countNumEl) {
    countNumEl.textContent = Math.max(1, Math.round(state.chargeDuration / 1000));
    countNumEl.classList.remove('pop');
  }
}

function completeActivation() {
  state.isCharging = false;
  state.isUnlocked = true;
  document.body.classList.remove('charging');
  if (chargeRafId) cancelAnimationFrame(chargeRafId);
  sfx.stopCeremonyChargeSound();

  const countNumEl = document.getElementById('countdown-big-number');
  if (countNumEl) {
    countNumEl.textContent = Math.max(1, Math.round(state.chargeDuration / 1000));
    countNumEl.classList.remove('pop');
  }

  // 1. UI CHUYỂN TIẾP CAO TRÀO: Chớp sáng vàng kim (Golden Flash)
  if (climaxFlashEl) {
    climaxFlashEl.classList.add('active');
    setTimeout(() => {
      climaxFlashEl.classList.remove('active');
    }, 600);
  }

  // 2. Âm vang Trống hội & Fanfare khánh tiết
  sfx.playStateCeremonyFanfare();

  // 3. Bùng nổ hào quang từ trung tâm Trống Đồng
  const coreRect = coreHologram.getBoundingClientRect();
  const centerX = coreRect.left + coreRect.width / 2;
  const centerY = coreRect.top + coreRect.height / 2;
  triggerStateExplosion(centerX, centerY);

  coreHologram.classList.add('unlocked');

  // 4. Chuyển sang màn hình vinh danh sau chớp sáng (Ẩn sạch UI cũ, chỉ để lại nền Trống Đồng)
  setTimeout(() => {
    document.body.classList.add('in-celebration');
    if (state.autoPhotoOpDim && state.screenBrightness > 72) {
      state.screenBrightness = 70;
      applyBrightnessSettings();
    }
    const celebScreen = document.getElementById('celebration-screen');
    celebScreen.classList.remove('hidden');
  }, 1000);
}

// ======================== QUẢN LÝ VỊ TRÍ, KÍCH THƯỚC & SỐ LƯỢNG BỤC CHẠM ========================
function applyPodSettings() {
  const tz = document.getElementById('touch-zones');
  if (tz) {
    tz.style.setProperty('--pod-y', `${state.podY}px`);
    tz.style.setProperty('--pod-size', `${state.podSize}px`);
    tz.style.setProperty('--pod-gap', `${state.podGap}px`);
  }
  document.documentElement.style.setProperty('--pod-y', `${state.podY}px`);
  document.documentElement.style.setProperty('--pod-size', `${state.podSize}px`);
  document.documentElement.style.setProperty('--pod-gap', `${state.podGap}px`);

  // Trực tiếp áp dụng kích thước inline cho toàn bộ bục quét và hoa văn Trống đồng tức thì
  const scanners = document.querySelectorAll('.hand-scanner');
  const svgPods = document.querySelectorAll('.dongson-pod-svg');
  scanners.forEach((scanner) => {
    scanner.style.width = `${state.podSize}px`;
    scanner.style.height = `${state.podSize}px`;
  });
  const svgDim = Math.round(state.podSize * 0.76);
  svgPods.forEach((svg) => {
    svg.style.width = `${svgDim}px`;
    svg.style.height = `${svgDim}px`;
  });

  const valY = document.getElementById('val-pod-y');
  const valSize = document.getElementById('val-pod-size');
  const valGap = document.getElementById('val-pod-gap');
  if (valY) valY.textContent = `${state.podY}px`;
  if (valSize) valSize.textContent = `${state.podSize}px`;
  if (valGap) valGap.textContent = `${state.podGap}px`;

  const rY = document.getElementById('range-pod-y');
  const rSize = document.getElementById('range-pod-size');
  const rGap = document.getElementById('range-pod-gap');
  if (rY) rY.value = state.podY;
  if (rSize) rSize.value = state.podSize;
  if (rGap) rGap.value = state.podGap;

  localStorage.setItem('podY', state.podY);
  localStorage.setItem('podSize', state.podSize);
  localStorage.setItem('podGap', state.podGap);
}

function resetPodSettings() {
  state.podY = -60;
  state.podSize = 110;
  state.podGap = 38;
  applyPodSettings();
}

function applyCoreSettings() {
  const core = document.getElementById('core-hologram');
  if (core) {
    core.style.transform = `translateY(${state.coreY}px) scale(${state.coreScale})`;
    core.style.setProperty('--core-y', `${state.coreY}px`);
    core.style.setProperty('--core-scale', state.coreScale);
  }
  document.documentElement.style.setProperty('--core-y', `${state.coreY}px`);
  document.documentElement.style.setProperty('--core-scale', state.coreScale);

  const valCoreY = document.getElementById('val-core-y');
  const valCoreScale = document.getElementById('val-core-scale');
  if (valCoreY) valCoreY.textContent = `${state.coreY > 0 ? '+' : ''}${state.coreY}px`;
  if (valCoreScale) valCoreScale.textContent = `${Math.round(state.coreScale * 100)}%`;

  localStorage.setItem('coreY', state.coreY);
  localStorage.setItem('coreScale', state.coreScale);
}

function resetCoreSettings() {
  state.coreY = 0;
  state.coreScale = 1.0;
  const rCoreY = document.getElementById('range-core-y');
  const rCoreScale = document.getElementById('range-core-scale');
  if (rCoreY) rCoreY.value = 0;
  if (rCoreScale) rCoreScale.value = 100;
  applyCoreSettings();
}

// ======================== QUẢN LÝ ĐỘ SÁNG MÀN LED & ÂM LƯỢNG SÂN KHẤU ========================
function applyBrightnessSettings() {
  document.documentElement.style.setProperty('--screen-brightness', state.screenBrightness / 100);

  const valB = document.getElementById('val-brightness');
  if (valB) valB.textContent = `${state.screenBrightness}%`;

  const rangeB = document.getElementById('range-brightness');
  if (rangeB) rangeB.value = state.screenBrightness;

  const presetBtns = document.querySelectorAll('#group-brightness-preset button');
  presetBtns.forEach((btn) => {
    if (parseInt(btn.dataset.brightness, 10) === state.screenBrightness) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  localStorage.setItem('screenBrightness', state.screenBrightness);
}

function updateVolumeSettings(val) {
  const vol = Math.max(0, Math.min(100, parseInt(val, 10)));
  state.masterVolume = vol / 100;
  sfx.setVolume(state.masterVolume);

  const valVol = document.getElementById('val-volume');
  if (valVol) valVol.textContent = `${vol}%`;

  const rangeVol = document.getElementById('range-volume');
  if (rangeVol) rangeVol.value = vol;
}

function setParticipantCount(n) {
  const count = Math.max(1, Math.min(12, parseInt(n, 10)));
  state.handCount = count;
  localStorage.setItem('handCount', count);

  // Đồng bộ tất cả ô hiển thị số lượng ở Tab 2 và Tab 4
  const displays = document.querySelectorAll('.stepper-display-count');
  displays.forEach((d) => {
    d.textContent = `${count} Lãnh đạo`;
  });

  // Đồng bộ trạng thái active trên các nút 1..10
  const gridBtns = document.querySelectorAll('.participant-grid button');
  gridBtns.forEach((btn) => {
    const val = parseInt(btn.dataset.count, 10);
    if (val === count) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Tự động tinh chỉnh kích thước & khoảng cách để vừa màn hình LED nếu đông đại biểu
  if (count >= 10) {
    if (state.podSize > 85) state.podSize = 85;
    if (state.podGap > 18) state.podGap = 16;
  } else if (count >= 8) {
    if (state.podSize > 95) state.podSize = 95;
    if (state.podGap > 26) state.podGap = 22;
  }

  applyPodSettings();
  resetActivation();
}

// ======================== THAO TÁC KỸ THUẬT (TRIGGER ALL / RESET) ========================
function triggerAllHands() {
  if (state.isUnlocked) return;
  sfx.init();

  for (let i = 1; i <= state.handCount; i++) {
    activateHand(i);
  }

  state.autoChargeInterval = true;
  if (!state.isCharging) {
    startChargingProcess();
  }
}

function resetActivation() {
  if (chargeRafId) cancelAnimationFrame(chargeRafId);
  sfx.stopCeremonyChargeSound();
  state.isCharging = false;
  state.isUnlocked = false;
  state.progress = 0;
  state.autoChargeInterval = null;
  state.activeHands.clear();
  resetLiquidLevel();

  document.body.classList.remove('charging');
  document.body.classList.remove('in-celebration');

  const countNumEl = document.getElementById('countdown-big-number');
  if (countNumEl) {
    countNumEl.textContent = Math.max(1, Math.round(state.chargeDuration / 1000));
    countNumEl.classList.remove('pop');
  }

  document.getElementById('celebration-screen').classList.add('hidden');
  coreHologram.classList.remove('unlocked');
  if (climaxFlashEl) climaxFlashEl.classList.remove('active');

  const btnPrev = document.getElementById('btn-preview-finale');
  if (btnPrev) btnPrev.innerHTML = '<span class="icon">&#127942;</span> XEM MÀN VINH DANH';

  renderTouchPedestals();
}

// ======================== XUẤT VIDEO CHO VMIX / RESOLUME ========================
async function exportVideo() {
  const exportBtn = document.getElementById('btn-export-video');
  const exportStatus = document.getElementById('export-status');

  if (state.isRecording) return;
  state.isRecording = true;
  exportBtn.disabled = true;
  exportStatus.classList.remove('hidden');
  exportStatus.textContent = 'Đang khởi tạo trình ghi video...';

  resetActivation();

  const streamCanvas = document.createElement('canvas');
  streamCanvas.width = 1920;
  streamCanvas.height = 1080;
  const sCtx = streamCanvas.getContext('2d');

  const stream = streamCanvas.captureStream(60);

  let options = { mimeType: 'video/webm;codecs=vp9' };
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    options = { mimeType: 'video/webm' };
  }

  let recorder;
  try {
    recorder = new MediaRecorder(stream, options);
  } catch (err) {
    exportStatus.textContent = 'Trình duyệt không hỗ trợ MediaRecorder trực tiếp.';
    state.isRecording = false;
    exportBtn.disabled = false;
    return;
  }

  const chunks = [];
  recorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) chunks.push(e.data);
  };

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video_nghi_thuc_kich_hoat_${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    exportStatus.textContent = 'Đã tải video thành công!';
    state.isRecording = false;
    exportBtn.disabled = false;
    setTimeout(() => exportStatus.classList.add('hidden'), 4000);
  };

  recorder.start();
  exportStatus.textContent = 'Đang ghi hình nghi thức... Vui lòng chờ 8 giây';

  let isCapturing = true;
  function captureLoop() {
    if (!isCapturing) return;
    sCtx.drawImage(bgCanvas, 0, 0, 1920, 1080);
    sCtx.drawImage(fxCanvas, 0, 0, 1920, 1080);
    requestAnimationFrame(captureLoop);
  }
  captureLoop();

  setTimeout(() => {
    triggerAllHands();
  }, 1000);

  const totalRecordTime = state.chargeDuration + 4000;
  setTimeout(() => {
    isCapturing = false;
    recorder.stop();
  }, totalRecordTime);
}

// ======================== TƯƠNG TÁC GIAO DIỆN & TABS ========================
function setupEventListeners() {
  // 1. Phím tắt
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.code === 'Space') {
      e.preventDefault();
      triggerAllHands();
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      resetActivation();
    } else if (e.key === 'h' || e.key === 'H') {
      e.preventDefault();
      toggleControlPanel();
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleAudio();
    }
  });

  // 2. Chuyển đổi giữa 3 Tab trong Bàn Điều Hành
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 3. Tab Video Background Handlers
  const toggleVideoBg = document.getElementById('toggle-video-bg');
  toggleVideoBg.checked = state.videoBgEnabled;
  toggleVideoBg.addEventListener('change', (e) => {
    state.videoBgEnabled = e.target.checked;
    updateVideoBg();
  });

  const radioYt = document.getElementById('src-youtube');
  const radioLocal = document.getElementById('src-local');

  radioYt.addEventListener('change', () => {
    if (radioYt.checked) {
      state.videoSource = 'youtube';
      updateVideoBg();
    }
  });

  radioLocal.addEventListener('change', () => {
    if (radioLocal.checked) {
      state.videoSource = 'local';
      updateVideoBg();
    }
  });

  // Tải ID / URL YouTube mới
  const inputYtId = document.getElementById('input-yt-id');
  const btnLoadYt = document.getElementById('btn-load-yt');

  btnLoadYt.addEventListener('click', () => {
    const val = inputYtId.value.trim();
    const cleanId = extractYouTubeId(val);
    state.youtubeVideoId = cleanId;
    localStorage.setItem('youtubeVideoId', cleanId);
    if (ytPlayer && ytPlayer.loadVideoById) {
      ytPlayer.loadVideoById(cleanId);
    } else {
      initYouTubePlayer();
    }
    state.videoSource = 'youtube';
    radioYt.checked = true;
    updateVideoBg();
  });

  // Nút Preset 1: Visual Key Moment Khai Trương (qyW8818wHhA)
  const btnPresetKeyMoment = document.getElementById('btn-preset-keymoment');
  if (btnPresetKeyMoment) {
    btnPresetKeyMoment.addEventListener('click', () => {
      const vidId = 'qyW8818wHhA';
      inputYtId.value = vidId;
      state.youtubeVideoId = vidId;
      localStorage.setItem('youtubeVideoId', vidId);
      state.videoSource = 'youtube';
      radioYt.checked = true;
      if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById(vidId);
      } else {
        initYouTubePlayer();
      }
      updateVideoBg();
      applyAnimationStyle('keymoment');
    });
  }

  // Nút Preset 2: Trống Đồng Bản Đồ Việt Nam (sbDz4hoZWCk)
  const btnPresetDongSon = document.getElementById('btn-preset-dongson');
  if (btnPresetDongSon) {
    btnPresetDongSon.addEventListener('click', () => {
      const vidId = 'sbDz4hoZWCk';
      inputYtId.value = vidId;
      state.youtubeVideoId = vidId;
      localStorage.setItem('youtubeVideoId', vidId);
      state.videoSource = 'youtube';
      radioYt.checked = true;
      if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById(vidId);
      } else {
        initYouTubePlayer();
      }
      updateVideoBg();
    });
  }

  // Nút chuyển đổi Kiểu Hoạt Ảnh Trung Tâm (Đếm ngược 5-4-3-2-1 vs Bình nước)
  const animBtns = document.querySelectorAll('#group-animation-style button');
  animBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyAnimationStyle(btn.dataset.style);
    });
  });

  // Tải file video MP4 local
  const inputLocalVideo = document.getElementById('input-local-video');
  const localVideoPlayer = document.getElementById('local-video-player');

  inputLocalVideo.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      localVideoPlayer.src = url;
      localVideoPlayer.play().catch(() => {});
      state.videoSource = 'local';
      radioLocal.checked = true;
      updateVideoBg();
    }
  });

  // Thanh trượt Opacity & Tint
  const rangeOpacity = document.getElementById('range-opacity');
  const valOpacity = document.getElementById('val-opacity');
  const rangeTint = document.getElementById('range-tint');
  const valTint = document.getElementById('val-tint');

  rangeOpacity.addEventListener('input', (e) => {
    const val = e.target.value;
    state.videoOpacity = val / 100;
    valOpacity.textContent = `${val}%`;
    updateVideoBg();
  });

  rangeTint.addEventListener('input', (e) => {
    const val = e.target.value;
    state.tintDarkness = val / 100;
    valTint.textContent = `${val}%`;
    updateVideoBg();
  });

  // 4. Lắng nghe 3 thanh trượt điều chỉnh vị trí & kích thước bục chạm tay
  const rangePodY = document.getElementById('range-pod-y');
  const rangePodSize = document.getElementById('range-pod-size');
  const rangePodGap = document.getElementById('range-pod-gap');
  const btnResetPos = document.getElementById('btn-reset-position');

  if (rangePodY) {
    rangePodY.addEventListener('input', (e) => {
      state.podY = parseInt(e.target.value, 10);
      applyPodSettings();
    });
  }

  if (rangePodSize) {
    rangePodSize.addEventListener('input', (e) => {
      state.podSize = parseInt(e.target.value, 10);
      applyPodSettings();
    });
  }

  if (rangePodGap) {
    rangePodGap.addEventListener('input', (e) => {
      state.podGap = parseInt(e.target.value, 10);
      applyPodSettings();
    });
  }

  if (btnResetPos) {
    btnResetPos.addEventListener('click', resetPodSettings);
  }

  // Căn chỉnh vị trí & kích thước Tâm Năng Lượng / Đếm Ngược (Core)
  const rangeCoreY = document.getElementById('range-core-y');
  const rangeCoreScale = document.getElementById('range-core-scale');
  const btnResetCorePos = document.getElementById('btn-reset-core-position');

  if (rangeCoreY) {
    rangeCoreY.value = state.coreY;
    rangeCoreY.addEventListener('input', (e) => {
      state.coreY = parseInt(e.target.value, 10);
      applyCoreSettings();
    });
  }

  if (rangeCoreScale) {
    rangeCoreScale.value = Math.round(state.coreScale * 100);
    rangeCoreScale.addEventListener('input', (e) => {
      state.coreScale = parseInt(e.target.value, 10) / 100;
      applyCoreSettings();
    });
  }

  if (btnResetCorePos) {
    btnResetCorePos.addEventListener('click', resetCoreSettings);
  }

  // 5. Các nút điều hành chính
  document.getElementById('btn-trigger-all').addEventListener('click', triggerAllHands);
  document.getElementById('btn-reset').addEventListener('click', resetActivation);
  document.getElementById('btn-close-panel').addEventListener('click', toggleControlPanel);
  document.getElementById('btn-floating-settings').addEventListener('click', toggleControlPanel);
  document.getElementById('btn-export-video').addEventListener('click', exportVideo);

  const btnPreviewFinale = document.getElementById('btn-preview-finale');
  if (btnPreviewFinale) {
    btnPreviewFinale.addEventListener('click', () => {
      const celebScreen = document.getElementById('celebration-screen');
      if (celebScreen.classList.contains('hidden')) {
        state.isUnlocked = true;
        document.body.classList.add('in-celebration');
        celebScreen.classList.remove('hidden');
        coreHologram.classList.add('unlocked');
        btnPreviewFinale.innerHTML = '<span class="icon">&#10006;</span> ĐÓNG VINH DANH';
        sfx.init();
        sfx.playStateCeremonyFanfare();
      } else {
        document.body.classList.remove('in-celebration');
        celebScreen.classList.add('hidden');
        state.isUnlocked = false;
        coreHologram.classList.remove('unlocked');
        btnPreviewFinale.innerHTML = '<span class="icon">&#127942;</span> XEM MÀN VINH DANH';
      }
    });
  }

  document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  const audioBtn = document.getElementById('btn-audio-toggle');
  audioBtn.addEventListener('click', toggleAudio);

  function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;
    if (state.audioEnabled) {
      audioBtn.innerHTML = `<span class="icon" id="audio-icon">&#128266;</span> ÂM THANH: BẬT`;
      sfx.init();
    } else {
      audioBtn.innerHTML = `<span class="icon" id="audio-icon">&#128263;</span> ÂM THANH: TẮT`;
      sfx.stopCeremonyChargeSound();
    }
  }

  // 7. Lắng nghe Âm lượng tổng & Nút thử âm thanh Fanfare (Mixer Out)
  const rangeVol = document.getElementById('range-volume');
  if (rangeVol) {
    rangeVol.value = Math.round(state.masterVolume * 100);
    const valVol = document.getElementById('val-volume');
    if (valVol) valVol.textContent = `${rangeVol.value}%`;

    rangeVol.addEventListener('input', (e) => {
      updateVolumeSettings(e.target.value);
    });
  }

  const btnTestAudio = document.getElementById('btn-test-audio');
  if (btnTestAudio) {
    btnTestAudio.addEventListener('click', () => {
      sfx.init();
      sfx.playStateCeremonyFanfare();
    });
  }

  // 8. Lắng nghe Độ sáng màn LED & Chế độ Chụp ảnh (Photo-Op)
  const rangeB = document.getElementById('range-brightness');
  if (rangeB) {
    rangeB.addEventListener('input', (e) => {
      state.screenBrightness = parseInt(e.target.value, 10);
      applyBrightnessSettings();
    });
  }

  const presetBtns = document.querySelectorAll('#group-brightness-preset button');
  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.screenBrightness = parseInt(btn.dataset.brightness, 10);
      applyBrightnessSettings();
    });
  });

  const togglePhotoDim = document.getElementById('toggle-photo-dim');
  if (togglePhotoDim) {
    togglePhotoDim.checked = state.autoPhotoOpDim;
    togglePhotoDim.addEventListener('change', (e) => {
      state.autoPhotoOpDim = e.target.checked;
      localStorage.setItem('autoPhotoOpDim', state.autoPhotoOpDim);
    });
  }

  // 6. Lắng nghe các nút chọn số lượng đại biểu (Stepper +/- & Lưới 1..10)
  document.querySelectorAll('.btn-count-minus').forEach((btn) => {
    btn.addEventListener('click', () => {
      setParticipantCount(state.handCount - 1);
    });
  });

  document.querySelectorAll('.btn-count-plus').forEach((btn) => {
    btn.addEventListener('click', () => {
      setParticipantCount(state.handCount + 1);
    });
  });

  document.querySelectorAll('.participant-grid button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const c = parseInt(btn.dataset.count, 10);
      setParticipantCount(c);
    });
  });

  const selectDuration = document.getElementById('select-duration');
  selectDuration.addEventListener('change', (e) => {
    state.chargeDuration = parseInt(e.target.value, 10);
  });

  const themeButtons = document.querySelectorAll('#group-theme-color button');
  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      themeButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = btn.dataset.theme;
    });
  });

  const inputTitle = document.getElementById('input-title');
  const inputSubtitle = document.getElementById('input-subtitle');
  const inputBadge = document.getElementById('input-badge');
  const displayTitle = document.getElementById('display-title');
  const displaySubtitle = document.getElementById('display-subtitle');
  const eventBadge = document.getElementById('event-badge');
  const celebTitle = document.getElementById('celeb-title');

  inputTitle.addEventListener('input', (e) => {
    const val = e.target.value.trim() || 'NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ';
    displayTitle.textContent = val;
    celebTitle.textContent = `${val} THÀNH CÔNG`;
  });

  inputSubtitle.addEventListener('input', (e) => {
    displaySubtitle.textContent = e.target.value.trim();
  });

  inputBadge.addEventListener('input', (e) => {
    eventBadge.textContent = e.target.value.trim();
  });

  // TÙY CHỌN BẬT / ẨN TIÊU ĐỀ SỰ KIỆN Ở TRÊN CÙNG
  const toggleShowHeader = document.getElementById('toggle-show-header');
  if (toggleShowHeader) {
    toggleShowHeader.checked = state.showHeader;
    toggleShowHeader.addEventListener('change', (e) => {
      state.showHeader = e.target.checked;
      localStorage.setItem('showHeader', state.showHeader);
      document.body.classList.toggle('show-header', state.showHeader);
    });
  }

  // TẢI LOGO ĐƠN VỊ TÙY BIẾN (TỰ ĐỘNG ĐỒNG BỘ CẢ 2 NƠI & LƯU LOCALSTORAGE)
  const inputLogo = document.getElementById('input-logo');
  const customLogoImg = document.getElementById('custom-logo-display');
  const celebCustomLogo = document.getElementById('celeb-custom-logo');
  const defaultLogoIcon = document.getElementById('default-logo-icon');
  const celebDefaultLogo = document.getElementById('celeb-default-logo');

  if (inputLogo) {
    inputLogo.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const logoData = event.target.result;
          if (customLogoImg) {
            customLogoImg.src = logoData;
            customLogoImg.classList.remove('hidden');
          }
          if (celebCustomLogo) {
            celebCustomLogo.src = logoData;
            celebCustomLogo.classList.remove('hidden');
          }
          if (defaultLogoIcon) defaultLogoIcon.classList.add('hidden');
          if (celebDefaultLogo) celebDefaultLogo.classList.add('hidden');
          try {
            localStorage.setItem('customLogoData', logoData);
          } catch (err) {
            console.warn('Logo quá lớn không thể lưu vào localStorage:', err);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  window.addEventListener('resize', resizeCanvases);
}

function applyAnimationStyle(style) {
  state.animationStyle = style;
  localStorage.setItem('animationStyle', style);
  const countdownEl = document.getElementById('core-countdown-state');
  const liquidEl = document.getElementById('core-lock-state');
  const animBtns = document.querySelectorAll('#group-animation-style button');

  animBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.style === style);
  });

  if (countdownEl && liquidEl) {
    if (style === 'liquid') {
      countdownEl.classList.add('hidden');
      liquidEl.classList.remove('hidden');
    } else {
      countdownEl.classList.remove('hidden');
      liquidEl.classList.add('hidden');
    }
  }
}

function toggleControlPanel() {
  const panel = document.getElementById('control-panel');
  panel.classList.toggle('hidden');
}

// ======================== KHỞI TẠO HỆ THỐNG ========================
window.addEventListener('DOMContentLoaded', () => {
  // Đảm bảo trạng thái khởi đầu sạch sẽ: Chưa nạp năng lượng, chưa vinh danh
  document.body.classList.remove('charging');
  document.body.classList.remove('in-celebration');
  const countNumEl = document.getElementById('countdown-big-number');
  if (countNumEl) {
    countNumEl.textContent = Math.max(1, Math.round(state.chargeDuration / 1000));
    countNumEl.classList.remove('pop');
  }
  if (localStorage.getItem('youtubeVideoId') === 'qyW8818wHhA') {
    localStorage.setItem('youtubeVideoId', 'sbDz4hoZWCk');
    state.youtubeVideoId = 'sbDz4hoZWCk';
  }

  resizeCanvases();
  applyPodSettings();
  applyCoreSettings();
  applyBrightnessSettings();
  setParticipantCount(state.handCount);
  renderBg();
  renderFX();
  setupEventListeners();
  applyAnimationStyle(state.animationStyle);
  updateVideoBg();
  if (!ytPlayer && (isYtApiReady || (window.YT && window.YT.Player))) {
    initYouTubePlayer();
  }

  // Áp dụng trạng thái ẩn/hiện header sự kiện
  if (state.showHeader) {
    document.body.classList.add('show-header');
  } else {
    document.body.classList.remove('show-header');
  }

  // Tải logo tùy biến đã lưu từ trước nếu có
  const savedLogo = localStorage.getItem('customLogoData');
  if (savedLogo) {
    const customLogoImg = document.getElementById('custom-logo-display');
    const celebCustomLogo = document.getElementById('celeb-custom-logo');
    const defaultLogoIcon = document.getElementById('default-logo-icon');
    const celebDefaultLogo = document.getElementById('celeb-default-logo');

    if (customLogoImg) {
      customLogoImg.src = savedLogo;
      customLogoImg.classList.remove('hidden');
    }
    if (celebCustomLogo) {
      celebCustomLogo.src = savedLogo;
      celebCustomLogo.classList.remove('hidden');
    }
    if (defaultLogoIcon) defaultLogoIcon.classList.add('hidden');
    if (celebDefaultLogo) celebDefaultLogo.classList.add('hidden');
  }

  console.log('🏛️ Nghi thức Kích hoạt Nhà nước & Dịch vụ công (Key Moment Chuẩn LED) đã sẵn sàng!');
});
