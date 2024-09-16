import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCards";
import { useNavigate } from "react-router-dom";

const StoryGrid = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch stories data from the API
    const fetchStories = async () => {
      try {
        const response = await fetch("https://mxpertztestapi.onrender.com/api/adventure");
        const data = await response.json();
        setStories(data);  // Save fetched data to state
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching stories:", error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // Handle card click to navigate to the next page
  const handleCardClick = (id) => {
    navigate(`/story/${id}`);
  };

  if (loading) {
    return <p>Loading stories...</p>;
  }

  return (
    <div style={styles.cardGrid}>
      {stories.length > 0 ? (
        stories.map((story, index) => (
          <StoryCard key={index} story={story} onClick={() => handleCardClick(story.id)} />
        ))
      ) : (
        <p>No stories available.</p>
      )}
    </div>
  );
};

const styles = {
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    justifyItems: "center",
    padding: "20px",
  },
};

export default StoryGrid;
