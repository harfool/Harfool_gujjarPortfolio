import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Animated 3D gradient sphere with distortion
 * Creates the central focal point with morphing effects
 */
function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Smooth rotation with time-based animation
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

/**
 * Glowing light orbs that float around the scene
 */
function LightOrbs() {
  const orbs = useMemo(() => [
    { position: [-4, 2, -3], color: '#8B5CF6', intensity: 2 },
    { position: [4, -2, -2], color: '#60A5FA', intensity: 2 },
    { position: [0, 3, -4], color: '#EC4899', intensity: 1.5 },
  ], []);

  return (
    <>
      {orbs.map((orb, index) => (
        <Float key={index} speed={1.5 + index * 0.5} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={orb.position}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={2}
              toneMapped={false}
            />
            <pointLight color={orb.color} intensity={orb.intensity} distance={5} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/**
 * Interactive gradient wave geometry
 * Responds to mouse movement and time
 */
function GradientWaves() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate vertex positions for wave effect
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x * 2 + time) * 0.3 + Math.cos(y * 2 + time * 0.5) * 0.3;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
    }

    // Animate material colors
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
  });

  const shaderMaterial = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      colorA: { value: new THREE.Color('#8B5CF6') },
      colorB: { value: new THREE.Color('#60A5FA') },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        float mixValue = sin(vPosition.x * 0.5 + time * 0.5) * 0.5 + 0.5;
        vec3 color = mix(colorA, colorB, mixValue);
        float alpha = 0.3;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
  }), []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, -5]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <shaderMaterial ref={materialRef} {...shaderMaterial} />
    </mesh>
  );
}

/**
 * Floating particle system for ambient effect
 */
function FloatingParticles() {
  return (
    <>
      <Sparkles
        count={100}
        scale={15}
        size={2}
        speed={0.3}
        color="#8B5CF6"
      />
      <Sparkles
        count={80}
        scale={12}
        size={1.5}
        speed={0.4}
        color="#60A5FA"
      />
    </>
  );
}

/**
 * Main Hero 3D Scene Component
 * Renders the complete 3D background with all elements
 */
export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#60A5FA" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            color="#EC4899"
          />

          {/* 3D Elements */}
          <AnimatedSphere />
          <LightOrbs />
          <GradientWaves />
          <FloatingParticles />
          
          {/* Background */}
          <Stars 
            radius={100} 
            depth={50} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.5}
          />
          
          {/* Environment for realistic lighting */}
          <Environment preset="night" />

          {/* Camera Controls - subtle, no zoom */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
