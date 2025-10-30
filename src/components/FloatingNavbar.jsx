import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile.js';

/**
 * Floating Glass Navbar with smooth scroll and animated tabs
 */
export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            animate={{
              backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
            }}
            className={`glass-card-elevated rounded-2xl px-6 py-4 flex items-center justify-between ${
              isScrolled ? 'shadow-2xl' : ''
            }`}
          >
            {/* Logo / Name */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-lg"
              >
                {profile.name.split(' ').map(n => n[0]).join('')}
              </motion.div>
              <div className="hidden md:block">
                <div className="font-black text-lg group-hover:text-primary transition-colors">
                  {profile.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  Frontend Developer
                </div>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>

                  {/* Animated underline */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-full h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-full h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-full h-0.5 bg-foreground rounded-full"
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 glass-card-elevated z-50 lg:hidden p-6 overflow-y-auto"
            >
              {/* Close button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Profile */}
              <div className="mb-8 pt-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-2xl shadow-lg mb-4">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-black text-xl mb-1">{profile.name}</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </div>

              {/* Nav Items */}
              <div className="space-y-2 mb-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary border border-primary/30'
                        : 'hover:bg-glass/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-center shadow-lg"
              >
                Hire Me
              </motion.a>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-glass-border/30"
              >
                <p className="text-xs text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { url: profile.contact.linkedin, icon: '💼', label: 'LinkedIn' },
                    { url: 'https://github.com/harfool', icon: '⚡', label: 'GitHub' },
                    { url: 'https://twitter.com/harfool', icon: '🐦', label: 'Twitter' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-2xl hover:bg-primary/10 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
