import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { staggerContainer, staggerChildren, fadeInLeft } from '../lib/variants.js';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <h2 className="section-header">Work Experience</h2>
            <p className="section-subtitle">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-60"></div>

            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative mb-16 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 top-8 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-br from-primary to-accent rounded-full border-2 sm:border-4 border-background shadow-lg"></div>

                {/* Experience Card */}
                <div className="ml-12 sm:ml-20">
                  <motion.div
                    variants={staggerChildren}
                    className="glass-card-elevated p-4 sm:p-6 md:p-8 group hover:bg-glass/60 transition-all duration-500"
                  >
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">
                          {exp.role}
                        </h3>
                        <span className="skill-tag bg-primary/10 border-primary/20 text-primary text-xs sm:text-sm self-start sm:self-center">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 3h6M9 7h6m0 4h-3m-3 0h3" />
                          </svg>
                          <span className="font-semibold text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="mt-6 pt-6 border-t border-glass-border/20"
                    >
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'Figma-to-Code', 'WCAG', 'Performance Optimization', 'Agile'].map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + skillIndex * 0.05, duration: 0.2 }}
                            viewport={{ once: true }}
                            className="skill-tag bg-accent/10 border-accent/20 text-accent text-xs"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Summary */}
          <motion.div
            variants={staggerChildren}
            className="mt-16 glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Experience Summary
            </h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Months Experience</div>
              </motion.div>
              
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="text-muted-foreground">Performance Boost</div>
              </motion.div>
              
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-muted-foreground">Faster UI Cycles</div>
              </motion.div>
            </div>

            <motion.div
              variants={staggerChildren}
              className="mt-8"
            >
              <p className="text-muted-foreground mb-6">
                Ready to bring this experience to your next project?
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;