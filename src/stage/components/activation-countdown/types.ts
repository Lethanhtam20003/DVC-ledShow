export type SequencePhase =
  | 'idle'
  | 'dataflow'
  | 'countdown'
  | 'shockwave'
  | 'pillars';

export type StageExternalPhase = 'standby' | 'charging' | 'celebration';

export interface PillarItem {
  id: string;
  title: string;
  desc?: string;
  iconKey?: 'gov' | 'eco' | 'soc';
}

export interface HandAnchor {
  id: number;
  label: string;
  /** X coordinate inside the 1920x1080 SVG canvas */
  svgX: number;
  /** Y coordinate inside the 1920x1080 SVG canvas */
  svgY: number;
  /** Horizontal percentage from left (0-100) */
  leftPct: number;
  /** Bottom percentage offset for symmetric curved layout */
  bottomPct: number;
  /** Subtle symmetric tilt in degrees */
  tiltDeg: number;
}

export interface ActivationCountdownConfig {
  eventBadge?: string;
  eventTitle?: string;
  eventSubtitle?: string;
  celebrationRibbon?: string;
  celebrationTitle?: string;
  celebrationDesc?: string;
  customLogoData?: string | null;
  logoSize?: number;
  showHeader?: boolean;
  showPodLabels?: boolean;
  podLabels?: string[];
  audioEnabled?: boolean;
  masterVolume?: number;
  countdownVolume?: number;
  fanfareVolume?: number;
  celebrationPillars?: Array<{ title: string; desc?: string }>;
}

export interface ActivationCountdownProps {
  /** Override background pattern image (defaults to /bg-trong-dong.png with ./dong-son-drum.png fallback) */
  bgImageSrc?: string;
  /** Override central logo image (defaults to ./logo-cdsqg-2026.png) */
  logoSrc?: string;
  /** Override 5-second countdown audio track (defaults to /audio/countdown.mp3 with built-in fallback) */
  audioSrc?: string;
  /** Main title shown in Phase 5 */
  mainTitle?: string;
  /** Subtitle badge shown in Phase 5 */
  subtitleBadge?: string;
  /** 3 pillars displayed in Phase 5 */
  pillars?: PillarItem[];
  /** Milliseconds between each countdown digit (default 1000ms) */
  countdownStepMs?: number;
  /** Duration of Phase 2 data flow before digit 5 enters (default 1000ms) */
  dataFlowMs?: number;
  /** Controlled external phase from Studio/Stage */
  externalPhase?: StageExternalPhase;
  /** External Studio configuration */
  config?: ActivationCountdownConfig;
  /** Active touched hand IDs (0-based) in controlled mode */
  activeHands?: Set<number>;
  /** Preview scale flag (disables extra browser alerts, fits preview container) */
  isPreview?: boolean;
  /** Triggered when user clicks Start or all 6 hands are activated */
  onStartSequence?: () => void;
  /** Triggered when the countdown hits 0 and transitions into celebration/pillars */
  onSequenceComplete?: () => void;
  /** Hand touch down callback for Studio/Stage */
  onActivateHand?: (handIndex: number) => void;
  /** Hand touch up callback for Studio/Stage */
  onDeactivateHand?: (handIndex: number) => void;
  /** Reset handler */
  onReset?: () => void;
  /** Optional extra className */
  className?: string;
}
