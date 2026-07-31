import './CategoryBar.css';

function CategoryBar () {
  return (
    <div className='category-bar__wrapper'>
      <button className="category-bar__arrow category-bar__arrow--left">
      <i className="material-icons">keyboard_arrow_left</i>
      </button>
      <nav className="category-bar__container" aria-label="Video categories">
        <button className="category-bar__button category-bar__button--active">
          All
        </button>

        <button className="category-bar__button">Music</button>

        <button className="category-bar__button">Gaming</button>

        <button className="category-bar__button">React</button>

        <button className="category-bar__button">JavaScript</button>

        <button className="category-bar__button">Programming</button>

        <button className="category-bar__button">Live</button>

        <button className="category-bar__button">Podcasts</button>

        <button className="category-bar__button">Afro Beats</button>

        <button className="category-bar__button">Pop Music</button>
        
        <button className="category-bar__button">Web Development</button>

        <button className="category-bar__button">News</button>

        <button className="category-bar__button">Recently Uploaded</button>

        <button className="category-bar__button">Watched</button>

        <button className="category-bar__button">New To You</button>

        <button className="category-bar__button">History</button>
      </nav>
      <button className="category-bar__arrow category-bar__arrow--right">
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default CategoryBar