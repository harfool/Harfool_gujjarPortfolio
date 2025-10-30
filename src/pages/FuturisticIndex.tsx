import { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';

// Lazy load components for performance
const FloatingNavbar = lazy(() => import('../components/FloatingNavbar.jsx'));
const FuturisticHero = lazy(() => import('../components/FuturisticHero.jsx'));
const SkillVisualizer3D = lazy(() => import('../components/SkillVisualizer3D.jsx'));
const ProjectShowcase3D = lazy(() => import('../components/ProjectShowcase3D.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx'));

// Keep existing components for sections that don't have 3D versions yet
import About from '../components/About.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';

/**
 * Loading fallback component
 */
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent"
      />
    </div>
  );
}

/**
 * Main Portfolio Page - Futuristic 3D Edition
 */
export default function FuturisticIndex() {
  useEffect(() => {
    // Update document title and meta tags
    document.title = profile.seo?.title || `${profile.name} | Frontend Developer`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', profile.seo?.description || profile.summary);
    }

    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profile.name,
      "jobTitle": profile.title,
      "description": profile.summary,
      "email": profile.contact.email,
      "telephone": profile.contact.phone,
      "url": window.location.origin,
      "sameAs": [
        profile.contact.linkedin,
      ],
    };

    let scriptTag = document.getElementById('structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Floating Navbar */}
        <FloatingNavbar />

        {/* Main Content */}
        <main>
          {/* Hero Section with 3D Background */}
          <FuturisticHero />

          {/* About Section */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.div>
          </Suspense>

          {/* 3D Skills Visualizer */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SkillVisualizer3D skills={profile.skills} />
            </motion.div>
          </Suspense>

          {/* Experience Section */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Experience />
            </motion.div>
          </Suspense>

          {/* 3D Projects Showcase */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProjectShowcase3D projects={profile.projects} />
            </motion.div>
          </Suspense>

          {/* Education Section */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Education />
            </motion.div>
          </Suspense>

          {/* Contact Section */}
          <Suspense fallback={<div className="h-screen" />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Contact />
            </motion.div>
          </Suspense>

          {/* Footer */}
          <Suspense fallback={<div className="h-32" />}>
            <Footer />
          </Suspense>
        </main>

        {/* Animated Background Gradient Mesh */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              background: [
                'radial-gradient(ellipse 80% 80% at 20% 30%, rgba(139, 92, 246, 0.15), transparent)',
                'radial-gradient(ellipse 80% 80% at 80% 70%, rgba(96, 165, 250, 0.15), transparent)',
                'radial-gradient(ellipse 80% 80% at 20% 30%, rgba(139, 92, 246, 0.15), transparent)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          />
          <motion.div
            animate={{
              background: [
                'radial-gradient(ellipse 80% 80% at 80% 20%, rgba(236, 72, 153, 0.1), transparent)',
                'radial-gradient(ellipse 80% 80% at 20% 80%, rgba(245, 158, 11, 0.1), transparent)',
                'radial-gradient(ellipse 80% 80% at 80% 20%, rgba(236, 72, 153, 0.1), transparent)',
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Floating Particles (CSS-based for performance) */}
        <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
