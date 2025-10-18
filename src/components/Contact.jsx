import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { profile } from '../data/profile.js';
import emailjs from '@emailjs/browser';
import { sendEmail } from '../lib/email.js';
import { useEffect } from 'react';
import { staggerContainer, staggerChildren, formField } from '../lib/variants.js';
// Form validation schema
// Friendly validation schema (messages phrased for non-technical users)
const contactSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters.'),
  email: z.string().email('That email doesn\'t look right.'),
  subject: z.string().min(2, 'Please add a short subject (5+ characters).'),
  message: z.string().min(3, 'Please write a little more (10+ characters).'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate with Zod (will throw if invalid)
      const validatedData = contactSchema.parse(data);
      // Send via helper that builds template params (maps to template variables)
      const res = await sendEmail(validatedData);
      console.log('Email send response:', res);
      setSubmitStatus('success');
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      // Zod validation errors -> show field-level friendly messages, no global error banner
      // If EmailJS returned an error message, include it in console for debugging
      if (error?.text || error?.message) {
        console.error('EmailJS error details:', error.text || error.message || error);
      }
      if (error && error.errors) {
        error.errors.forEach(issue => {
          const field = issue.path?.[0];
            if (field) {
              setError(field, { type: 'manual', message: issue.message });
            }
        });
        setSubmitStatus(null);
      } else {
        // Technical message -> replace with friendly fallback
        setSubmitStatus('send-error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize EmailJS client with public key (optional but helps some setups)
  useEffect(() => {
    try {
      emailjs.init('aKwTwsM2jmkeSX-oj');
    } catch (err) {
      // non-fatal
      console.debug('EmailJS init skipped or failed:', err?.message || err);
    }
  }, []);

  return (
    <section id="contact" className="py-24 relative">
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
            <h2 className="section-header">Let's Work Together</h2>
            <p className="section-subtitle">
              Ready to bring your project to life? Let's discuss how I can help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerChildren}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4 sm:mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're someone with an idea 
                  that needs to be brought to life, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${profile.contact.email}`}
                  variants={formField}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 flex items-center space-x-4 group transition-all duration-300 hover:bg-glass/60"
                >
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center bg-primary/20 border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Email
                    </div>
                    <div className="text-muted-foreground">
                      {profile.contact.email}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${profile.contact.phone}`}
                  variants={formField}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 flex items-center space-x-4 group transition-all duration-300 hover:bg-glass/60"
                >
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center bg-accent/20 border-accent/30 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Phone
                    </div>
                    <div className="text-muted-foreground">
                      {profile.contact.phone}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={formField}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 flex items-center space-x-4 group transition-all duration-300 hover:bg-glass/60"
                >
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center bg-primary/20 border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-muted-foreground">
                      Connect with me
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Availability Status */}
              <motion.div
                variants={staggerChildren}
                className="glass-card p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-foreground">Available for Freelance</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new projects and opportunities. 
                  Response time: within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={staggerChildren}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4 sm:mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={formField}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Please enter your name.' })}
                    className="form-input w-full"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </motion.div>

                <motion.div variants={formField}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Please enter your email.' })}
                    className="form-input w-full"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div variants={formField}>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Please enter a subject.' })}
                    className="form-input w-full"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </motion.div>

                <motion.div variants={formField}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Please enter your message.' })}
                    className="form-input w-full resize-none"
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={formField}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`btn-primary w-full ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
        {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <p className="text-green-400 text-sm">
          ✅ Thank you! Your message was sent. I\'ll reply within 24 hours.
                    </p>
                  </motion.div>
                )}

        {submitStatus === 'send-error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <p className="text-red-400 text-sm">
          ❌ Could not send your message right now. Please try again shortly or email me directly.
                    </p>
                  </motion.div>
                )}
              </form>

              {/* TODO Note */}
              <div className="mt-8 p-4 glass-card bg-muted/5 border-muted/20">
                <p className="text-xs text-muted-foreground">
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;