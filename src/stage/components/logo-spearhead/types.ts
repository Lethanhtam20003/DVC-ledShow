export type SpearheadStage =
  | 'idle'
  | 'ignition'
  | 'breakthrough'
  | 'dawn'
  | 'showcase';

export type StageExternalPhase = 'standby' | 'charging' | 'celebration';

export interface TechPillarItem {
  id: string;
  title: string;
  desc?: string;
  tag?: string;
  iconKey?: 'ai' | 'cloud' | 'gov';
}

export interface LogoSpearheadConfig {
  eventBadge?: string;
  eventTitle?: string;
  eventSubtitle?: string;
  celebrationRibbon?: string;
  celebrationTitle?: string;
  celebrationDesc?: string;
  customLogoData?: string | null;
  logoSize?: number;
  handCount?: number;
  showHeader?: boolean;
  showPodLabels?: boolean;
  podLabels?: string[];
  audioEnabled?: boolean;
  masterVolume?: number;
  countdownVolume?: number;
  fanfareVolume?: number;
  celebrationPillars?: Array<{ title: string; desc?: string }>;
}

export interface LogoSpearheadProps {
  logoSrc?: string;
  mainTitle?: string;
  subtitleBadge?: string;
  pillars?: TechPillarItem[];
  externalPhase?: StageExternalPhase;
  config?: LogoSpearheadConfig;
  activeHands?: Set<number>;
  isPreview?: boolean;
  onStartSequence?: () => void;
  onSequenceComplete?: () => void;
  onActivateHand?: (handIndex: number) => void;
  onDeactivateHand?: (handIndex: number) => void;
  onReset?: () => void;
  className?: string;
}

export interface MotionFrameState {
  stage: SpearheadStage;
  /** Overall normalized progress 0..1 across the 6.3s activation sequence */
  progress: number;
  /** Discrete barrier count remaining (3 -> 2 -> 1 -> 0) */
  barriersRemaining: number;
  /** Timestamp of latest barrier impact for camera & bloom punch */
  lastImpactAt: number;
  /** Active hand indices currently touched in idle */
  activeHandCount: number;
}
