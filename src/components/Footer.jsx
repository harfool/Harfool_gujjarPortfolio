import { motion } from 'framer-motion';
import { profile, navigation } from '../data/profile.js';
import { staggerContainer, staggerChildren } from '../lib/variants.js';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="glass-card p-12 mb-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <motion.div
                variants={staggerChildren}
                className="md:col-span-2 space-y-6"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-4">
                    {profile.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {profile.summary.split('.')[0]}.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{profile.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{profile.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{profile.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={profile.social.}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`mailto:${profile.contact.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={staggerChildren}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold text-gradient">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <motion.button
                        onClick={() => scrollToSection(item.href)}
                        whileHover={{ x: 5 }}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
                      >
                        {item.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                variants={staggerChildren}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold text-gradient">
                  Services
                </h4>
                <ul className="space-y-3">
                  {profile.services.map((service) => (
                    <li key={service} className="text-muted-foreground">
                      {service}
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary inline-block text-sm px-4 py-2"
                >
                  Hire Me
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-muted-foreground text-sm"
          >
            <div className="flex items-center align-center space-x-4">
              <p>
                © 2025 {profile.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse "></div>
                <span>Available for freelance</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                className="glass-card p-2 text-primary hover:text-primary-hover transition-colors"
                aria-label="Back to top"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Skip Link for Accessibility */}
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 glass-card px-4 py-2 text-primary z-50"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
          >
            Skip to main content
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;