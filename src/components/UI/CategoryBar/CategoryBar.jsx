import './CategoryBar.css';
import categories from '../../../data/categories';
import { useState } from 'react';

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className="category-bar">
      <div className="category-bar__wrapper">
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
      </div>
    </section>
  );
}

export default CategoryBar;
