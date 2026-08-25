import { useState, useEffect } from 'react';
import { formatNumber } from '../utils/formatNumber';
import './VideoActions.css';

import facebookIcon from '../../../../src/assets/SVG/Facebook_icon.webp';
import whatsappIcon from '../../../../src/assets/SVG/whatsapp_svg.jpg';
import xIcon from '../../../../src/assets/SVG/x_svg.png';

function VideoActions({ video }) {
  const likedKey = `Liked-${video.id}-saved`; 

  const [liked, setLiked] = useState(() => {
    return localStorage.getItem(likedKey) === 'true';
  });

  useEffect(() => {
    localStorage.setItem(likedKey, liked)
  }, [liked, likedKey]);

  const [disliked, setDisliked] = useState(false);

  const [likeCount, setLikeCount] = useState(Number(video.likes) || 0);

  const savedKey = `Video-${video.id}-saved`;

  const [saved, setSaved] = useState(() => {
    return localStorage.getItem(savedKey) === 'true';
  });

  useEffect(() => {
    localStorage.setItem(savedKey, saved);
  }, [saved, savedKey]);

  const [showShared, setShowShared] = useState(false);

  const [copied, setCopied] = useState(false);

  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyLink = async () => {
    const videoUrl = `${window.location.origin}/watch/${video.id}`;

    try {
      await navigator.clipboard.writeText(videoUrl);

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error('Failed to copy video link:', error);
    }
  };

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

  const handleShared = () => {
    setShowShared(prevShared => !prevShared);
  }

  const handleDownloaded = () => {
    if (isDownloading || isDownloaded) return;

    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => {
        setIsDownloaded(false);
      }, 2000);
    }, 3000);
  };

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
      <button
        className="video-actions__button"
        onClick={handleShared}
      >
        <i className="material-icons">
          share
        </i>

        <span>
          Share
        </span>
      </button>

      {showShared && (
        <div className="video-actions__share-menu">

          <button onClick={handleCopyLink}>
            <i className="material-icons">
              {copied ? 'check' : 'link'}
            </i>
            <span>
              {copied ? 'Copied!' : 'Copy Link'}
            </span>
          </button>

          <button>
            <img
              src={facebookIcon} 
              alt="faceebook icon" 
            />
            <span>Facebook</span>
          </button>

          <button>
            <img 
              src={xIcon} 
              alt="x icon" 
            />
            <span>X</span>
          </button>

          <button>
            <img 
              src={whatsappIcon} 
              alt="" 
            />
            <span>WhatsApp</span>
          </button>

        </div>
      )}

      {/* Download */}
      <button
        type="button" 
        className={`video-actions__button ${
          isDownloaded ? 'video-actions__button--downloaded' : ''
        }`}
        disabled={isDownloading}
        onClick={handleDownloaded}
      >
        <i
          className={`material-icons ${
            isDownloading ? 'download-icon--loading' : ''
          }`}
        >
          {isDownloaded ? 'check' : 'download'}
        </i>

        <span>
          {isDownloading ? 'Downloading...' : isDownloaded ? 'Downloaded' : 'Download'}
        </span>
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
