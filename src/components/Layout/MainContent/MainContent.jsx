import CategoryBar from '../../UI/CategoryBar/CategoryBar';
import VideoGrid from '../../UI/VideoGrid/VideoGrid';
import './MainContent.css';

function MainContent () {
  return (
    <main className='main-content'>
      <CategoryBar />
      <VideoGrid />
    </main>
  )  
}

export default MainContent;