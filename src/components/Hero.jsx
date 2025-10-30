import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/profile.js';
import { useGsap } from '../lib/useGsap.js';
import { fadeInUp, staggerContainer, staggerChildren } from '../lib/variants.js';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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
              { href: profile.social.linkedin, Icon: FaLinkedin, label: 'LinkedIn', color: 'primary' },
              { href: profile.social.github, Icon: FaGithub, label: 'GitHub', color: 'accent' },
              { href: profile.social.twitter, Icon: FaTwitter, label: 'Twitter', color: 'primary' }
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
                  <social.Icon className="w-5 h-5" />
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