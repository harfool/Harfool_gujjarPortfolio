import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations with scroll triggers
 * Handles cleanup and provides easy animation utilities
 */
export const useGsap = () => {
  const contextRef = useRef();

  useEffect(() => {
    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {});
    
    return () => {
      // Cleanup all animations in this context
      contextRef.current?.revert();
    };
  }, []);

  // Animation utilities
  const animateText = (selector, options = {}) => {
    const {
      duration = 1,
      delay = 0,
      stagger = 0.1,
      y = 50,
      opacity = 0,
      ease = "power3.out"
    } = options;

    return contextRef.current?.add(() => {
      gsap.fromTo(selector, 
        { 
          y, 
          opacity,
          rotationX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration,
          delay,
          stagger,
          ease,
          transformOrigin: "center bottom"
        }
      );
    });
  };

  const animateCards = (selector, options = {}) => {
    const {
      duration = 0.8,
      stagger = 0.2,
      y = 100,
      scale = 0.8,
      opacity = 0,
      ease = "power3.out",
      trigger = null,
      start = "top 80%"
    } = options;

    return contextRef.current?.add(() => {
      gsap.fromTo(selector, 
        { 
          y, 
          scale,
          opacity
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          stagger,
          ease,
          scrollTrigger: trigger ? {
            trigger,
            start,
            toggleActions: "play none none reverse"
          } : undefined
        }
      );
    });
  };

  const animateCounter = (selector, endValue, options = {}) => {
    const {
      duration = 2,
      delay = 0,
      trigger = null,
      start = "top 80%"
    } = options;

    return contextRef.current?.add(() => {
      const counter = { value: 0 };
      
      gsap.to(counter, {
        value: endValue,
        duration,
        delay,
        ease: "power2.out",
        onUpdate() {
          document.querySelector(selector).textContent = Math.floor(counter.value);
        },
        scrollTrigger: trigger ? {
          trigger,
          start,
          toggleActions: "play none none none"
        } : undefined
      });
    });
  };

  const createScrollTrigger = (element, animation, options = {}) => {
    const {
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      pin = false,
      toggleActions = "play none none reverse"
    } = options;

    return contextRef.current?.add(() => {
      ScrollTrigger.create({
        trigger: element,
        start,
        end,
        scrub,
        pin,
        toggleActions,
        animation
      });
    });
  };

  const animateOnScroll = (selector, fromVars, toVars, options = {}) => {
    const {
      trigger = selector,
      start = "top 80%",
      end = "bottom 20%",
      toggleActions = "play none none reverse"
    } = options;

    return contextRef.current?.add(() => {
      gsap.fromTo(selector, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions
        }
      });
    });
  };

  // Hero specific animations
  const heroNameReveal = (selector, options = {}) => {
    const { delay = 0.5 } = options;
    
    return contextRef.current?.add(() => {
      // Split text into words and characters for animation
      const text = document.querySelector(selector);
      if (!text) return;
      
      const words = text.textContent.split(' ');
      text.innerHTML = words.map(word => 
        `<span class="word">${word.split('').map(char => 
          `<span class="char">${char}</span>`
        ).join('')}</span>`
      ).join(' ');

      gsap.fromTo(`${selector} .char`, 
        {
          y: 100,
          opacity: 0,
          rotationX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          delay,
          stagger: 0.05,
          ease: "back.out(1.7)",
          transformOrigin: "center bottom"
        }
      );
    });
  };

  // Progress bar animation
  const animateProgressBar = () => {
    return contextRef.current?.add(() => {
      gsap.fromTo('.progress-bar', 
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        }
      );
    });
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    contextRef,
    animateText: prefersReducedMotion ? () => {} : animateText,
    animateCards: prefersReducedMotion ? () => {} : animateCards,
    animateCounter: prefersReducedMotion ? () => {} : animateCounter,
    createScrollTrigger: prefersReducedMotion ? () => {} : createScrollTrigger,
    animateOnScroll: prefersReducedMotion ? () => {} : animateOnScroll,
    heroNameReveal: prefersReducedMotion ? () => {} : heroNameReveal,
    animateProgressBar: prefersReducedMotion ? () => {} : animateProgressBar,
    gsap: prefersReducedMotion ? null : gsap,
    ScrollTrigger: prefersReducedMotion ? null : ScrollTrigger
  };
};

// Utility function to check if animations should be disabled
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};