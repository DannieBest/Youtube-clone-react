import { useState } from 'react';
import { formatNumber } from '../utils/formatNumber';
import './VideoActions.css';

function VideoActions({ video }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [likeCount, setLikeCount] = useState(Number(video.likes) || 0);

 const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((previousCount) => previousCount - 1);
      return;
    }

    setLiked(true);

    if (disliked) {
      setDisliked(false);
    }

    setLikeCount((previousCount) => previousCount + 1);
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      return;
    }

    setDisliked(true);

    if (liked) {
      setLiked(false);
      setLikeCount((previousCount) => previousCount - 1);
    }
  };

  const handleSaved = () => { 
    setSaved(prevSaved => !prevSaved);
   }

  return (
    <div className="video-actions">
      {/* Like / Dislike */}
      <div className="video-actions__like-group">
        <button className={liked ? 'action-active' : ''} onClick={handleLike}>
          <i className="material-icons">thumb_up</i>

          <span>{formatNumber(likeCount)}</span>
        </button>

        <button
          className={disliked ? 'action-active' : ''}
          onClick={handleDislike}
        >
          <i className="material-icons">thumb_down</i>
        </button>
      </div>

      {/* Share */}
      <button className="video-actions__button">
        <i className="material-icons">share</i>

        <span>Share</span>
      </button>

      {/* Download */}
      <button className="video-actions__button">
        <i className="material-icons">download</i>

        <span>Download</span>
      </button>

      {/* Save */}
      <button
        className={`video-actions__button ${
          saved ? 'action-active' : ''
        }`}
        onClick={handleSaved}
      >
        <i className="material-icons">
          {saved ? 'bookmark_added' : 'bookmark'}
        </i>

        <span>
          {saved ? 'Saved' : 'Save'}
        </span>
      </button>

      {/* More */}
      <button className="video-actions__more">
        <i className="material-icons">more_horiz</i>
      </button>
    </div>
  );
}

export default VideoActions;
