import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div style={styles.filterContainer}>
      <button 
        style={{ ...styles.button, backgroundColor: filter === 'New' ? '#4a90e2' : '#202040' }}
        onClick={() => setFilter('New')}
      >
        New
      </button>
      <button 
        style={{ ...styles.button, backgroundColor: filter === 'In Progress' ? '#f5a623' : '#202040' }}
        onClick={() => setFilter('In Progress')}
      >
        In Progress
      </button>
      <button 
        style={{ ...styles.button, backgroundColor: filter === 'Completed' ? '#7ed321' : '#202040' }}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
      <button 
        style={styles.buttonClear}
        onClick={() => setFilter('All')}
      >
        Clear All
      </button>
    </div>
  );
};

const styles = {
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '30px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  buttonClear: {
    backgroundColor: '#50e3c2',
    padding: '10px 20px',
    borderRadius: '30px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default FilterButtons;