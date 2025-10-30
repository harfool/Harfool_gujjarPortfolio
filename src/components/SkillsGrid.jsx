import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { staggerContainer, staggerChildren, skillTag } from '../lib/variants.js';
import SkillCard from './ui/SkillCard.jsx';
import { FaCode, FaReact, FaServer, FaTools } from 'react-icons/fa';
import { getTechIcon, getTechColor } from '../lib/techIcons';

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: profile.skills.frontend,
      Icon: FaCode,
      color: "primary"
    },
    {
      title: "State & Form Management",
      skills: profile.skills.stateAndForms,
      Icon: FaReact,
      color: "accent"
    },
    {
      title: "Backend Exposure",
      skills: profile.skills.backendExposure,
      Icon: FaServer,
      color: "primary"
    },
    {
      title: "Tools & APIs",
      skills: profile.skills.toolsAndApis,
      Icon: FaTools,
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
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
            <h2 className="section-header">Skills & Technologies</h2>
            <p className="section-subtitle">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Featured Skills with Progress Bars */}
          <motion.div
            variants={staggerChildren}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Core Expertise</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { skill: 'React.js', proficiency: 90, color: 'primary' },
                { skill: 'JavaScript (ES6+)', proficiency: 90, color: 'accent' },
                { skill: 'Tailwind CSS', proficiency: 88, color: 'primary' },
                { skill: 'Node.js', proficiency: 80, color: 'accent' },
                { skill: 'Redux Toolkit', proficiency: 85, color: 'primary' },
                { skill: 'MongoDB', proficiency: 78, color: 'accent' },
              ].map((skillData, index) => (
                <SkillCard 
                  key={skillData.skill}
                  {...skillData}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={staggerChildren}
                className="glass-card p-6 sm:p-8 group hover:bg-glass/60 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 text-primary/80">
                    <category.Icon />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gradient mb-1">
                      {category.title}
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = getTechIcon(skill);
                    const iconColor = getTechColor(skill);
                    return (
                      <motion.span
                        key={skill}
                        variants={skillTag}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="whileHover"
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                          duration: 0.3 
                        }}
                        className={`skill-tag flex items-center gap-1.5 ${
                          category.color === 'primary' 
                            ? 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20' 
                            : 'bg-accent/10 border-accent/20 text-accent hover:bg-accent/20'
                        }`}
                      >
                        {Icon && (
                          <Icon 
                            className="text-sm flex-shrink-0" 
                            style={{ color: iconColor }}
                          />
                        )}
                        <span>{skill}</span>
                      </motion.span>
                    );
                  })}
                </div>

                {/* Skill Count */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-4 border-t border-glass-border/20"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="font-semibold text-gradient">
                      {category.skills.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <motion.div
            variants={staggerChildren}
            className="mt-16 glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">
              Proficiency Overview
            </h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Expert Level */}
              <motion.div
                variants={staggerChildren}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 glass-card rounded-full flex items-center justify-center bg-primary/20 border-primary/30">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-primary mb-2">Expert</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced proficiency with deep understanding
                </p>
                <div className="space-y-2">
                  {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS'].map(skill => {
                    const Icon = getTechIcon(skill);
                    const iconColor = getTechColor(skill);
                    return (
                      <span key={skill} className="skill-tag bg-primary/10 border-primary/20 text-primary text-xs flex items-center justify-center gap-1.5">
                        {Icon && <Icon style={{ color: iconColor }} />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>

              {/* Proficient Level */}
              <motion.div
                variants={staggerChildren}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 glass-card rounded-full flex items-center justify-center bg-accent/20 border-accent/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-accent mb-2">Proficient</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Strong working knowledge and experience
                </p>
                <div className="space-y-2">
                  {['Redux Toolkit', 'Node.js', 'MongoDB'].map(skill => {
                    const Icon = getTechIcon(skill);
                    const iconColor = getTechColor(skill);
                    return (
                      <span key={skill} className="skill-tag bg-accent/10 border-accent/20 text-accent text-xs flex items-center justify-center gap-1.5">
                        {Icon && <Icon style={{ color: iconColor }} />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>

              {/* Learning Level */}
              <motion.div
                variants={staggerChildren}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 glass-card rounded-full flex items-center justify-center bg-muted/20 border-muted/30">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-muted-foreground mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Actively learning and gaining experience
                </p>
                <div className="space-y-2">
                  {['Docker', 'PostgreSQL', 'Prisma ORM'].map(skill => {
                    const Icon = getTechIcon(skill);
                    const iconColor = getTechColor(skill);
                    return (
                      <span key={skill} className="skill-tag bg-muted/10 border-muted/20 text-muted-foreground text-xs flex items-center justify-center gap-1.5">
                        {Icon && <Icon style={{ color: iconColor }} />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

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
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how these skills can help bring your project to life
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;