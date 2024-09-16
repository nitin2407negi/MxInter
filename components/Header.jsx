import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>BrainyLingo</div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#leaderboard" style={styles.link}>Leaderboard</a>
        <a href="#quiz" style={styles.link}>Daily Quiz</a>
        <a href="#genres" style={styles.link}>Genres</a>
      </nav>
      <button style={styles.button}>Sign Out</button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#202040',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#5ac8fa',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Header;