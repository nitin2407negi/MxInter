import React from 'react';

const Pagination = () => {
  return (
    <div style={styles.pagination}>
      <button style={styles.button}>Previous</button>
      <span style={styles.pageInfo}>Page 1</span>
      <button style={styles.button}>Next</button>
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#5ac8fa',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    color: '#fff',
    cursor: 'pointer',
  },
  pageInfo: {
    color: '#fff',
  },
};

export default Pagination;