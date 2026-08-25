/**
 * MainContent Component
 * 
 * Container component for the Home page feed. Manages category chip state
 * and passes search and filter states to CategoryBar and VideoGrid.
 */
import { useState } from 'react';

import VideoGrid from '../../UI/VideoGrid/VideoGrid';
import CategoryBar from '../../UI/CategoryBar/CategoryBar';

import './MainContent.css';

function MainContent({ searchQuery }) {
  // Active category filter state (default: 'All')
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <main className="main-content">
      {/* Category filter bar */}
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Filtered video grid feed */}
      <VideoGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </main>
  );
}

export default MainContent;