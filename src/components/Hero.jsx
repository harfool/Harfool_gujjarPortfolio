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

  // WhatsApp CTA config
  const whatsappNumber = '919610237965'; // no '+' for wa.me
  const hireMessage = encodeURIComponent("Hi Harfool! I saw your portfolio and I'd like to discuss a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${hireMessage}`;

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
          delay: 0.1,
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-8 m-0">
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4 sm:px-0"
           >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat to hire me now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-glow inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.17 5.3 5.31.16 11.654.16c3.17 0 6.155 1.237 8.407 3.488a11.79 11.79 0 013.481 8.401c-.003 6.344-5.143 11.48-11.486 11.48a11.9 11.9 0 01-5.938-1.586L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.24 0 9.538-4.274 9.541-9.509.003-5.26-4.246-9.518-9.507-9.52-5.237 0-9.51 4.27-9.512 9.504a9.48 9.48 0 001.588 5.276l-.999 3.648 3.497-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.099 3.204 5.077 4.492.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412z" />
              </svg>
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

          {/* Social Links */}
          <motion.div
            variants={staggerChildren}
            className="flex justify-center gap-4 mb-12 sm:mb-16 px-4 sm:px-0"
          >
            {[
              { href: profile.social.linkedin, icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ), label: 'LinkedIn', color: 'primary' },
              { href: profile.social.github, icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              ), label: 'GitHub', color: 'accent' },
              { href: profile.social.twitter, icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              ), label: 'Twitter', color: 'primary' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-card p-3 ${
                  social.color === 'primary' 
                    ? 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40' 
                    : 'bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/40'
                } transition-all duration-300 group`}
              >
                <div className="relative">
                  {social.icon}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.a>
            ))}
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
        { text: 'JavaScript', className: 'top-[18rem] right-[2rem]', delay: '2s' },
        { text: 'Tailwind CSS', className: 'top-[23rem] right-[6rem]', delay: '4s' },
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
      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
};

export default Hero;