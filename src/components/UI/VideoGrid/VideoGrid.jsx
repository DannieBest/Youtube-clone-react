import './VideoGrid.css';
import VideoCard from '../VideoCard/VideoCard';
import videos from '../../../data/videos';

function VideoGrid({ selectedCategory, searchQuery = '' }) {

  const filteredVideos = videos.filter((video) => {

    // Category filter
    const matchesCategory =
      selectedCategory === 'All' ||
      video.category === selectedCategory;

    // Search filter
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase());

    // Video must satisfy BOTH filters
    return matchesCategory && matchesSearch;
  });

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