import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile } from '../data/profile.js';
import { staggerContainer, staggerChildren, projectCard } from '../lib/variants.js';
import ProjectModal from './ui/ProjectModal.jsx';
import { getTechIcon, getTechColor } from '../lib/techIcons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
              Showcasing cutting-edge web experiences and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid - Cards with Images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={projectCard}
                whileHover={{ y: -10 }}
                onClick={() => openProjectModal(project)}
                className="group cursor-pointer relative"
              >
                {/* Card Container */}
                <div className="glass-card overflow-hidden h-full flex flex-col relative">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    {project.image ? (
                      <motion.img
                        src={project.image.startsWith('/public/') ? project.image.replace('/public', '') : project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-6xl opacity-60">
                          {index === 0 ? '🦁' : index === 1 ? '🌍' : '💼'}
                        </span>
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 4).map((tech) => {
                        const Icon = getTechIcon(tech);
                        const iconColor = getTechColor(tech);
                        return (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border-glass-border/30"
                          >
                            {Icon && (
                              <Icon 
                                className="text-base" 
                                style={{ color: iconColor }}
                              />
                            )}
                            <span className="text-xs font-medium">{tech}</span>
                          </motion.div>
                        );
                      })}
                      {project.stack.length > 4 && (
                        <div className="px-3 py-1.5 rounded-lg glass-card border-glass-border/30 text-xs font-medium text-primary">
                          +{project.stack.length - 4}
                        </div>
                      )}
                    </div>

                    {/* View Details Link */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
                    >
                      <span>View Details</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                      index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                    }`}
                  />
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

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;