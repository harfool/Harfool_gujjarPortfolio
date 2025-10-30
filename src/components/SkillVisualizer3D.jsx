import { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Environment, OrbitControls, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { profile } from '../data/profile.js';
import { getTechIcon, getTechColor } from '../lib/techIcons';

/**
 * Individual 3D Skill Cube with rotation and glow + Tech Icon
 */
function SkillCube({ skill, position, color, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const Icon = getTechIcon(skill.name);
  const iconColor = getTechColor(skill.name);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Continuous rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + index * 0.5;
      meshRef.current.rotation.y = time * 0.3 + index * 0.3;
      
      // Scale on hover
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <Float
      speed={2 + index * 0.5}
      rotationIntensity={0.5}
      floatIntensity={1}
      position={position}
    >
      <group>
        {/* Main Cube */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
            transparent
            opacity={0.85}
          />
          {/* Glow effect */}
          {hovered && (
            <pointLight
              color={color}
              intensity={2}
              distance={3}
            />
          )}
        </mesh>
        
        {/* Icon Label using HTML */}
        <Html
          position={[0, 0, 0]}
          center
          distanceFactor={2}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transform: hovered ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            {Icon && (
              <Icon
                style={{
                  fontSize: '64px',
                  color: iconColor,
                  filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.8))',
                }}
              />
            )}
            <span
              style={{
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 'bold',
                textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 5px rgba(0,0,0,0.8)',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                maxWidth: '120px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {skill.name.length > 15 ? skill.name.slice(0, 15) + '...' : skill.name}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

/**
 * Rotating skill ring with text labels
 */
function SkillRing({ skills, radius = 4 }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      return [
        Math.cos(angle) * radius,
        Math.sin(index * 0.5) * 0.5,
        Math.sin(angle) * radius,
      ];
    });
  }, [skills, radius]);

  const colors = ['#8B5CF6', '#60A5FA', '#EC4899', '#F59E0B', '#10B981'];

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillCube
          key={skill.name}
          skill={skill}
          position={skillPositions[index]}
          color={colors[index % colors.length]}
          index={index}
        />
      ))}
    </group>
  );
}

/**
 * 3D Skills Scene
 */
function Skills3DScene({ skills }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ height: '500px' }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#60A5FA" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#EC4899"
        />

        {/* Skills Ring */}
        <SkillRing skills={skills} />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Subtle camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}

/**
 * Main Skills Visualizer Component
 * Combines 3D scene with skill cards and timeline
 */
export default function SkillVisualizer3D({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Transform skills object to array
  const allSkills = useMemo(() => {
    if (!skills) return [];
    return Object.entries(skills).flatMap(([category, skillList]) =>
      skillList.map(name => ({
        name,
        category,
        level: Math.floor(Math.random() * 30) + 70, // 70-100% proficiency
      }))
    );
  }, [skills]);

  const categories = useMemo(() => {
    if (!skills) return [];
    return ['all', ...Object.keys(skills)];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'all') return allSkills.slice(0, 12);
    return allSkills
      .filter(skill => skill.category === selectedCategory)
      .slice(0, 12);
  }, [allSkills, selectedCategory]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering the tools that power modern web experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-glass/30 backdrop-blur-xl border border-glass-border/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <Suspense fallback={
            <div className="h-[500px] flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
              />
            </div>
          }>
            <Skills3DScene skills={filteredSkills} />
          </Suspense>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => {
              const Icon = getTechIcon(skill.name);
              const iconColor = getTechColor(skill.name);
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 group cursor-pointer"
                >
                  {/* Icon & Skill name */}
                  <div className="flex items-center gap-2">
                    {Icon && (
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <Icon 
                          className="text-2xl" 
                          style={{ color: iconColor }}
                        />
                      </motion.div>
                    )}
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                      {skill.name}
                    </h3>
                  </div>
              </motion.div>
            );
            })}
          </AnimatePresence>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Experience Timeline
            </span>
          </h3>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { years: '10+', label: 'Months Experience', icon: '📅' },
              { years: '20+', label: 'Projects Completed', icon: '🚀' },
              { years: '15+', label: 'Technologies', icon: '⚡' },
              { years: '100%', label: 'Client Satisfaction', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-primary mb-1">
                  {stat.years}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
