import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile.js';
import { useGsap } from '../lib/useGsap.js';
import { pageTransition } from '../lib/variants.js';

// Components
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Index = () => {
  const { animateProgressBar } = useGsap();

  useEffect(() => {
    // Set up GSAP scroll progress bar
    animateProgressBar();

    // Update document title and meta tags
    document.title = profile.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', profile.seo.description);
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
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ajmer",
        "addressRegion": "Rajasthan",
        "addressCountry": "India"
      },
      "sameAs": [
        profile.social.linkedin,
        profile.social.github
      ],
      "knowsAbout": [
        ...profile.skills.frontend,
        ...profile.skills.stateAndForms,
        ...profile.skills.backendExposure
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      }
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, [animateProgressBar]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background"
      >
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 glass-card px-4 py-2 text-primary z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main id="main-content">
          <Hero />
          <About />
          <SkillsGrid />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;