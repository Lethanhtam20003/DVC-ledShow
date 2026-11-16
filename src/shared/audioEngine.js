export class StateCeremonyAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.volume = 0.8;
    this.enabled = true;
    this.soundPreset = 'ceremony'; // 'ceremony' | 'tech' | 'minimal'

    this.touchSoundEnabled = true;
    this.touchVolume = 0.85;
    this.countdownSoundEnabled = true;
    this.countdownVolume = 0.9;
    this.fanfareSoundEnabled = true;
    this.fanfareVolume = 1.0;

    this.bgAudioEnabled = false;
    this.bgAudioVolume = 0.45;
    this.customBgAudioUrl = null;
    this.customFanfareAudioUrl = null;

    this.bgAudioEl = null;
    this.fanfareAudioEl = null;
    this.bgDesiredPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(
        this.enabled ? this.volume : 0,
        this.ctx.currentTime
      );
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(
        this.enabled ? this.volume : 0,
        this.ctx.currentTime
      );
    }
  }

  configure(opts = {}) {
    if (typeof opts.volume === 'number') {
      this.volume = Math.max(0, Math.min(1, opts.volume));
    }
    if (typeof opts.enabled === 'boolean') {
      this.enabled = opts.enabled;
    }
    if (typeof opts.soundPreset === 'string') {
      this.soundPreset = opts.soundPreset;
    }
    if (typeof opts.touchSoundEnabled === 'boolean') {
      this.touchSoundEnabled = opts.touchSoundEnabled;
    }
    if (typeof opts.touchVolume === 'number') {
      this.touchVolume = Math.max(0, Math.min(1, opts.touchVolume));
    }
    if (typeof opts.countdownSoundEnabled === 'boolean') {
      this.countdownSoundEnabled = opts.countdownSoundEnabled;
    }
    if (typeof opts.countdownVolume === 'number') {
      this.countdownVolume = Math.max(0, Math.min(1, opts.countdownVolume));
    }
    if (typeof opts.fanfareSoundEnabled === 'boolean') {
      this.fanfareSoundEnabled = opts.fanfareSoundEnabled;
    }
    if (typeof opts.fanfareVolume === 'number') {
      this.fanfareVolume = Math.max(0, Math.min(1, opts.fanfareVolume));
    }
    if (typeof opts.bgAudioEnabled === 'boolean') {
      this.bgAudioEnabled = opts.bgAudioEnabled;
    }
    if (typeof opts.bgAudioVolume === 'number') {
      this.bgAudioVolume = Math.max(0, Math.min(1, opts.bgAudioVolume));
    }
    if (opts.customBgAudioUrl !== undefined && opts.customBgAudioUrl !== this.customBgAudioUrl) {
      this.stopBgMusic();
      this.customBgAudioUrl = opts.customBgAudioUrl;
    }
    if (opts.customFanfareAudioUrl !== undefined && opts.customFanfareAudioUrl !== this.customFanfareAudioUrl) {
      this.stopFanfare();
      this.customFanfareAudioUrl = opts.customFanfareAudioUrl;
    }

    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(
        this.enabled ? this.volume : 0,
        this.ctx.currentTime
      );
    }

    if (this.bgAudioEl) {
      this.bgAudioEl.volume = this.enabled && this.bgAudioEnabled
        ? Math.max(0, Math.min(1, this.volume * this.bgAudioVolume))
        : 0;
      if (!this.enabled || !this.bgAudioEnabled) {
        this.bgAudioEl.pause();
      }
    }
    if (this.fanfareAudioEl) {
      this.fanfareAudioEl.volume = this.enabled && this.fanfareSoundEnabled
        ? Math.max(0, Math.min(1, this.volume * this.fanfareVolume))
        : 0;
    }
  }

  getDestination() {
    return this.masterGain || (this.ctx ? this.ctx.destination : null);
  }

  playTouchChime() {
    if (!this.enabled || !this.touchSoundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const level = this.touchVolume;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (this.soundPreset === 'tech') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1174.66, now);
        osc.frequency.exponentialRampToValueAtTime(1760.0, now + 0.14);
        gain.gain.setValueAtTime(0.22 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.28);
        osc.connect(gain);
        gain.connect(this.getDestination());
        osc.start(now);
        osc.stop(now + 0.29);
      } else if (this.soundPreset === 'minimal') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(783.99, now);
        osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.18);
        gain.gain.setValueAtTime(0.16 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.34);
        osc.connect(gain);
        gain.connect(this.getDestination());
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.16);
        gain.gain.setValueAtTime(0.24 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.36);
        osc.connect(gain);
        gain.connect(this.getDestination());
        osc.start(now);
        osc.stop(now + 0.37);
      }
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playCountdownBeep(num) {
    if (!this.enabled || !this.countdownSoundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const level = this.countdownVolume;

      if (this.soundPreset !== 'minimal') {
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(125 - (5 - num) * 10, now);
        subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.38);
        subGain.gain.setValueAtTime(
          (this.soundPreset === 'tech' ? 0.5 : 0.72) * level,
          now
        );
        subGain.gain.exponentialRampToValueAtTime(0.005, now + 0.38);
        subOsc.connect(subGain);
        subGain.connect(this.getDestination());
        subOsc.start(now);
        subOsc.stop(now + 0.4);
      }

      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chimeOsc.type = this.soundPreset === 'tech' ? 'sawtooth' : this.soundPreset === 'minimal' ? 'sine' : 'triangle';
      const pitch = num === 1 ? 880 : 523.25 + (5 - num) * 55;
      chimeOsc.frequency.setValueAtTime(pitch, now);
      chimeGain.gain.setValueAtTime(
        (this.soundPreset === 'minimal' ? 0.2 : 0.28) * level,
        now
      );
      chimeGain.gain.exponentialRampToValueAtTime(0.004, now + 0.42);
      if (this.soundPreset === 'tech') {
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2200, now);
        chimeOsc.connect(filter);
        filter.connect(chimeGain);
      } else {
        chimeOsc.connect(chimeGain);
      }
      chimeGain.connect(this.getDestination());
      chimeOsc.start(now);
      chimeOsc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playSynthFanfare() {
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const level = this.fanfareVolume;
      const isMinimal = this.soundPreset === 'minimal';
      const isTech = this.soundPreset === 'tech';

      const chord = [
        { freq: 261.63, delay: 0, dur: 1.5, gain: 0.28 },
        { freq: 329.63, delay: 0.08, dur: 1.5, gain: 0.24 },
        { freq: 392.0, delay: 0.16, dur: 1.6, gain: 0.24 },
        { freq: 523.25, delay: 0.24, dur: 1.9, gain: 0.32 },
        { freq: 659.25, delay: 0.34, dur: 1.8, gain: 0.2 },
      ];
      chord.forEach((n) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = isMinimal ? 'sine' : isTech ? 'triangle' : 'sawtooth';
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(isTech ? 2800 : 1800, now + n.delay);
        osc.frequency.setValueAtTime(n.freq, now + n.delay);
        g.gain.setValueAtTime(0.001, now + n.delay);
        g.gain.linearRampToValueAtTime(n.gain * level, now + n.delay + 0.08);
        g.gain.exponentialRampToValueAtTime(0.003, now + n.delay + n.dur);
        osc.connect(filter);
        filter.connect(g);
        g.connect(this.getDestination());
        osc.start(now + n.delay);
        osc.stop(now + n.delay + n.dur + 0.05);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playFanfare() {
    if (!this.enabled || !this.fanfareSoundEnabled) return;
    if (this.customFanfareAudioUrl) {
      try {
        this.stopFanfare();
        const audio = new Audio(this.customFanfareAudioUrl);
        audio.volume = Math.max(0, Math.min(1, this.volume * this.fanfareVolume));
        this.fanfareAudioEl = audio;
        audio.play().catch(() => {
          this.playSynthFanfare();
        });
        return;
      } catch {
        this.playSynthFanfare();
        return;
      }
    }
    this.playSynthFanfare();
  }

  stopFanfare() {
    if (this.fanfareAudioEl) {
      this.fanfareAudioEl.pause();
      this.fanfareAudioEl.currentTime = 0;
      this.fanfareAudioEl = null;
    }
  }

  syncBgMusic(shouldPlay) {
    this.bgDesiredPlaying = Boolean(shouldPlay);
    if (!shouldPlay || !this.enabled || !this.bgAudioEnabled || !this.customBgAudioUrl) {
      this.stopBgMusic();
      return;
    }

    if (!this.bgAudioEl || this.bgAudioEl.src !== this.customBgAudioUrl) {
      this.stopBgMusic();
      const el = new Audio(this.customBgAudioUrl);
      el.loop = true;
      el.volume = Math.max(0, Math.min(1, this.volume * this.bgAudioVolume));
      this.bgAudioEl = el;
    } else {
      this.bgAudioEl.volume = Math.max(0, Math.min(1, this.volume * this.bgAudioVolume));
    }

    if (this.bgAudioEl.paused) {
      this.bgAudioEl.play().catch(() => {});
    }
  }

  unlockBgMusicIfNeeded() {
    if (this.bgDesiredPlaying && this.bgAudioEl && this.bgAudioEl.paused) {
      this.bgAudioEl.play().catch(() => {});
    }
  }

  stopBgMusic() {
    if (this.bgAudioEl) {
      this.bgAudioEl.pause();
      this.bgAudioEl.currentTime = 0;
    }
  }
}

export const ceremonyAudio = new StateCeremonyAudio();
