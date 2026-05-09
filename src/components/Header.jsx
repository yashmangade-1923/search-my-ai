import { motion } from 'framer-motion';

export default function Header({ totalTools, totalCategories, totalFree }) {
  return (
    <header style={styles.header}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.labelWrapper}
      >
        <div style={styles.label}>Curated Intelligence</div>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={styles.h1}
      >
        Master the Future<br/>with our <span style={styles.span}>AI Tools</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={styles.sub}
      >
        A comprehensive reference guide spanning every category of artificial intelligence — from writing to robotics.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={styles.statsContainer}
      >
        <div style={styles.statItem}>
          <div style={styles.statIcon}>⚡</div>
          <span style={styles.statText}>Active Tools</span>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.statItem}>
          <div style={styles.statIcon}>🗂️</div>
          <span style={styles.statText}>Categories</span>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.statItem}>
          <div style={styles.statIcon}>💎</div>
          <span style={styles.statText}>Most Free to Use</span>
        </div>
      </motion.div>
    </header>
  );
}

const styles = {
  header: {
    padding: '80px 20px 60px',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  labelWrapper: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '11px',
    letterSpacing: '4px',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    background: 'rgba(232, 255, 71, 0.1)',
    padding: '6px 16px',
    borderRadius: '30px',
    border: '1px solid rgba(232, 255, 71, 0.2)',
    display: 'inline-block',
    fontWeight: 600
  },
  h1: {
    fontSize: 'clamp(42px, 7vw, 84px)',
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: '-2px',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #fff, #8b8ba7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "'Syne', sans-serif"
  },
  span: {
    background: 'linear-gradient(135deg, var(--accent), #a3e635)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  sub: {
    fontSize: '18px',
    color: 'var(--text-muted)',
    maxWidth: '600px',
    marginBottom: '40px',
    lineHeight: 1.6,
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    background: 'linear-gradient(145deg, rgba(30, 30, 45, 0.4), rgba(10, 10, 15, 0.8))',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    padding: '20px 40px',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  statIcon: {
    fontSize: '20px',
    background: 'rgba(255, 255, 255, 0.04)',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    boxShadow: 'inset 0 4px 12px rgba(255, 255, 255, 0.02)',
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
  },
  statText: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '15px',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  statNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '26px',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '10px',
    letterSpacing: '1.5px',
    color: 'var(--muted)',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  divider: {
    width: '1px',
    height: '40px',
    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)'
  }
};
