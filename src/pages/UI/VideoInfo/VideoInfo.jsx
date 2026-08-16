import './VIdeoInfo.css';

function VideoInfo({ video }) {
  return (
    <section className="video-info">

      <h1 className="video-info__title">
        {video.title}
      </h1>

      <div className="video-info__meta">

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
        <button className="video-info__subscribe">
          Subscribe
        </button>

        {/* Actions */}
        <div className="video-info__actions">

          <button>
            <i className="material-icons">
              thumb_up
            </i>
            Like
          </button>

          <button>
            <i className="material-icons">
              share
            </i>
            Share
          </button>

          <button>
            <i className="material-icons">
              more_horiz
            </i>
          </button>

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