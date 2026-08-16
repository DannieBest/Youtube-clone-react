import { useParams } from 'react-router-dom';
import videos from '../../data/videos';
import './WatchPage.css';

function WatchPage() {
  const { videoId } = useParams();

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

      {/* Video Player */}
      <section className="watch-page__player">
        <img
          src={video.thumbnail}
          alt={video.title}
        />

        <span className="watch-page__duration">
          {video.duration}
        </span>
      </section>

      {/* Video Information */}
      <section className="watch-page__info">

        <h1 className="watch-page__title">
          {video.title}
        </h1>

        <div className="watch-page__meta">

          {/* Channel */}
          <div className="watch-page__channel">

            <img
              src={video.channelImage}
              alt={video.channel}
            />

            <div className="watch-page__channel-info">
              <h3>{video.channel}</h3>
              <p>1.2M subscribers</p>
            </div>

          </div>

          {/* Subscribe */}
          <button className="watch-page__subscribe">
            Subscribe
          </button>

          {/* Actions */}
          <div className="watch-page__actions">

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
        <div className="watch-page__stats">
          {video.views} · {video.uploaded}
        </div>

        {/* Description */}
        <div className="watch-page__description">

          <p>
            This is the video description. We will connect
            this section to our video data later.
          </p>

        </div>

      </section>

      {/* Comments */}
      <section className="watch-page__comments">

        <h2>Comments</h2>

        <div className="watch-page__comment">
          <img
            src={video.channelImage}
            alt=""
          />

          <div>
            <strong>{video.channel}</strong>
            <p>
              This is a sample comment for our YouTube
              clone project.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}

export default WatchPage;