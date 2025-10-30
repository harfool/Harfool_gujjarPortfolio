import { Suspense, lazy } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { profile } from '../data/profile.js';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

// Lazy load 3D scene for performance
const Hero3DScene = lazy(() => import('./3d/Hero3DScene.jsx'));

/**
 * Futuristic Hero Section with 3D Background
 * Features: Mouse-tracking 3D text, staggered animations, social icons with glow
 */
export default function FuturisticHero() {
  // Mouse tracking for floating text effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse following
  const springConfig = { stiffness: 150, damping: 30 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialIcons = [
    { 
      name: 'LinkedIn', 
      Icon: FaLinkedin,
      url: profile.contact.linkedin,
      color: '#0077B5',
      hoverColor: '#00A0DC'
    },
    { 
      name: 'GitHub', 
      Icon: FaGithub,
      url: 'https://github.com/harfool',
      color: '#8B5CF6',
      hoverColor: '#A78BFA'
    },
    { 
      name: 'Twitter', 
      Icon: FaTwitter,
      url: 'https://twitter.com/harfool',
      color: '#60A5FA',
      hoverColor: '#93C5FD'
    },
    { 
      name: 'Instagram', 
      Icon: FaInstagram,
      url: 'https://instagram.com/harfool',
      color: '#EC4899',
      hoverColor: '#F472B6'
    },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Background Scene */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      }>
        <Hero3DScene />
      </Suspense>

      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-5" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-32"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 text-primary font-medium text-sm">
            <span className="inline-block animate-wave mr-2">👋</span>
            Welcome to my digital space
          </span>
        </motion.div>

        {/* Floating 3D Name - Mouse Tracking */}
        <motion.div
          style={{ x, y }}
          variants={itemVariants}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              {profile.name.split(' ')[0]}
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
              {profile.name.split(' ')[1]}
            </span>
          </h1>
        </motion.div>

        {/* Animated Tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-2xl md:text-4xl font-light text-muted-foreground">
            <span className="text-primary font-semibold">Frontend Developer</span> ·{' '}
            <span className="text-accent font-semibold">React Specialist</span>
          </p>
        </motion.div>

        {/* Summary with typewriter effect simulation */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground leading-relaxed"
        >
          Crafting{' '}
          <span className="text-primary font-semibold">immersive digital experiences</span> with modern web technologies.
          Performance-driven, pixel-perfect, and user-centric.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-background/50 backdrop-blur-xl border-2 border-accent/50 text-accent rounded-xl font-bold text-lg hover:bg-accent/10 transition-colors"
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Social Icons with Glow */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: `0 0 20px ${social.hoverColor}`,
              }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* Icon container with glow */}
              <div className="relative w-14 h-14 rounded-2xl bg-glass/30 backdrop-blur-xl border border-glass-border/30 flex items-center justify-center text-2xl overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${social.color}40, transparent)`,
                  }}
                />
                
                {/* Icon */}
                <social.Icon className="relative z-10 filter drop-shadow-lg" style={{ color: social.color }} />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ background: social.color }}
                />
              </div>

              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap"
              >
                {social.name}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
