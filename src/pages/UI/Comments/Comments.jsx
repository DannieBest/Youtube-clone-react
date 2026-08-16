import './Comments.css';

function Comments({ video }) {
  return (
    <section className="comments">

      <h2>Comments</h2>

      <div className="watch-page__comments">
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
  );
}

export default Comments;