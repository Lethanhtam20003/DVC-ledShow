export class StateCeremonyAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.volume = 0.8;
    this.enabled = true;
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

  configure({ volume, enabled }) {
    if (typeof volume === 'number') {
      this.volume = Math.max(0, Math.min(1, volume));
    }
    if (typeof enabled === 'boolean') {
      this.enabled = enabled;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(
        this.enabled ? this.volume : 0,
        this.ctx.currentTime
      );
    }
  }

  getDestination() {
    return this.masterGain || (this.ctx ? this.ctx.destination : null);
  }

  playTouchChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.16);
      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.004, now + 0.36);
      osc.connect(gain);
      gain.connect(this.getDestination());
      osc.start(now);
      osc.stop(now + 0.37);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playCountdownBeep(num) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(125 - (5 - num) * 10, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.38);
      subGain.gain.setValueAtTime(0.72, now);
      subGain.gain.exponentialRampToValueAtTime(0.005, now + 0.38);
      subOsc.connect(subGain);
      subGain.connect(this.getDestination());
      subOsc.start(now);
      subOsc.stop(now + 0.4);

      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chimeOsc.type = 'triangle';
      const pitch = num === 1 ? 880 : 523.25 + (5 - num) * 55;
      chimeOsc.frequency.setValueAtTime(pitch, now);
      chimeGain.gain.setValueAtTime(0.28, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.004, now + 0.42);
      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.getDestination());
      chimeOsc.start(now);
      chimeOsc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
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
        osc.type = 'sawtooth';
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, now + n.delay);
        osc.frequency.setValueAtTime(n.freq, now + n.delay);
        g.gain.setValueAtTime(0.001, now + n.delay);
        g.gain.linearRampToValueAtTime(n.gain, now + n.delay + 0.08);
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
}

export const ceremonyAudio = new StateCeremonyAudio();

