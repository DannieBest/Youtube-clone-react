import videos from '../../../data/videos';
import './RecommendedVideos.css';

function RecommendedVideos({ currentVideoId }) {

  const recommendedVideos = videos.filter(
    (video) => video.id !== currentVideoId
  );

  return (
    <aside className="recommended-videos">

      <h2 className="recommended-videos__heading">
        Recommended
      </h2>

      <div className="recommended-videos__list">

        {recommendedVideos.map((video) => (

          <article
            className="recommended-video"
            key={video.id}
          >

            <div className="recommended-video__thumbnail">

              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
              />

              <span>
                {video.duration}
              </span>

            </div>

            <div className="recommended-video__info">

              <h3>
                {video.title}
              </h3>

              <p>
                {video.channel}
              </p>

              <p>
                {video.views} · {video.uploaded}
              </p>

            </div>

          </article>

        ))}

      </div>

    </aside>
  );
}

export default RecommendedVideos;