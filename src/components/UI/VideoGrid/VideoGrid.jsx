import './VideoGrid.css';
import  VideoCard from '../VideoCard/VideoCard';
import videos from '../../../data/videos';

function VideoGrid({ selectedCategory }) {

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter((video) => video.category === selectedCategory);

  return (
    <section className="video-grid">
     {filteredVideos.map((video) => (
      <VideoCard 
        key={video.id}
        video={video}
      />
     ))}
    </section>
  );
}

export default VideoGrid;