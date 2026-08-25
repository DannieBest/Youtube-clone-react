/**
 * VideoGrid Component
 * 
 * Filters video data based on selected category chip and search query,
 * then maps the filtered results into a responsive grid of VideoCard components.
 */
import './VideoGrid.css';
import VideoCard from '../VideoCard/VideoCard';
import videos from '../../../data/videos';

function VideoGrid({ selectedCategory, searchQuery = '' }) {
  // Filter video collection by active category chip and search string
  const filteredVideos = videos.filter((video) => {
    // 1. Category filter logic
    const matchesCategory =
      selectedCategory === 'All' ||
      video.category === selectedCategory;

    // 2. Search filter matching title or channel name
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase());

    // Video must satisfy both category and search criteria
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