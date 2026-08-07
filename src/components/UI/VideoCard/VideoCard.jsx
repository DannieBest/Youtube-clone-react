import './VideoCard.css';


function VideoCard({ video }) {

  const {
    title,
    channel,
    thumbnail,
    channelImage,
    views,
    uploaded,
    duration,
    verified,
  } = video;

  return (
    <article className="video-card">
      <div className="video-card__thumbnail">
        <img 
          src={thumbnail}
          alt="Video thumbnail" 
          loading='lazy'
        />
        <span className="video-card__duration">
          {duration}
        </span>
      </div>
      <div className="video-card__details">
        <div className="video-card__channel">
          <img 
            src={channelImage} 
            alt="channel avatar" 
            loading='lazy'
          />
        </div>
        <div className="video-card__info">
          <h3 className="video-card__title">
            {title}
          </h3>
          <p className="video-card__channel-name">
            {channel}

            {VideoCard && (
              <i className="material-icons video-card__verified">
                verified
              </i>
            )}
          </p>
          <p className="video-card__stats">
            {views} &#183; {uploaded}
          </p>
        </div>
        <button className="video-card__menu" aria-label="Video options">
          <i className="material-icons">
            more_vert
          </i>
        </button>
      </div>
    </article>
  );
}

export default VideoCard;