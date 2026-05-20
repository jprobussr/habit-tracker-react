import React from 'react';

const FilterBar = ({filter, setFilter}) => {
  return (
    <section className="filter-bar">
      <button
        type="button"
        className={filter === 'all' ? 'active-filter' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>

      <button
        type="button"
        className={filter === 'active' ? 'active-filter' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>

      <button
        type="button"
        className={filter === 'completed' ? 'active-filter' : ''}
        onClick={() => setFilter('completed')}
      >
        Complete
      </button>
    </section>
  );
};

export default FilterBar;
