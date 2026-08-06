import './VideoCard.css';


function VideoCard({ video }) {

  const {
    title,
    channel,
    thumbnail,
    channelImage,
    views,
    uploaded,
  } = video;

  return (
    <article className="video-card">
      <div className="video-card__thumbnail">
        <img 
          src={thumbnail}
          alt="Video thumbnail" 
          loading='lazy'
        />
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
          </p>
          <p className="video-card__stats">
            {views} &#183; {uploaded}
          </p>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;