import { useState } from 'react';
import VideoActions from '../VideoActions/VideoActions';
import './VideoInfo.css';

function VideoInfo({ video }) {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed((prevSubscribed) => !prevSubscribed);
  };

  return (
    <section className="video-info">

      <h1 className="video-info__title">
        {video.title}
      </h1>

      <div className="video-info__meta">
        
        <div className="video-info__channel-left">
          {/* Channel */}
          <div className="video-info__channel">
            <img
              src={video.channelImage}
              alt={video.channel}
            />

            <div className="video-info__channel-info">
              <h3>{video.channel}</h3>
              <p>1.2M subscribers</p>
            </div>

          </div>

          {/* Subscribe */}
          <button
            className={`video-info__subscribe ${
              subscribed ? 'subscribed' : ''
            }`}
            onClick={handleSubscribe}
          >
            Subscribe
          </button>

        </div>
        
        <div className="video-info__channel-right">
          {/* Actions */}
          <VideoActions video={video} />
        </div>

      </div>

      {/* Stats */}
      <div className="video-info__stats">
        {video.views} · {video.uploaded}
      </div>

      {/* Description */}
      <div className="video-info__description">

        <p>
          This is the video description. We will connect
          this section to our video data later.
        </p>

      </div>

    </section>
  );
}

export default VideoInfo;