import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { staggerContainer, staggerChildren, projectCard } from '../lib/variants.js';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
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
            <h2 className="section-header">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing my latest work and technical achievements
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {profile.projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={projectCard}
                whileHover="whileHover"
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-60">
                      {index === 0 ? '⚡' : '🤖'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        // className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                      >
                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg> */}
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        // className="glass-card p-3 text-primary hover:text-primary-hover transition-colors"
                      >
                        {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg> */}
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  {/* Title and Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hlIndex) => (
                        <motion.li
                          key={hlIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: hlIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05, duration: 0.2 }}
                          viewport={{ once: true }}
                          className={`skill-tag text-xs ${
                            ['React', 'Node', 'Express', 'MongoDB'].includes(tech)
                              ? 'bg-primary/10 border-primary/20 text-primary'
                              : 'bg-accent/10 border-accent/20 text-accent'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={staggerChildren}
            className="mt-16 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projects represent just a portion of my portfolio. I'm always working on new and exciting projects that push the boundaries of web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Start Your Project
                </motion.a>
                <motion.a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  View All Projects
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;