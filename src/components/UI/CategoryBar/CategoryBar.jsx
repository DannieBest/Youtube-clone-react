import './CategoryBar.css';
import categories from '../../../data/categories';
import { useRef, useState } from 'react';

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryContainerRef = useRef(null);

  const scrollLeft = () => {
    categoryContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    categoryContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="category-bar">

      <div className="category-bar__wrapper">

        {/* LEFT ARROW */}

        <button
          type="button"
          className="category-bar__arrow category-bar__arrow--left"
          onClick={scrollLeft}
          aria-label="Scroll categories left"
        >
          <i className="material-icons">
            keyboard_arrow_left
          </i>
        </button>


        {/* CATEGORY CONTAINER */}

        <div
          className="category-bar__container"
          ref={categoryContainerRef}
        >

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? 'category-bar__button category-bar__button--active'
                  : 'category-bar__button'
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* RIGHT ARROW */}

        <button
          type="button"
          className="category-bar__arrow category-bar__arrow--right"
          onClick={scrollRight}
          aria-label="Scroll categories right"
        >
          <i className="material-icons">
            keyboard_arrow_right
          </i>
        </button>

      </div>

    </section>
  );
}

export default CategoryBar;