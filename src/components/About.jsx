import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerChildren } from '../lib/variants.js';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <h2 className="section-header">About Me</h2>
            <p className="section-subtitle">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-6"
            >
                <motion.div
                variants={staggerChildren}
                className="glass-card p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                  {profile.summary}
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm sm:text-base">
                      <strong>Location:</strong> {profile.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm sm:text-base">
                      <strong>Experience:</strong> 8+ months in Frontend Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm sm:text-base">
                      <strong>Focus:</strong> Performance-driven React Applications
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Core Strengths */}
              <motion.div
                variants={staggerChildren}
                className="glass-card p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">
                  Core Strengths
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {profile.strengths.map((strength, index) => (
                    <motion.span
                      key={strength}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="skill-tag bg-primary/10 border-primary/20 text-primary"
                    >
                      {strength}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image & Highlights */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              {/* Profile Card */}
              <motion.div
                variants={staggerChildren}
                className="glass-card-elevated p-8 text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 glass-card rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="w-32 h-32 glass-card rounded-full flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gradient">
                  {profile.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {profile.title}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={profile.social.linkedin}
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

              {/* Quick Facts */}
              <motion.div
                variants={staggerChildren}
                className="glass-card p-6"
              >
                <h4 className="font-bold mb-4 text-gradient">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Performance Improvement</span>
                    <span className="font-semibold text-primary">~40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients</span>
                    <span className="font-semibold text-accent">100%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;