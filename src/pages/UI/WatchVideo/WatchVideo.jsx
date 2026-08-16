import './WatchVideo.css';

function WatchVideo({video}) {
  return (
    <section className="watch-video">
      <div className="watch-video__player">
        <img
          src={video.thumbnail}
          alt={video.title}
        />

        <span className="watch-page__duration">
          {video.duration}
        </span>
      </div>
    </section>
  );
}

export default WatchVideo;