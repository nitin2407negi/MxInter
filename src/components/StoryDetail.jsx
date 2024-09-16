import React from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = ({ stories }) => {
  const { id } = useParams();
  
  // If the story IDs are integers, use parseInt, otherwise, just use id directly
  const story = stories.find((story) => story.id === parseInt(id, 10));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{story.title}</h2>
      <img
        src={`https://ik.imagekit.io/dev24/${story?.Image}`}
        alt={story.title}
        style={styles.image}
      />
      <p style={styles.description}>{story.description}</p>
      <div style={styles.statusSection}>
        <span style={styles.statusLabel}>Status: </span>
        <span style={styles.status}>{story.status}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#202040',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  statusSection: {
    marginTop: '20px',
  },
  statusLabel: {
    fontWeight: 'bold',
  },
  status: {
    backgroundColor: '#5ac8fa',
    borderRadius: '10px',
    padding: '5px 10px',
  },
};

export default StoryDetail;
