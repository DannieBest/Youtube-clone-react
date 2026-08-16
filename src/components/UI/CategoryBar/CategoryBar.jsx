import './CategoryBar.css';
import categories from '../../../data/categories';
import { useEffect, useRef, useState } from 'react';

function CategoryBar({ selectedCategory, setSelectedCategory }) {

  const containerRef = useRef(null);
  const categoryRefs = useRef({});

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  const updateScrollButtons = () => {
    const container = containerRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 0);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 1
    );
  };


  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    updateScrollButtons();

    container.addEventListener('scroll', updateScrollButtons);

    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  useEffect(() => {
    const selectedButton = categoryRefs.current[selectedCategory];

    if (!selectedButton) return;

    selectedButton.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [selectedCategory]);

  const scrollCategories = (direction) => {
    const container = containerRef.current;

    if (!container) return;

    const scrollAmount = 300;

    container.scrollBy({
      left: direction === 'left'
        ? -scrollAmount
        : scrollAmount,
      behavior: 'smooth',
    });
  };


  return (
    <section className="category-bar">

      <div className="category-bar__wrapper">

        {canScrollLeft && (
          <button
            type="button"
            className="category-bar__arrow category-bar__arrow--left"
            onClick={() => scrollCategories('left')}
            aria-label="Scroll categories left"
          >
            <i className="material-icons">
              keyboard_arrow_left
            </i>
          </button>
        )}


        <div
          className="category-bar__container"
          ref={containerRef}
        >
          {categories.map((category) => (
            <button
              key={category}
              ref={(element) => {
                categoryRefs.current[category] = element;
              }}
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


        {canScrollRight && (
          <button
            type="button"
            className="category-bar__arrow category-bar__arrow--right"
            onClick={() => scrollCategories('right')}
            aria-label="Scroll categories right"
          >
            <i className="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        )}

      </div>

    </section>
  );
}

export default CategoryBar;