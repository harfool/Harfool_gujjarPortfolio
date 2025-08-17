// Framer Motion animation variants for consistent animations

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -30,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 50,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerChildren = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.2
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Page transition variants
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  whileTap: { 
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

export const hoverLift = {
  whileHover: { 
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Skill tag animations
export const skillTag = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  whileHover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2
    }
  }
};

// Project card animations
export const projectCard = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  whileHover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Form animations
export const formField = {
  hidden: { 
    opacity: 0, 
    x: -20
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

// Navigation animations
export const navItem = {
  hidden: { 
    opacity: 0, 
    y: -10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  whileHover: {
    y: -2,
    transition: {
      duration: 0.2
    }
  }
};

// Mobile menu animations
export const mobileMenu = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Utility function to get reduced motion variants
export const getReducedMotionVariants = (variants) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
      exit: { opacity: 0, transition: { duration: 0.01 } }
    };
  }
  return variants;
};