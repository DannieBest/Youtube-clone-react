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
      <section className="watch-page">
        <h1>Video not found</h1>
      </section>
    );
  }

  return (
    <section className="watch-page">

      {/* VIDEO PLAYER */}

      <div className="watch-page__player">
        <img
          src={video.thumbnail}
          alt={video.title}
        />
      </div>


      {/* VIDEO TITLE */}

      <h1 className="watch-page__title">
        {video.title}
      </h1>


      {/* CHANNEL INFORMATION */}

      <div className="watch-page__channel">

        <img
          src={video.channelImage}
          alt={video.channel}
        />

        <div className="watch-page__channel-info">
          <h3>{video.channel}</h3>
          <p>1.2M subscribers</p>
        </div>

        <button className="watch-page__subscribe">
          Subscribe
        </button>

      </div>


      {/* VIDEO STATS */}

      <div className="watch-page__stats">
        <span>{video.views}</span>
        <span> · </span>
        <span>{video.uploaded}</span>
      </div>

    </section>
  );
}

export default WatchPage;