import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CategorySection from './components/CategorySection';
import ParticleNetwork from './components/ParticleNetwork';
import toolsData from './data/tools.json';
import './index.css';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const totalTools = useMemo(() => {
    return toolsData.reduce((acc, cat) => acc + cat.tools.length, 0);
  }, []);

  const totalFree = useMemo(() => {
    return toolsData.reduce((acc, cat) => {
      const freeTools = cat.tools.filter(tool => 
        tool.tags.some(tag => tag.toLowerCase().includes('free'))
      );
      return acc + freeTools.length;
    }, 0);
  }, []);

  const totalCategories = toolsData.length;

  const filteredCategories = useMemo(() => {
    return toolsData.map(cat => {
      // If filtering by specific category, only include tools if matches
      if (activeFilter !== 'all' && cat.id !== activeFilter) {
        return { ...cat, tools: [] };
      }

      // Filter by search query
      const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      
      const filteredTools = cat.tools.filter(tool => {
        if (searchTerms.length === 0) return true;
        
        // Combine all searchable text into one string for fuzzy/related matching
        const searchableText = [
          tool.name,
          tool.tagline,
          ...tool.tags,
          cat.name, // Match by category name
          ...(tool.specs ? tool.specs.map(s => s.val) : []) // Match by specs (e.g. Company name)
        ].join(' ').toLowerCase();

        // Check if EVERY search term is found somewhere in the tool's text
        return searchTerms.every(term => searchableText.includes(term));
      });

      return { ...cat, tools: filteredTools };
    }).filter(cat => cat.tools.length > 0);
  }, [activeFilter, searchQuery]);

  return (
    <div>
      <ParticleNetwork />

      <Header totalTools={totalTools} totalCategories={totalCategories} totalFree={totalFree} />
      
      <FilterBar 
        categories={toolsData} 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main style={styles.main}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(cat => (
            <CategorySection key={cat.id} category={cat} />
          ))
        ) : (
          <div style={styles.emptyState}>
            No tools found matching your search.
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        Innovated by Mr. Yash • Curated Intelligence 2025
      </footer>
    </div>
  );
}

const styles = {
  main: {
    padding: '60px 40px',
    maxWidth: '1600px',
    margin: '0 auto',
    minHeight: '50vh'
  },
  emptyState: {
    textAlign: 'center',
    padding: '100px 20px',
    color: 'var(--text-muted)',
    fontSize: '18px',
    fontStyle: 'italic'
  },
  footer: {
    textAlign: 'center',
    padding: '60px 40px',
    borderTop: '1px solid var(--border)',
    color: 'var(--text-muted)',
    fontSize: '13px',
    letterSpacing: '1px',
    background: 'rgba(10, 10, 15, 0.6)',
    backdropFilter: 'blur(10px)',
  }
};
