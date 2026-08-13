import CategoryBar from '../../UI/CategoryBar/CategoryBar';
import VideoGrid from '../../UI/VideoGrid/VideoGrid';
import './MainContent.css';
import { useState } from 'react';

function MainContent () {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <main className='main-content'>
      <CategoryBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <VideoGrid 
        selectedCategory={selectedCategory}
      />
    </main>
  )  
}

export default MainContent;