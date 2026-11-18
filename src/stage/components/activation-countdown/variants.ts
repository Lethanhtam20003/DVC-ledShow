import type { Variants } from 'framer-motion';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const handPodsContainerVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_OUT_EXPO,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: 28,
    scale: 0.94,
    transition: { duration: 0.35, ease: EASE_IN_OUT },
  },
};

export const handPodItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export const laserPathVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (index: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1, 1],
    transition: {
      pathLength: {
        duration: 0.78,
        delay: index * 0.03,
        ease: EASE_OUT_EXPO,
      },
      opacity: {
        duration: 0.85,
        delay: index * 0.03,
        times: [0, 0.12, 1],
      },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
};

export const circuitOverlayVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 0.92,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: EASE_IN_OUT,
    },
  },
};

export const countdownPumpVariants: Variants = {
  initial: {
    scale: 0.45,
    opacity: 0,
    rotateX: 30,
    filter: 'blur(12px)',
  },
  animate: {
    scale: [0.45, 1.52, 1],
    opacity: [0, 1, 1],
    rotateX: [30, -5, 0],
    filter: ['blur(12px)', 'blur(0px)', 'blur(0px)'],
    transition: {
      duration: 0.52,
      times: [0, 0.38, 1],
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    scale: 0.72,
    opacity: 0,
    filter: 'blur(6px)',
    transition: {
      duration: 0.08,
      ease: 'easeIn',
    },
  },
};

export const shockwaveRingVariants: Variants = {
  initial: {
    width: '0vw',
    height: '0vw',
    opacity: 1,
    borderWidth: '22px',
  },
  animate: (delaySec: number = 0) => ({
    width: '300vw',
    height: '300vw',
    opacity: [1, 0.92, 0],
    borderWidth: ['22px', '10px', '2px'],
    transition: {
      duration: 1.05,
      delay: delaySec,
      times: [0, 0.42, 1],
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const whiteFlashVariants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export const logoShardVariants: Variants = {
  initial: (idx: number) => {
    const angle = (idx / 12) * Math.PI * 2;
    const dist = 280 + (idx % 3) * 80;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * (dist * 0.7),
      rotate: (idx % 2 === 0 ? 1 : -1) * 140,
      scale: 0.3,
      opacity: 0,
    };
  },
  animate: (idx: number) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: [0.3, 1.25, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.62,
      delay: idx * 0.018,
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const logoAssemblyVariants: Variants = {
  initial: {
    y: -170,
    scale: 2.35,
    opacity: 0,
    rotate: -14,
    filter: 'blur(14px) brightness(1.35)',
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    filter: 'blur(0px) brightness(1)',
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 14,
      mass: 1.35,
      delay: 0.1,
    },
  },
};

export const titleRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.92,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const pillarsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.16,
    },
  },
};

export const pillarCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -52,
    y: 44,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 205,
      damping: 18,
    },
  },
};
