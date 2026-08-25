/**
 * WatchPage Component
 * 
 * Displays the video player view for a selected video ID.
 * Renders video player player, metadata info, user comments, and recommended side column.
 */
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import videos from '../../data/videos';
import RecommendedVideos from '../../components/UI/RecommendedVideos/RecommendedVideos';
import WatchVideo from '../UI/WatchVideo/WatchVideo';
import VideoInfo from '../UI/VideoInfo/VideoInfo';
import Comments from '../UI/Comments/Comments';
import './WatchPage.css';

function WatchPage() {
  const { videoId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Find target video object from video dataset
  const video = videos.find(
    (video) => video.id === Number(videoId)
  );

  // Render fallback view if video ID does not exist
  if (!video) {
    return (
      <main className="watch-page">
        <h1>Video not found</h1>
      </main>
    );
  }

  return (
    <main className="watch-page">
      <div className="watch-page__content">
        <div className="watch-page__main">
          {/* Video Player */}
          <WatchVideo video={video} />

          {/* Video Info */}
          <VideoInfo key={video.id} video={video} />

          {/* Comments */}
          <Comments video={video} />
        </div>

        {/* Recommended Videos with Category Bar */}
        <RecommendedVideos
          currentVideoId={video.id}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </main>
  );
}

export default WatchPage;