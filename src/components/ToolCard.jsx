import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

export default function ToolCard({ tool, catId }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const cssVar = `var(--cat-${catId}, var(--accent))`;
  const cssVarRgb = `var(--cat-${catId}-rgb, 255,255,255)`;

  const toolUrl = `https://duckduckgo.com/?q=${encodeURIComponent('!ducky ' + tool.name + ' AI tool official site')}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.card,
        borderColor: isHovered ? cssVar : 'var(--border)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
        boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(${cssVarRgb}, 0.1)` : '0 4px 30px rgba(0, 0, 0, 0.2)',
      }}
      className="tool-card"
    >
      <div 
        style={{
          ...styles.topGlow, 
          background: `linear-gradient(90deg, transparent, ${cssVar}, transparent)`,
          opacity: isHovered ? 1 : 0.3,
          height: isHovered ? '4px' : '3px'
        }} 
      />
      <div 
        style={{
          ...styles.ambientGlow, 
          background: cssVar,
          opacity: isHovered ? 0.15 : 0
        }} 
      />

      <div style={styles.header}>
        <div style={styles.name}>{tool.name}</div>
        <div style={{...styles.rank, background: cssVar }}>
          {tool.rank}
        </div>
      </div>
      <div style={styles.tagline}>{tool.tagline}</div>
      
      {/* This invisible spacer pushes the tags down so footers align across the grid */}
      <div style={{ marginTop: 'auto' }}></div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '20px', paddingBottom: '16px' }}>
              <div style={styles.infoTitle}>
                <Info size={14} style={{ marginRight: '6px' }} /> Specifications
              </div>
              <div style={styles.specs}>
                {tool.specs.map((spec, i) => (
                  <div key={i} style={{...styles.specRow, borderBottom: i === tool.specs.length - 1 ? 'none' : '1px dashed rgba(255,255,255,0.05)'}}>
                    <span style={styles.specKey}>{spec.key}</span>
                    <span style={styles.specVal}>{spec.val}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={toolUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{...styles.openBtnFull, color: cssVar, borderColor: cssVar}}
                onMouseEnter={(e) => {
                   e.currentTarget.style.background = cssVar;
                   e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                   e.currentTarget.style.background = 'transparent';
                   e.currentTarget.style.color = cssVar;
                }}
              >
                Open Site <ExternalLink size={16} style={{marginLeft: '8px'}} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.tags}>
        {tool.tags.map((tag, i) => {
          let tagStyle = styles.tagDefault;
          if (tag.toLowerCase().includes('paid') || tag.toLowerCase().includes('add-on')) tagStyle = styles.pricePaid;
          else if (tag.toLowerCase().includes('freemium')) tagStyle = styles.priceFreemium;
          else if (tag.toLowerCase().includes('free')) tagStyle = styles.priceFree;
          
          return (
            <span key={i} style={{...styles.tag, ...tagStyle}}>
              {tag}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

const styles = {
  card: {
    background: 'var(--card)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    padding: '28px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    height: '100%',
    transition: 'all 0.3s ease',
  },
  topGlow: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    transition: 'all 0.4s ease',
  },
  ambientGlow: {
    position: 'absolute',
    top: '50%', left: '50%',
    width: '150px', height: '150px',
    filter: 'blur(80px)',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    transition: 'opacity 0.5s ease',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  name: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '20px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    color: 'var(--text)',
  },
  rank: {
    fontSize: '11px',
    color: '#000',
    padding: '4px 10px',
    borderRadius: '6px',
    fontWeight: 700,
    boxShadow: '0 0 10px rgba(255,255,255, 0.2)'
  },
  tagline: {
    fontStyle: 'italic',
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    fontSize: '11px',
    padding: '6px 12px',
    borderRadius: '8px',
    letterSpacing: '0.5px',
    fontWeight: 500,
    backdropFilter: 'blur(4px)',
  },
  priceFree: { background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' },
  priceFreemium: { background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' },
  pricePaid: { background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.3)' },
  tagDefault: { background: 'var(--tag-bg)', color: '#cdd6f4', border: '1px solid var(--border)' },
  infoTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 600,
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid var(--border)'
  },
  specs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '12px',
    marginBottom: '20px',
  },
  specRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'baseline',
    paddingBottom: '8px',
  },
  specKey: {
    color: 'var(--text-muted)',
    minWidth: '75px',
    flexShrink: 0,
    letterSpacing: '0.5px',
  },
  specVal: {
    color: 'var(--text)',
    flex: 1,
    lineHeight: 1.5,
  },
  openBtnFull: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '10px 16px',
    borderRadius: '12px',
    border: '1px solid',
    transition: 'all 0.3s ease',
    width: '100%'
  }
};
