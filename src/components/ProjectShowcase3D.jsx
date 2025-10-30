import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { profile } from '../data/profile.js';
import { getTechIcon, getTechColor } from '../lib/techIcons';

/**
 * Cinematic Project Card with 3D Tilt & Glassmorphism
 */
function ProjectCard3D({ project, onClick, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt effect with smooth spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 20,
  });

  // Parallax image movement
  const imageX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const imageY = useTransform(y, [-0.5, 0.5], [-20, 20]);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '2000px',
      }}
      className="cursor-pointer group h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ 
          scale: 1.03,
          z: 50,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300,
          damping: 20,
        }}
        className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        {/* Project Preview Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            style={{
              x: imageX,
              y: imageY,
            }}
            className="w-full h-full"
          >
            {project.image ? (
              <motion.img
                src={project.image.startsWith('/public') ? project.image.replace('/public', '') : project.image}
                alt={project.name || project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <span className="text-7xl opacity-30">🚀</span>
              </div>
            )}
          </motion.div>

          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          {/* "View Details" overlay on hover */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{
              y: isHovered ? '0%' : '100%',
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-purple-600/50 to-transparent backdrop-blur-md flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: isHovered ? 1 : 0.8 }}
                transition={{ delay: 0.1 }}
                className="text-white font-bold text-xl mb-2"
              >
                View Project Details
              </motion.div>
              <motion.div
                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/80 text-sm flex items-center justify-center gap-2"
              >
                Click to explore <span>→</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Project Name - Bold & Large */}
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: isHovered ? '200% center' : '0% center',
            }}
          >
            {project.name || project.title}
          </motion.h3>

          {/* Subtitle / Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.subtitle || project.description}
          </p>

          {/* Tech Stack Badges - Stylized with gradients */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(project.stack || project.technologies || []).slice(0, 5).map((tech, i) => {
              const Icon = getTechIcon(tech);
              const iconColor = getTechColor(tech);
              return (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
                  }}
                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white/90 rounded-lg border border-purple-400/30 font-semibold flex items-center gap-1.5 backdrop-blur-sm"
                >
                  {Icon && <Icon className="text-sm" style={{ color: iconColor }} />}
                  {tech}
                </motion.span>
              );
            })}
            {(project.stack || project.technologies || []).length > 5 && (
              <span className="px-3 py-1.5 text-xs bg-blue-500/10 text-blue-400 rounded-lg border border-blue-400/30 font-semibold">
                +{(project.stack || project.technologies).length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons - Live Demo & GitHub */}
          <div className="flex gap-3 pt-3">
            {(project.liveLink || project.link) && (
              <motion.a
                href={project.liveLink || project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-sm text-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            )}
            {(project.githubUrl || project.github) && (
              <motion.a
                href={project.githubUrl || project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold text-sm text-center hover:bg-white/10 hover:border-purple-400/50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Cinematic Project Modal - Mini Case Study
 */
function ProjectModal3D({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-50 cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 24,
                mass: 0.8,
              }}
              className="relative w-[50vw] h-[50vh] bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-slate-700/50 pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated gradient border */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl opacity-40 blur-lg -z-10"
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl pointer-events-none" />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-blue-400 hover:border-blue-400/50 hover:bg-white/10 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Content - Scrollable with custom scrollbar */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6" style={{scrollbarWidth: 'thin', scrollbarColor: '#8b5cf6 transparent'}}>
                {/* Project Name - Title */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <h2 className="text-2xl md:text-3xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
                      {project.name || project.title}
                    </span>
                  </h2>
                  {project.subtitle && (
                    <p className="text-base text-gray-400 leading-relaxed">
                      {project.subtitle}
                    </p>
                  )}
                </motion.div>

                {/* Project Image */}
                {project.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative h-48 overflow-hidden rounded-xl"
                  >
                    <img
                      src={project.image.startsWith('/public') ? project.image.replace('/public', '') : project.image}
                      alt={project.name || project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </motion.div>
                )}

                {/* Full Description */}
                {project.description && project.description !== project.subtitle && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                )}

                {/* Key Highlights - Compact */}
                {(project.highlights || project.features) && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <h3 className="text-lg font-bold text-white">
                        Key Highlights
                      </h3>
                    </div>
                    <div className="grid gap-2">
                      {(project.highlights || project.features || []).slice(0, 3).map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.08 }}
                          className="flex items-start gap-3 p-3 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-lg border border-white/10"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed flex-1">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tech Stack Tags - Compact */}
                {(project.stack || project.technologies) && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-blue-400 rounded-full" />
                      <h3 className="text-lg font-bold text-white">
                        Technologies
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(project.stack || project.technologies).map((tech, index) => {
                        const Icon = getTechIcon(tech);
                        const iconColor = getTechColor(tech);
                        return (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              delay: 0.7 + index * 0.05,
                              type: 'spring',
                              stiffness: 200,
                            }}
                            className="px-3 py-1.5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg text-white font-semibold text-xs border border-white/20 flex items-center gap-1.5"
                          >
                            {Icon && (
                              <Icon 
                                className="text-sm" 
                                style={{ color: iconColor }}
                              />
                            )}
                            <span>{tech}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons - Compact */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3 pt-4 border-t border-white/10"
                >
                  {(project.liveLink || project.link) && (
                    <motion.a
                      href={project.liveLink || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <motion.a
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-5 py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-sm hover:border-purple-400/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
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
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950 -z-10" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-[140px] -z-10"
      />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple-500/15 to-blue-500/15 backdrop-blur-md border border-purple-400/30 rounded-full text-white font-bold text-sm shadow-lg shadow-purple-500/10"
          >
            💼 Portfolio Showcase
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting premium web experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Filter Tabs - Cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.08, type: 'spring', stiffness: 200 }}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 backdrop-blur-md border border-white/20 text-gray-400 hover:text-white hover:border-purple-400/50 hover:bg-white/10'
              }`}
            >
              {/* Active glow effect */}
              {filter === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 blur-xl opacity-50"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard3D
              key={project.name || project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-2xl text-muted-foreground font-semibold">No projects found</p>
            <p className="text-muted-foreground mt-2">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal3D
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}