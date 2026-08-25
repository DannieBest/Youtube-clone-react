import { Link } from 'react-router-dom';
import videos from '../../../data/videos';
import CategoryBar from '../CategoryBar/CategoryBar';
import './RecommendedVideos.css';

function RecommendedVideos({ currentVideoId, selectedCategory, setSelectedCategory }) {

  const recommendedVideos = videos.filter((video) => {
    const isNotCurrent = video.id !== currentVideoId;
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === 'All' ||
      video.category === selectedCategory;

    return isNotCurrent && matchesCategory;
  });

  return (
    <aside className="recommended-videos">
      {setSelectedCategory && (
        <div className="recommended-videos__categories">
          <CategoryBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      )}

      <div className="recommended-videos__list">

        {recommendedVideos.map((video) => (

          <Link
            to={`/watch/${video.id}`}
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

          </Link>

        ))}

      </div>

    </aside>
  );
}

export default RecommendedVideos;