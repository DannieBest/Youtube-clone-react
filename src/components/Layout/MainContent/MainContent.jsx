import { useState } from 'react';

import VideoGrid from '../../UI/VideoGrid/VideoGrid';
import CategoryBar from '../../UI/CategoryBar/CategoryBar';

import './MainContent.css';


function MainContent({ searchQuery }) {

  const [selectedCategory, setSelectedCategory] = useState('All');


  return (
    <main className="main-content">

      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <VideoGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />

    </main>
  );
}

export default MainContent;