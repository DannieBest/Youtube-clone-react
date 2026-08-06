import './VideoCard.css';
import profile_1 from '../../../assets/thumbnails/thumbnail-1.webp';
import channel_1 from '../../../assets/channel-images/channel-1.jpeg';

function VideoCard() {
  return (
    <article className="video-card">
      <div className="video-card__thumbnail">
        <img 
          src={profile_1}
          alt="Video thumbnail" 
          loading='lazy'
        />
      </div>
      <div className="video-card__details">
        <div className="video-card__channel">
          <img 
            src={channel_1} 
            alt="channel avatar" 
            loading='lazy'
          />
        </div>
        <div className="video-card__info">
          <h3 className="video-card__title">
            Talking Tech and AI with Google CEO Sundar Pichai!
          </h3>
          <p className="video-card__channel-name">
            Marques Brownlee
          </p>
          <p className="video-card__stats">
            3.4M views &#183; 6 months ago
          </p>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;