import './VideoPage.css';


function VideoPage({ video }) {

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
    <section className="video-page">

      <div className="video-page__player">
        <img
          src={thumbnail}
          alt={title}
        />

        <span className="video-page__duration">
          {duration}
        </span>
      </div>

      <div className="video-page__info">

        <h1 className="video-page__title">
          {title}
        </h1>

        <div className="video-page__channel">

          <img
            src={channelImage}
            alt={channel}
          />

          <div>
            <h3>{channel}</h3>
            <p>1.2M subscribers</p>
          </div>

        </div>

        <div className="video-page__stats">
          {views} · {uploaded}
        </div>

      </div>

    </section>
  );
}

export default VideoPage;