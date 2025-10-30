import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { profile } from '../data/profile.js';
import { getTechIcon, getTechColor } from '../lib/techIcons';

/**
 * 3D Tilt Project Card with parallax effect
 */
function ProjectCard3D({ project, onClick }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 400,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 400,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '1000px',
      }}
      className="cursor-pointer group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="glass-card overflow-hidden relative"
      >
        {/* Glow effect on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl -z-10"
        />

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {project.icon || '🚀'}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20"
            >
              ⭐ Featured
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div 
          className="p-6"
          style={{
            transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)',
          }}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(project.stack || project.technologies)?.slice(0, 3).map((tech) => {
              const Icon = getTechIcon(tech);
              const iconColor = getTechColor(tech);
              return (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 font-medium flex items-center gap-1.5"
                >
                  {Icon && <Icon style={{ color: iconColor }} />}
                  {tech}
                </span>
              );
            })}
            {(project.stack || project.technologies)?.length > 3 && (
              <span className="px-3 py-1 text-xs bg-glass/30 text-muted-foreground rounded-full">
                +{(project.stack || project.technologies).length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          {(project.stars || project.year) && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {project.year && <span>📅 {project.year}</span>}
              {project.stars && <span>⭐ {project.stars}</span>}
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * 3D Animated Project Modal with blur and depth-of-field
 */
function ProjectModal3D({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 z-50 cursor-pointer"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateX: -20,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: 20,
                y: 50,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className="glass-card-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-2xl -z-10"
              />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Project image */}
              {project.image && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>
              )}

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-black text-gradient"
                >
                  {project.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Features */}
                {project.features && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-primary">✨ Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-accent mt-1">▸</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Technologies */}
                {(project.stack || project.technologies) && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-accent">🛠️ Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {(project.stack || project.technologies).map((tech, index) => {
                        const Icon = getTechIcon(tech);
                        const iconColor = getTechColor(tech);
                        return (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            whileHover={{
                              scale: 1.1,
                              y: -5,
                              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                            }}
                            className="px-4 py-2 bg-primary/20 text-primary rounded-lg border border-primary/30 font-medium flex items-center gap-2"
                          >
                            {Icon && (
                              <Icon 
                                className="text-lg" 
                                style={{ color: iconColor }}
                              />
                            )}
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Action buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-center"
                    >
                      🚀 Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[150px] px-6 py-3 glass-card text-foreground rounded-lg font-bold text-center hover:text-primary transition-colors"
                    >
                      ⚡ View Code
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Main Project Showcase Component
 */
export default function ProjectShowcase3D({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'featured', 'web', 'mobile', 'fullstack'];

  const filteredProjects = projects?.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  }) || [];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing cutting-edge web experiences and innovative solutions
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/50'
                  : 'bg-glass/30 backdrop-blur-xl border border-glass-border/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard3D
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-muted-foreground">No projects found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal3D
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
