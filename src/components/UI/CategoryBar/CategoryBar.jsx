import './CategoryBar.css';
import categories from '../../../data/categories';

function CategoryBar({ selectedCategory, setSelectedCategory }) {

  return (
    <section className="category-bar">
      <div className="category-bar__wrapper">
        <button className="category-bar__arrow category-bar__arrow--left">
            <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <div className="category-bar__container">
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
        <button className="category-bar__arrow category-bar__arrow--right">
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </section>
  );
}

export default CategoryBar;
