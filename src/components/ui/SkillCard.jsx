import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillCard = ({ skill, proficiency = 75, icon, index = 0, color = 'primary' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`glass-card p-6 group cursor-pointer transform-gpu ${
        color === 'primary' 
          ? 'hover:bg-primary/10 hover:border-primary/30' 
          : 'hover:bg-accent/10 hover:border-accent/30'
      } transition-all duration-300`}
      style={{ perspective: '1000px' }}
    >
      {/* Icon & Name */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
            } transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              <span className="text-xl">{icon}</span>
            </div>
          )}
          <h4 className={`font-semibold ${
            color === 'primary' ? 'text-primary' : 'text-accent'
          } group-hover:text-gradient transition-all duration-300`}>
            {skill}
          </h4>
        </div>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            color === 'primary' 
              ? 'bg-primary/20 text-primary' 
              : 'bg-accent/20 text-accent'
          }`}
        >
          {proficiency}%
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-glass-border/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ delay: index * 0.05 + 0.5, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full rounded-full ${
            color === 'primary' 
              ? 'bg-gradient-to-r from-primary to-primary-hover' 
              : 'bg-gradient-to-r from-accent to-accent-hover'
          }`}
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/3 bg-white/30 blur-sm"
          />
        </motion.div>
      </div>

      {/* Proficiency Level Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.7, duration: 0.3 }}
        viewport={{ once: true }}
        className="text-xs text-muted-foreground mt-2"
      >
        {proficiency >= 90 ? 'Expert' : proficiency >= 70 ? 'Advanced' : proficiency >= 50 ? 'Intermediate' : 'Learning'}
      </motion.p>

      {/* Hover Glow Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 -z-10 blur-xl ${
            color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
          } rounded-2xl`}
        />
      )}
    </motion.div>
  );
};

export default SkillCard;
