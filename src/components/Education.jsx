import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { staggerContainer, staggerChildren, fadeInUp } from '../lib/variants.js';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
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
            <h2 className="section-header">Education & Certifications</h2>
            <p className="section-subtitle">
              My academic journey and professional certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">
                🎓 Education
              </h3>
              
              {profile.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={staggerChildren}
                  className="glass-card p-6 group hover:bg-glass/60 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center bg-primary/20 border-primary/30 flex-shrink-0">
                      <span className="text-xl">🏛️</span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gradient mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <span className="text-muted-foreground text-sm">
                          {edu.period}
                        </span>
                        <span className="skill-tag bg-accent/10 border-accent/20 text-accent text-xs">
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Ajmer, Rajasthan
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">
                📜 Certifications
              </h3>
              
              {profile.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={staggerChildren}
                  className="glass-card p-6 group hover:bg-glass/60 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center bg-accent/20 border-accent/30 flex-shrink-0">
                      <span className="text-xl">🏆</span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gradient mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-foreground font-medium mb-2">
                        {cert.issuer}
                      </p>
                      <span className="skill-tag bg-primary/10 border-primary/20 text-primary text-xs">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Awards Section */}
          <motion.div
            variants={staggerChildren}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">
              🏅 Awards & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {profile.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card-elevated p-6 text-center group hover:bg-glass/60 transition-all duration-500"
                >
                  <div className="w-16 h-16 mx-auto mb-4 glass-card rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                    <span className="text-2xl">🌟</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gradient mb-2">
                    {award.name}
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    {award.description}
                  </p>
                  <span className="skill-tag bg-primary/10 border-primary/20 text-primary text-sm">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Excellence Summary */}
          <motion.div
            variants={staggerChildren}
            className="mt-16 glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Academic Excellence
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-muted-foreground">Awards Received</div>
              </motion.div>
              
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-accent">1</div>
                <div className="text-muted-foreground">Certification</div>
              </motion.div>
              
              <motion.div
                variants={staggerChildren}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-muted-foreground">Graduation Year</div>
              </motion.div>
            </div>

            <motion.div
              variants={staggerChildren}
              className="max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground mb-6">
                My academic journey reflects a commitment to excellence and continuous learning. 
                I combine theoretical knowledge with practical experience to deliver exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="skill-tag bg-primary/10 border-primary/20 text-primary">
                  Academic Excellence
                </span>
                <span className="skill-tag bg-accent/10 border-accent/20 text-accent">
                  Continuous Learning
                </span>
                <span className="skill-tag bg-primary/10 border-primary/20 text-primary">
                  Professional Growth
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;