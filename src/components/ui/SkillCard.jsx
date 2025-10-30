import { motion } from 'framer-motion';
import { useState } from 'react';
import { getTechIcon, getTechColor } from '../../lib/techIcons';

const SkillCard = ({ skill, proficiency = 75, index = 0, color = 'primary' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getTechIcon(skill);
  const iconColor = getTechColor(skill);

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
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
          } transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            <Icon className="text-2xl" style={{ color: iconColor }} />
          </div>
        )}
        <h4 className={`font-semibold text-lg ${
          color === 'primary' ? 'text-primary' : 'text-accent'
        } group-hover:text-gradient transition-all duration-300`}>
          {skill}
        </h4>
      </div>

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
