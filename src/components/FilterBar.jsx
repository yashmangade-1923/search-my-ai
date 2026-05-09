import { Search } from 'lucide-react';

export default function FilterBar({ categories, activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
  return (
    <div style={styles.bar}>
      <span style={styles.label}>Filter:</span>
      <button 
        style={activeFilter === 'all' ? { ...styles.btn, ...styles.activeBtn } : styles.btn}
        onClick={() => setActiveFilter('all')}
        onMouseEnter={e => {
            if(activeFilter !== 'all') {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'var(--border-hover)';
                e.target.style.transform = 'translateY(-2px)';
            }
        }}
        onMouseLeave={e => {
            if(activeFilter !== 'all') {
                e.target.style.background = 'var(--tag-bg)';
                e.target.style.borderColor = 'var(--border)';
                e.target.style.transform = 'none';
            }
        }}
      >
        All
      </button>
      {categories.map(cat => (
        <button 
          key={cat.id}
          style={activeFilter === cat.id ? { ...styles.btn, ...styles.activeBtn } : styles.btn}
          onClick={() => setActiveFilter(cat.id)}
          onMouseEnter={e => {
            if(activeFilter !== cat.id) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'var(--border-hover)';
                e.target.style.transform = 'translateY(-2px)';
            }
        }}
        onMouseLeave={e => {
            if(activeFilter !== cat.id) {
                e.target.style.background = 'var(--tag-bg)';
                e.target.style.borderColor = 'var(--border)';
                e.target.style.transform = 'none';
            }
        }}
        >
          {cat.icon} {cat.name.split(' & ')[0]}
        </button>
      ))}
      
      <div style={styles.searchWrapper}>
        <Search style={styles.searchIcon} size={16} />
        <input 
          style={styles.searchBox}
          type="text" 
          placeholder="Search tools..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onFocus={e => {
            e.target.style.borderColor = 'var(--accent)';
            e.target.style.boxShadow = '0 0 15px rgba(232, 255, 71, 0.2)';
            e.target.style.width = '300px';
          }}
          onBlur={e => {
            e.target.style.borderColor = 'var(--border)';
            e.target.style.boxShadow = 'none';
            e.target.style.width = '260px';
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  bar: {
    background: 'rgba(10, 10, 15, 0.7)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    padding: '20px 40px',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  },
  label: {
    fontSize: '11px',
    letterSpacing: '2px',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    marginRight: '8px',
    fontWeight: 600
  },
  btn: {
    background: 'var(--tag-bg)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '12px',
    padding: '8px 18px',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    letterSpacing: '0.5px',
    fontWeight: 500
  },
  activeBtn: {
    background: 'var(--text)',
    color: 'var(--bg)',
    borderColor: 'var(--text)',
    fontWeight: 600,
    boxShadow: '0 0 15px rgba(255,255,255,0.3)',
  },
  searchWrapper: {
    marginLeft: 'auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    color: 'var(--text-muted)',
    pointerEvents: 'none'
  },
  searchBox: {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '13px',
    padding: '10px 20px 10px 40px',
    borderRadius: '30px',
    outline: 'none',
    width: '260px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  }
};
