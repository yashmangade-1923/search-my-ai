import { motion } from 'framer-motion';
import ToolCard from './ToolCard';

export default function CategorySection({ category }) {
  if (!category || category.tools.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={styles.section}
    >
      <div style={styles.header}>
        <div style={styles.icon}>{category.icon}</div>
        <h2 style={styles.name} className="heading-font">{category.name}</h2>
        <div style={styles.count}>{category.tools.length} tools</div>
      </div>
      
      <div style={styles.grid}>
        {category.tools.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} catId={category.id} />
        ))}
      </div>
    </motion.div>
  );
}

const styles = {
  section: {
    marginBottom: '80px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '32px',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  icon: {
    fontSize: '28px',
    width: '56px', height: '56px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.02)',
    backdropFilter: 'blur(10px)',
  },
  name: {
    fontSize: '26px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    background: 'linear-gradient(to right, #fff, var(--text-muted))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  count: {
    fontSize: '12px',
    color: 'var(--accent)',
    background: 'rgba(232,255,71,0.1)',
    border: '1px solid rgba(232,255,71,0.2)',
    padding: '6px 14px',
    borderRadius: '30px',
    marginLeft: 'auto',
    fontWeight: 500,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '24px',
  }
};
