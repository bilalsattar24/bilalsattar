'use client';

import { motion } from 'framer-motion';
import { FaMusic, FaUserCheck, FaSearch, FaLock } from 'react-icons/fa';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #4a148c, #311b92, #1a237e)',
    color: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  heroSection: {
    textAlign: 'center' as const,
    paddingTop: '5rem',
    paddingBottom: '8rem',
  },
  gradientText: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(to right, #e040fb, #ff4081)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#e0e0e0',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#9c27b0',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    border: '2px solid #9c27b0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '5rem 1rem',
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '1rem',
    textAlign: 'center' as const,
  },
  icon: {
    fontSize: '2.5rem',
    color: '#bb86fc',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  featureText: {
    color: '#e0e0e0',
  },
  ctaSection: {
    textAlign: 'center' as const,
    padding: '5rem 1rem',
  },
  ctaContainer: {
    background: 'linear-gradient(to right, rgba(156, 39, 176, 0.2), rgba(233, 30, 99, 0.2))',
    backdropFilter: 'blur(10px)',
    padding: '3rem',
    borderRadius: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  ctaText: {
    fontSize: '1.25rem',
    color: '#e0e0e0',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#4a148c',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default function Music() {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={{...styles.container, ...styles.heroSection}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.gradientText}>
            Connect Music with Content
          </h1>
          <p style={styles.subtitle}>
            The premier marketplace connecting underground musicians with content creators.
            Monetize your music through authentic social media exposure.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.primaryButton}>
              Join as Musician
            </button>
            <button style={styles.secondaryButton}>
              I'm a Creator
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section style={styles.container}>
        <div style={styles.featuresGrid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={styles.featureCard}
          >
            <FaUserCheck style={styles.icon} />
            <h3 style={styles.featureTitle}>Verified Profiles</h3>
            <p style={styles.featureText}>Connect with authentic creators through social media verification</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.featureCard}
          >
            <FaSearch style={styles.icon} />
            <h3 style={styles.featureTitle}>Smart Discovery</h3>
            <p style={styles.featureText}>Find the perfect match with our advanced search and filtering</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={styles.featureCard}
          >
            <FaLock style={styles.icon} />
            <h3 style={styles.featureTitle}>Secure Payments</h3>
            <p style={styles.featureText}>Protected transactions with escrow system and automated payouts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={styles.featureCard}
          >
            <FaMusic style={styles.icon} />
            <h3 style={styles.featureTitle}>Music Licensing</h3>
            <p style={styles.featureText}>Clear and simple licensing terms for content usage</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{...styles.container, ...styles.ctaSection}}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={styles.ctaContainer}
        >
          <h2 style={styles.ctaTitle}>
            Ready to Transform Your Music Career?
          </h2>
          <p style={styles.ctaText}>
            Join thousands of musicians and content creators already collaborating on our platform
          </p>
          <button style={styles.ctaButton}>
            Get Started Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}
