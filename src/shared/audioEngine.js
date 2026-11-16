export class StateCeremonyAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.dryBus = null;
    this.reverbSend = null;
    this.reverbNode = null;
    this.noiseBuffer = null;

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
    this.activeFanfareBus = null;
    this.bgDesiredPlaying = false;
  }

  _buildHallImpulse(ctx, duration = 2.6, decay = 2.4) {
    const rate = ctx.sampleRate;
    const length = Math.floor(rate * duration);
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < length; i++) {
        const n = i / length;
        const env = Math.pow(1 - n, decay);
        // Gentle low-pass smoothing so reverb tail sounds warm like a concert hall
        const white = Math.random() * 2 - 1;
        lp = lp * 0.72 + white * 0.28;
        data[i] = lp * env;
      }
    }
    return impulse;
  }

  _buildNoiseBuffer(ctx, duration = 2.5) {
    const rate = ctx.sampleRate;
    const length = Math.floor(rate * duration);
    const buffer = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    }
    return buffer;
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

      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.2, this.ctx.currentTime);
      this.compressor.connect(this.masterGain);

      this.dryBus = this.ctx.createGain();
      this.dryBus.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.dryBus.connect(this.compressor);

      this.reverbNode = this.ctx.createConvolver();
      this.reverbNode.buffer = this._buildHallImpulse(this.ctx, 2.6, 2.35);

      this.reverbSend = this.ctx.createGain();
      this.reverbSend.gain.setValueAtTime(0.45, this.ctx.currentTime);
      this.reverbSend.connect(this.reverbNode);
      this.reverbNode.connect(this.compressor);

      this.noiseBuffer = this._buildNoiseBuffer(this.ctx, 2.6);
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
    return this.dryBus || this.masterGain || (this.ctx ? this.ctx.destination : null);
  }

  _routeWithReverb(node, dryTarget, reverbAmt = 0.35) {
    node.connect(dryTarget);
    if (this.reverbSend && reverbAmt > 0) {
      const wet = this.ctx.createGain();
      wet.gain.setValueAtTime(reverbAmt, this.ctx.currentTime);
      node.connect(wet);
      wet.connect(this.reverbSend);
    }
  }

  _triggerDrumImpact(now, level, {
    startFreq = 145,
    endFreq = 32,
    dur = 0.65,
    subGain = 0.9,
    noiseFreq = 340,
    noiseGain = 0.35,
    reverbAmt = 0.45,
    dryTarget = null,
  } = {}) {
    const dest = dryTarget || this.getDestination();
    if (!dest) return;

    // Deep sub-bass drum body
    const subOsc = this.ctx.createOscillator();
    const subEnv = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(startFreq, now);
    subOsc.frequency.exponentialRampToValueAtTime(endFreq, now + dur * 0.78);
    subEnv.gain.setValueAtTime(0.001, now);
    subEnv.gain.linearRampToValueAtTime(subGain * level, now + 0.012);
    subEnv.gain.exponentialRampToValueAtTime(0.002, now + dur);
    subOsc.connect(subEnv);
    this._routeWithReverb(subEnv, dest, reverbAmt);
    subOsc.start(now);
    subOsc.stop(now + dur + 0.05);

    // Mid-low skin punch
    const punchOsc = this.ctx.createOscillator();
    const punchEnv = this.ctx.createGain();
    punchOsc.type = 'triangle';
    punchOsc.frequency.setValueAtTime(startFreq * 1.65, now);
    punchOsc.frequency.exponentialRampToValueAtTime(endFreq * 1.8, now + 0.16);
    punchEnv.gain.setValueAtTime(0.45 * subGain * level, now);
    punchEnv.gain.exponentialRampToValueAtTime(0.002, now + 0.22);
    punchOsc.connect(punchEnv);
    punchEnv.connect(dest);
    punchOsc.start(now);
    punchOsc.stop(now + 0.24);

    // Drum skin transient via filtered noise
    if (this.noiseBuffer && noiseGain > 0) {
      const nSrc = this.ctx.createBufferSource();
      nSrc.buffer = this.noiseBuffer;
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(noiseFreq, now);
      bp.Q.setValueAtTime(1.4, now);
      const nEnv = this.ctx.createGain();
      nEnv.gain.setValueAtTime(noiseGain * level, now);
      nEnv.gain.exponentialRampToValueAtTime(0.002, now + 0.18);
      nSrc.connect(bp);
      bp.connect(nEnv);
      this._routeWithReverb(nEnv, dest, reverbAmt * 1.2);
      nSrc.start(now);
      nSrc.stop(now + 0.2);
    }
  }

  _triggerBrassVoice(dest, freq, startTime, dur, peakGain, {
    pan = 0,
    detuneSpread = 8,
    filterStart = 2800,
    filterEnd = 1200,
    attack = 0.06,
    reverbAmt = 0.5,
    wave = 'sawtooth',
  } = {}) {
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.setValueAtTime(1.8, startTime);
    filter.frequency.setValueAtTime(filterStart, startTime);
    filter.frequency.exponentialRampToValueAtTime(filterEnd, startTime + Math.min(dur * 0.7, 0.9));

    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0.0008, startTime);
    env.gain.linearRampToValueAtTime(peakGain, startTime + attack);
    env.gain.setValueAtTime(peakGain * 0.88, startTime + Math.max(attack + 0.02, dur * 0.45));
    env.gain.exponentialRampToValueAtTime(0.001, startTime + dur);

    let outNode = env;
    if (typeof this.ctx.createStereoPanner === 'function' && pan !== 0) {
      const panner = this.ctx.createStereoPanner();
      panner.pan.setValueAtTime(pan, startTime);
      env.connect(panner);
      outNode = panner;
    }

    filter.connect(env);
    this._routeWithReverb(outNode, dest, reverbAmt);

    const detunes = detuneSpread > 0 ? [-detuneSpread, 0, detuneSpread] : [0];
    detunes.forEach((d) => {
      const osc = this.ctx.createOscillator();
      osc.type = wave;
      osc.frequency.setValueAtTime(freq, startTime);
      if (d !== 0) osc.detune.setValueAtTime(d, startTime);
      osc.connect(filter);
      osc.start(startTime);
      osc.stop(startTime + dur + 0.05);
    });
  }

  playTouchChime() {
    if (!this.enabled || !this.touchSoundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const level = this.touchVolume;
      const dest = this.getDestination();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (this.soundPreset === 'tech') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1174.66, now);
        osc.frequency.exponentialRampToValueAtTime(1760.0, now + 0.14);
        gain.gain.setValueAtTime(0.22 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.28);
        osc.connect(gain);
        this._routeWithReverb(gain, dest, 0.3);
        osc.start(now);
        osc.stop(now + 0.29);
      } else if (this.soundPreset === 'minimal') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(783.99, now);
        osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.18);
        gain.gain.setValueAtTime(0.16 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.34);
        osc.connect(gain);
        this._routeWithReverb(gain, dest, 0.2);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.16);
        gain.gain.setValueAtTime(0.24 * level, now);
        gain.gain.exponentialRampToValueAtTime(0.004, now + 0.4);
        osc.connect(gain);
        this._routeWithReverb(gain, dest, 0.35);
        osc.start(now);
        osc.stop(now + 0.42);
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
      const dest = this.getDestination();
      const clampedNum = Math.max(1, Math.min(7, Number(num) || 1));
      const intensity = 1 + (5 - Math.min(5, clampedNum)) * 0.12;

      if (this.soundPreset === 'minimal') {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        const pitch = clampedNum === 1 ? 880 : 523.25 + (5 - Math.min(5, clampedNum)) * 55;
        osc.frequency.setValueAtTime(pitch, now);
        g.gain.setValueAtTime(0.24 * level, now);
        g.gain.exponentialRampToValueAtTime(0.003, now + 0.5);
        osc.connect(g);
        this._routeWithReverb(g, dest, 0.3);
        osc.start(now);
        osc.stop(now + 0.52);
        return;
      }

      // Layer 1: Epic Taiko / Dong Son War Drum Impact
      this._triggerDrumImpact(now, level, {
        startFreq: 150 - (5 - Math.min(5, clampedNum)) * 8,
        endFreq: 30,
        dur: clampedNum === 1 ? 0.95 : 0.72,
        subGain: 0.92 * intensity,
        noiseFreq: this.soundPreset === 'tech' ? 520 : 320,
        noiseGain: 0.38 * level,
        reverbAmt: 0.55,
      });

      // Layer 2: Heroic Brass + Bronze Bell Power Chord (Root + Fifth + Octave)
      const rootFreq = clampedNum === 1 ? 523.25 : 261.63 + (5 - Math.min(5, clampedNum)) * 32;
      const chordFreqs = clampedNum === 1
        ? [rootFreq * 0.5, rootFreq, rootFreq * 1.5, rootFreq * 2]
        : [rootFreq, rootFreq * 1.5];

      chordFreqs.forEach((f, idx) => {
        this._triggerBrassVoice(dest, f, now, clampedNum === 1 ? 0.92 : 0.68, 0.14 * level, {
          pan: idx % 2 === 0 ? -0.28 : 0.28,
          detuneSpread: 6,
          filterStart: this.soundPreset === 'tech' ? 3600 : 2600,
          filterEnd: 950,
          attack: 0.02,
          reverbAmt: 0.55,
          wave: this.soundPreset === 'tech' ? 'sawtooth' : 'triangle',
        });
      });

      // Layer 3: Tension riser swell on the final 2 seconds leading into climax
      if (clampedNum <= 2 && this.noiseBuffer) {
        const riser = this.ctx.createBufferSource();
        riser.buffer = this.noiseBuffer;
        const bp = this.ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.Q.setValueAtTime(2.5, now);
        bp.frequency.setValueAtTime(clampedNum === 2 ? 400 : 800, now);
        bp.frequency.exponentialRampToValueAtTime(clampedNum === 2 ? 1400 : 3800, now + 0.85);
        const rEnv = this.ctx.createGain();
        rEnv.gain.setValueAtTime(0.001, now);
        rEnv.gain.linearRampToValueAtTime(0.18 * level, now + 0.78);
        rEnv.gain.exponentialRampToValueAtTime(0.002, now + 0.92);
        riser.connect(bp);
        bp.connect(rEnv);
        this._routeWithReverb(rEnv, dest, 0.6);
        riser.start(now);
        riser.stop(now + 0.95);
      }
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playSynthFanfare() {
    this.init();
    if (!this.ctx) return;
    try {
      this.stopFanfare();
      const now = this.ctx.currentTime;
      const level = this.fanfareVolume;

      const fanfareBus = this.ctx.createGain();
      fanfareBus.gain.setValueAtTime(1.0, now);
      fanfareBus.connect(this.dryBus);
      this.activeFanfareBus = fanfareBus;

      if (this.soundPreset === 'minimal') {
        const notes = [261.63, 329.63, 392.0, 523.25, 659.25];
        notes.forEach((f, idx) => {
          this._triggerBrassVoice(fanfareBus, f, now + idx * 0.08, 2.4, 0.14 * level, {
            pan: (idx - 2) * 0.2,
            detuneSpread: 4,
            filterStart: 1800,
            filterEnd: 900,
            attack: 0.08,
            reverbAmt: 0.45,
            wave: 'sine',
          });
        });
        return;
      }

      const isTech = this.soundPreset === 'tech';

      // Layer 1: Massive Climax Sub-Bass Explosion + Taiko + Stereo Cymbal Crash (t = 0)
      this._triggerDrumImpact(now, level, {
        startFreq: 110,
        endFreq: 26,
        dur: 1.45,
        subGain: 1.0,
        noiseFreq: 420,
        noiseGain: 0.45,
        reverbAmt: 0.65,
        dryTarget: fanfareBus,
      });

      if (this.noiseBuffer) {
        const crash = this.ctx.createBufferSource();
        crash.buffer = this.noiseBuffer;
        const hp = this.ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.setValueAtTime(1400, now);
        hp.frequency.exponentialRampToValueAtTime(4800, now + 2.2);
        const cEnv = this.ctx.createGain();
        cEnv.gain.setValueAtTime(0.001, now);
        cEnv.gain.linearRampToValueAtTime(0.32 * level, now + 0.03);
        cEnv.gain.exponentialRampToValueAtTime(0.002, now + 2.5);
        crash.connect(hp);
        hp.connect(cEnv);
        this._routeWithReverb(cEnv, fanfareBus, 0.75);
        crash.start(now);
        crash.stop(now + 2.55);
      }

      // Layer 2: Triumphant Ascending Brass Fanfare Motif (G4 -> C5 -> E5 -> G5 -> C6)
      const motif = [
        { freq: 392.0, start: 0.0, dur: 0.28, gain: 0.16, pan: -0.35 },
        { freq: 523.25, start: 0.18, dur: 0.28, gain: 0.17, pan: 0.35 },
        { freq: 659.25, start: 0.36, dur: 0.32, gain: 0.18, pan: -0.25 },
        { freq: 783.99, start: 0.56, dur: 1.55, gain: 0.2, pan: 0.25 },
        { freq: 1046.5, start: 0.85, dur: 3.6, gain: 0.17, pan: 0 },
      ];
      motif.forEach((m) => {
        this._triggerBrassVoice(fanfareBus, m.freq, now + m.start, m.dur, m.gain * level, {
          pan: m.pan,
          detuneSpread: 8,
          filterStart: isTech ? 4200 : 3400,
          filterEnd: 1500,
          attack: 0.04,
          reverbAmt: 0.6,
          wave: 'sawtooth',
        });
      });

      // Layer 3: Deep Bass Foundation + Lush Orchestral Sustain Chord (C Major)
      const sustainChord = [
        { freq: 65.41, start: 0.0, dur: 4.8, gain: 0.22, pan: 0, wave: 'sawtooth', fStart: 900, fEnd: 420 },
        { freq: 98.0, start: 0.18, dur: 4.6, gain: 0.16, pan: -0.2, wave: 'sawtooth', fStart: 1100, fEnd: 520 },
        { freq: 130.81, start: 0.32, dur: 4.6, gain: 0.18, pan: 0.2, wave: 'sawtooth', fStart: 1400, fEnd: 680 },
        { freq: 261.63, start: 0.45, dur: 4.5, gain: 0.14, pan: -0.45, wave: 'sawtooth', fStart: 2200, fEnd: 1100 },
        { freq: 329.63, start: 0.5, dur: 4.4, gain: 0.13, pan: 0.45, wave: 'sawtooth', fStart: 2200, fEnd: 1100 },
        { freq: 392.0, start: 0.55, dur: 4.3, gain: 0.13, pan: -0.3, wave: 'sawtooth', fStart: 2400, fEnd: 1200 },
        { freq: 523.25, start: 0.62, dur: 4.2, gain: 0.14, pan: 0.3, wave: 'sawtooth', fStart: 2600, fEnd: 1300 },
      ];
      sustainChord.forEach((n) => {
        this._triggerBrassVoice(fanfareBus, n.freq, now + n.start, n.dur, n.gain * level, {
          pan: n.pan,
          detuneSpread: 9,
          filterStart: n.fStart,
          filterEnd: n.fEnd,
          attack: 0.18,
          reverbAmt: 0.65,
          wave: n.wave,
        });
      });

      // Layer 4: Sparkling High Celebration Chimes
      const bells = [
        { freq: 1046.5, delay: 0.45, pan: -0.5 },
        { freq: 1318.51, delay: 0.65, pan: 0.5 },
        { freq: 1567.98, delay: 0.85, pan: -0.35 },
        { freq: 2093.0, delay: 1.05, pan: 0.35 },
      ];
      bells.forEach((b) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(b.freq, now + b.delay);
        g.gain.setValueAtTime(0.001, now + b.delay);
        g.gain.linearRampToValueAtTime(0.11 * level, now + b.delay + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + b.delay + 2.4);
        osc.connect(g);
        if (typeof this.ctx.createStereoPanner === 'function') {
          const p = this.ctx.createStereoPanner();
          p.pan.setValueAtTime(b.pan, now + b.delay);
          g.connect(p);
          this._routeWithReverb(p, fanfareBus, 0.75);
        } else {
          this._routeWithReverb(g, fanfareBus, 0.75);
        }
        osc.start(now + b.delay);
        osc.stop(now + b.delay + 2.45);
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
    if (this.activeFanfareBus && this.ctx) {
      const bus = this.activeFanfareBus;
      this.activeFanfareBus = null;
      try {
        const now = this.ctx.currentTime;
        bus.gain.cancelScheduledValues(now);
        bus.gain.setValueAtTime(bus.gain.value, now);
        bus.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
        setTimeout(() => {
          try {
            bus.disconnect();
          } catch {
            // ignore already disconnected
          }
        }, 180);
      } catch {
        // ignore
      }
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
