/**
 * Comments Component
 * 
 * Manages video comment list state and interactive comment posting form.
 * Displays total comment count, sort controls, user comment input, and comment thread.
 */
import { useState } from 'react';
import commentsData from '../../../data/comments';
import './Comments.css';

function Comments({ video }) {
  // Input box state for new comment submission
  const [commentText, setCommentText] = useState('');

  // Local state initialized with comment dataset for active video
  const [comments, setComments] = useState(commentsData[video.id] || []);

  const handleComment = () => {

    const trimmedComment = commentText.trim();

    if (!trimmedComment) {
      return;
    }

    const newComment = {
      id: Date.now(),
      author: 'You',
      uploaded: 'Just now',
      avatar: video.channelImage,
      text: trimmedComment,
    };

    setComments(previousComments => [
      newComment,
      ...previousComments,
    ]);

    setCommentText('');
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCancel = () => {
    setCommentText('');
  };

  return (
    <section className="comments">
      <div className="comments__header">
        <h2>
          {comments.length} Comments
        </h2>
        <span>
          <i className="material-icons">sort</i>
          Sort by
        </span>
      </div>
      
      {/* Comment Input */}
      <div className="comments__input">

        <img
          src={video.channelImage}
          alt=""
        />

        <div className="comments__input-container">

          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleCommentChange}
          />


          {/* Buttons */}
          {commentText.trim() && (
            <div className="comments__actions">

              <button
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleComment}
              >
                Comment
              </button>

            </div>
          )}

        </div>

      </div>


      {/* Existing sample comment */}
      <div className="comments__list">

      {comments.map((comment) => (

        <div
          className="comments__item"
          key={comment.id}
        >
          
          <img
            src={comment.avatar}
            alt="comments profile"
          />
          
          <div>
            <div className="comments__meta">
              <strong>
                {comment.author}
              </strong>
              <span>{comment.uploaded}</span>
            </div>
            
            <p>
              {comment.text}
            </p>

          </div>

          <div>
            <i className="material-icons">more_vert</i>
          </div>
          
        </div>

      ))}

    </div>

    </section>
  );
}

export default Comments;