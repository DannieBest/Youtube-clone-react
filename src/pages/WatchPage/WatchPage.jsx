import { useParams } from 'react-router-dom';
import videos from '../../data/videos';
import './WatchPage.css';

function WatchPage() {
  const { videoId } = useParams();

  const video = videos.find((video) => video.id === Number(videoId));

  if (!video) {
    return <h1>Video not found!</h1>;
  }

  return (
    <section className="watch-page">

      <div className="watch-page__player">
        <img
          src={video.thumbnail}
          alt={video.title}
        />
      </div>

      <h1 className="watch-page__title">
        {video.title}
      </h1>

      <div className="watch-page__channel">

        <img
          src={video.channelImage}
          alt={video.channel}
        />

        <div>
          <h3>{video.channel}</h3>
          <p>1.2M subscribers</p>
        </div>

      </div>

      <p className="watch-page__stats">
        {video.views} · {video.uploaded}
      </p>

    </section>
  );
}

export default WatchPage;