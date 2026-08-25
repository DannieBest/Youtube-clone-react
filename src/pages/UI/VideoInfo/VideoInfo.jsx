import { useState, useEffect } from 'react';
import VideoActions from '../VideoActions/VideoActions';
import './VideoInfo.css';

function VideoInfo({ video }) {

  const subscribedKey = `Channel-${video.channel}-subscribed`;

  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const savedSubscription =
      localStorage.getItem(subscribedKey) === 'true';

    setSubscribed(savedSubscription);
  }, [subscribedKey]);

  useEffect(() => {
    if (subscribed) {
      localStorage.setItem(subscribedKey, 'true');
    } else {
      localStorage.removeItem(subscribedKey);
    }
  }, [subscribed, subscribedKey]);

  const handleSubscribe = () => {
    setSubscribed(previousSubscribed => !previousSubscribed);
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
            {subscribed && (
              <i className="material-icons">notifications_active</i>
            )}
            <span>
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </span>
          </button>

        </div>
        
        <div className="video-info__channel-right">
          {/* Actions */}
          <VideoActions key={video.id} video={video} />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut dolorem deleniti est, at maxime. Voluptatem, accusamus laudantium, veritatis nesciunt accusantium omnis cumque deserunt obcaecati dignissimos praesentium placeat ab aspernatur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum modi consectetur esse ea libero totam soluta officiis magni necessitatibus, sed quaerat voluptate delectus distinctio, voluptatibus accusamus maxime quos doloribus dolorem.
        </p>

      </div>

    </section>
  );
}

export default VideoInfo;