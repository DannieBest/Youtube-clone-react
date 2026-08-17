import { useParams } from 'react-router-dom';
import { useState } from 'react';

import CategoryBar from '../../components/UI/CategoryBar/CategoryBar';
import videos from '../../data/videos';
import RecommendedVideos from '../../components/UI/RecommendedVideos/RecommendedVideos';
import WatchVideo from '../UI/WatchVideo/WatchVideo';
import VideoInfo from '../UI/VideoInfo/VideoInfo';
import Comments from '../UI/Comments/Comments';
import './WatchPage.css';

function WatchPage() {
  const { videoId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const video = videos.find(
    (video) => video.id === Number(videoId)
  );

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
          <VideoInfo video={video} />

          {/* Comments */}
          <Comments video={video} />

        </div>

        {/* Recommended Videos */}
        <RecommendedVideos currentVideoId={video.id} />

      </div>

    </main>
  );
}

export default WatchPage;