import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { getTechIcon, getTechColor } from '../../lib/techIcons';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card-elevated max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-10 glass-card w-10 h-10 flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 group"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Project Image with Overlay */}
              {project.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="relative h-72 sm:h-96 overflow-hidden"
                >
                  <img
                    src={project.image.startsWith('/public/') ? project.image.replace('/public', '') : project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                </motion.div>
              )}

              {/* Content */}
              <div className="p-6 sm:p-10">
                {/* Title & Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl sm:text-5xl font-black mb-3">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      {project.name}
                    </span>
                  </h2>
                  {project.subtitle && (
                    <p className="text-accent font-semibold text-lg sm:text-xl">
                      {project.subtitle}
                    </p>
                  )}
                </motion.div>

                {/* Description */}
                {project.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-8 glass-card p-6 border-l-4 border-primary"
                  >
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Key Features */}
                  {project.highlights && project.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-2xl">✨</span>
                        <span>Key Features</span>
                      </h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.08, duration: 0.3 }}
                            className="flex items-start gap-3 group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 180 }}
                              className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5"
                            >
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  {project.stack && project.stack.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-2xl">�</span>
                        <span>Tech Stack</span>
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.stack.map((tech, index) => {
                          const Icon = getTechIcon(tech);
                          const iconColor = getTechColor(tech);
                          return (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.1, y: -5 }}
                              className="glass-card px-4 py-2.5 flex items-center gap-2 group hover:border-primary/40 transition-all duration-300"
                            >
                              {Icon && (
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <Icon 
                                    className="text-xl" 
                                    style={{ color: iconColor }}
                                  />
                                </motion.div>
                              )}
                              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                {tech}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-glass-border/30"
                >
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary flex items-center justify-center gap-3 py-4 text-base font-bold relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="relative z-10">View Live Project</span>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-secondary flex items-center justify-center gap-3 py-4 text-base font-bold"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
