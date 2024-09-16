import React from 'react';
import { Link } from 'react-router-dom';

const StoryCards = ({ stories, filter }) => {
  const filteredStories = stories.filter((story) => {
    if (filter === 'All') return true;
    return story.status === filter;
  });

  return (
    <div style={styles.cardGrid}>
      {filteredStories.map((story) => (
        <Link key={story.id} to={`/story/${story.id}`} style={styles.link}>
          <div style={styles.card}>
            <img
              src={`https://ik.imagekit.io/dev24/${story?.Image}`}
              alt={story.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{story.title}</h3>
            <span style={styles.status}>{story.status}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  card: {
    backgroundColor: '#202040',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    color: '#fff',
    fontSize: '1rem',
    marginTop: '10px',
  },
  status: {
    backgroundColor: '#5ac8fa',
    borderRadius: '20px',
    padding: '5px 10px',
    color: '#fff',
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
  },
};

export default StoryCards;
