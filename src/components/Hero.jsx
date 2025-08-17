import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/profile.js';
import { useGsap } from '../lib/useGsap.js';
import { fadeInUp, staggerContainer, staggerChildren } from '../lib/variants.js';

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const { heroNameReveal, animateCounter, animateCards } = useGsap();

  useEffect(() => {
    // Animate name reveal with GSAP
    if (nameRef.current) {
      heroNameReveal('.hero-name', { delay: 0.8 });
    }

    // Animate title
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.classList.add('animate-slide-up');
      }, 1200);
    }

    // Animate stats counters
    stats.forEach((stat, index) => {
      const value = parseInt(stat.value);
      if (!isNaN(value)) {
        animateCounter(`#stat-${index}`, value, {
          delay: 2 + index * 0.2,
          trigger: statsRef.current
        });
      }
    });

    // Animate floating badges
    animateCards('.floating-badge', {
      delay: 2.5,
      stagger: 0.3
    });
  }, [heroNameReveal, animateCounter, animateCards]);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center mt-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={staggerChildren}
            className="mb-4 sm:mb-6"
          >
            <span className="glass-card px-3 sm:px-4 py-2 text-sm font-medium text-primary bg-primary/10 border-primary/20">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            ref={nameRef}
            variants={staggerChildren}
            className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-3 sm:mb-4 text-gradient leading-tight px-2 sm:px-0"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            ref={titleRef}
            variants={staggerChildren}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-6 sm:mb-8 text-muted-foreground px-2 sm:px-0"
          >
            {profile.title}
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={staggerChildren}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 text-muted-foreground leading-relaxed px-4 sm:px-0"
          >
            {profile.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <motion.a
              href={`mailto:${profile.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-glow"
            >
              Hire Me Now
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            variants={staggerChildren}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerChildren}
                className="glass-card p-4 sm:p-6 text-center group hover:bg-glass/60 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                  <span id={`stat-${index}`}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Strip */}
          <motion.div
            variants={staggerChildren}
            className="mt-12 sm:mt-16 glass-card p-4 sm:p-6 mx-4 sm:mx-0"
          >
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">Available for:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {profile.services.map((service, index) => (
                <span
                  key={service}
                  className="skill-tag floating-badge text-xs sm:text-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service}
                </span>
              ))}
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 text-primary hover:text-primary-hover font-medium text-sm sm:text-base"
            >
              Let's discuss your project →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Badges (use valid Tailwind arbitrary values so they don't collapse/overlap) */}
      {[
        { text: 'React.js', className: 'top-[5rem] right-[6rem]' },
        { text: 'Node.js', className: 'top-[8rem] right-[12rem]' },
        { text: 'Express.js', className: 'top-[12rem] right-[4rem]' },
  { text: 'MongoDB', className: 'top-[16rem] right-[10rem]', delay: '3s' },
        { text: 'JavaScript', className: 'bottom-32 left-20', delay: '2s' },
        { text: 'Tailwind CSS', className: 'top-1/2 right-32', delay: '4s' },
      ].map((badge) => (
        <div
          key={badge.text}
          className={`absolute ${badge.className} floating-badge skill-tag animate-float hidden lg:block`}
          style={badge.delay ? { animationDelay: badge.delay } : undefined}
        >
          {badge.text}
        </div>
      ))}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 glass-card border-2 border-glass-border/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;