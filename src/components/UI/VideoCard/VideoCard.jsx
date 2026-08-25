/**
 * VideoCard Component
 * 
 * Renders an individual video item card containing thumbnail image, duration badge,
 * channel avatar, title, channel name, verification badge, and view stats.
 * Clicking the card navigates to the video watch page.
 */
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video }) {
  const navigate = useNavigate();

  const {
    title,
    channel,
    thumbnail,
    channelImage,
    views,
    uploaded,
    duration,
  } = video;

  return (
    <article
      className="video-card"
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      {/* Video Thumbnail Preview & Duration Badge */}
      <div className="video-card__thumbnail">
        <img 
          src={thumbnail}
          alt={title} 
          loading="lazy"
        />
        <span className="video-card__duration">
          {duration}
        </span>
      </div>

      {/* Video Metadata & Channel Info */}
      <div className="video-card__details">
        <div className="video-card__channel">
          <img 
            src={channelImage} 
            alt={channel} 
            loading="lazy"
          />
        </div>

        <div className="video-card__info">
          <h3 className="video-card__title">
            {title}
          </h3>

          <p className="video-card__channel-name">
            {channel}
            <i className="material-icons video-card__verified">
              verified
            </i>
          </p>

          <p className="video-card__stats">
            {views} &#183; {uploaded}
          </p>
        </div>

        {/* Video Options Menu Button */}
        <button
          className="video-card__menu"
          aria-label="Video options"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="material-icons">more_vert</i>
        </button>
      </div>
    </article>
  );
}

export default VideoCard;