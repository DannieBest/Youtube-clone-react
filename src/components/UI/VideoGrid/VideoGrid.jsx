import './VideoGrid.css';
import  VideoCard from '../VideoCard/VideoCard';
import videos from '../../../data/videos';

function VideoGrid() {
  return (
    <section className="video-grid">
     {videos.map((video) => (
      <VideoCard 
        key={video.id}
        video={video}
      />
     ))}
    </section>
  );
}

export default VideoGrid;