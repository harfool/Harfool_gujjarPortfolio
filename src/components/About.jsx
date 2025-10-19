import { motion } from "framer-motion";
import { profile } from "../data/profile.js";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerChildren,
} from "../lib/variants.js";

const About = () => {
  // WhatsApp contact config
  const whatsappNumber = "919610237965"; // remove '+' per wa.me requirement
  const hireMeMessage = encodeURIComponent(
    "Hi Harfool! I just visited your portfolio and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${hireMeMessage}`;
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
          <motion.div variants={staggerChildren} className="text-center mb-16">
            <h2 className="section-header">About Me</h2>
            <p className="section-subtitle">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
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
                      <strong>Experience:</strong> 10+ months in Frontend
                      Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm sm:text-base">
                      <strong>Freelance</strong> July 2025 - Present
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm sm:text-base">
                      <strong>Focus:</strong> Performance-driven React
                      Applications
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
            <motion.div variants={fadeInRight} className="space-y-6">
              {/* Profile Card */}
              <motion.div
                variants={staggerChildren}
                className="glass-card-elevated p-8 text-center"
              >
                {/* Updated circular avatar with improved face visibility */}
                <div className="group relative mx-auto mb-6 w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full ring-2 ring-primary/40 shadow-lg bg-gradient-to-br from-primary/30 via-primary/10 to-accent/30 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/df2maejnd/image/upload/v1751013823/bc2638c8-9275-472f-94ce-b235ef5da132_qtb5ry.png"
                    alt={`${profile.name} avatar`}
                    className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-1"
                    loading="lazy"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-avatar.png";
                    }}
                  />
                  {/* Soft vignette to focus face */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
                  {/* Radial highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),transparent_65%)] mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gradient">
                  {profile.name}
                </h3>
                <p className="text-muted-foreground mb-6">{profile.title}</p>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`mailto:${profile.contact.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.a>
                </div>
                {/* Hire Me Now WhatsApp CTA */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                  aria-label="Open WhatsApp chat to hire me now"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.17 5.3 5.31.16 11.654.16c3.17 0 6.155 1.237 8.407 3.488a11.79 11.79 0 013.481 8.401c-.003 6.344-5.143 11.48-11.486 11.48a11.9 11.9 0 01-5.938-1.586L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.24 0 9.538-4.274 9.541-9.509.003-5.26-4.246-9.518-9.507-9.52-5.237 0-9.51 4.27-9.512 9.504a9.48 9.48 0 001.588 5.276l-.999 3.648 3.497-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.099 3.204 5.077 4.492.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412z" />
                  </svg>
                  Hire Me Now
                </motion.a>
              </motion.div>

              {/* Quick Facts */}
              <motion.div variants={staggerChildren} className="glass-card p-6">
                <h4 className="font-bold mb-4 text-gradient">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Projects Completed
                    </span>
                    <span className="font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Performance Improvement
                    </span>
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
