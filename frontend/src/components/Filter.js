import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Filter = () => {
  const { filter, setFilter } = useContext(GlobalContext);

  return (
    <div className="filter-container">
      <button 
        className={`btn-filter ${filter === 'ALL' ? 'active' : ''}`}
        onClick={() => setFilter('ALL')}
      >
        All
      </button>
      <button 
        className={`btn-filter ${filter === 'INCOME' ? 'active' : ''}`}
        onClick={() => setFilter('INCOME')}
      >
        Income
      </button>
      <button 
        className={`btn-filter ${filter === 'EXPENSE' ? 'active' : ''}`}
        onClick={() => setFilter('EXPENSE')}
      >
        Expense
      </button>
    </div>
  );
};
