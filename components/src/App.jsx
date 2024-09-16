import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import StoryCards from './components/StoryCards';
import StoryDetail from './components/StoryDetail';
import Pagination from './components/Pagination';

const App = () => {
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('https://mxpertztestapi.onrender.com/api/adventure')
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 style={styles.title}>Science Fiction Stories</h1>
                <FilterButtons filter={filter} setFilter={setFilter} />
                <StoryCards stories={stories} filter={filter} />
                <Pagination />
              </>
            }
          />
          <Route path="/story/:id" element={<StoryDetail stories={stories} />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    backgroundColor: '#101030',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

export default App;