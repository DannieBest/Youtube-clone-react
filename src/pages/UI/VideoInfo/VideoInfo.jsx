import { useState, useEffect } from 'react';
import VideoActions from '../VideoActions/VideoActions';
import './VideoInfo.css';

function VideoInfo({ video }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const subscribedKey = `Channel-${video.channel}-subscribed`;

  // Sync subscription state whenever the channel changes
  useEffect(() => {
    const isSubbed = localStorage.getItem(subscribedKey) === 'true';
    setSubscribed(isSubbed);
  }, [subscribedKey]);

  // Reset description expansion state whenever the video changes
  useEffect(() => {
    setIsExpanded(false);
  }, [video.id]);

  const handleSubscribe = () => {
    setSubscribed(prev => {
      const nextState = !prev;
      if (nextState) {
        localStorage.setItem(subscribedKey, 'true');
      } else {
        localStorage.removeItem(subscribedKey);
      }
      return nextState;
    });
  };

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <section className="video-info">
      {/* Title */}
      <h1 className="video-info__title">{video.title}</h1>

      {/* Channel + Actions */}
      <div className="video-info__meta">
        <div className="video-info__channel-left">
          <div className="video-info__channel">
            <img src={video.channelImage} alt={video.channel} />
            <div className="video-info__channel-info">
              <h3>{video.channel}</h3>
              <p>1.2M subscribers</p>
            </div>
          </div>

          <button
            className={`video-info__subscribe ${subscribed ? 'subscribed' : ''}`}
            onClick={handleSubscribe}
          >
            {subscribed && (
              <i className="material-icons">notifications_active</i>
            )}
            <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
          </button>
        </div>

        <div className="video-info__channel-right">
          <VideoActions video={video} />
        </div>
      </div>

      {/* Description */}
      <div className={`video-info__description ${isExpanded ? 'expanded' : ''}`}>
        <div className="video-info__stats">
          {video.views} · {video.uploaded}
        </div>

        <p className="video-info__description-text">
          {video.description}
        </p>

        <button
          type="button"
          className="video-info__expand-btn"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : '...more'}
        </button>
      </div>
    </section>
  );
}

export default VideoInfo;