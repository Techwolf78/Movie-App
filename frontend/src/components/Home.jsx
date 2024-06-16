import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';


const Home = () => {
  const navigate = useNavigate();

  const [movies,] = useState([
    { id: 1, title: 'Movie 1', image: require('./assets/avenger.jpeg')},
    { id: 2, title: 'Movie 2', image: require( './assets/dark.jpeg') },
    { id: 3, title: 'Movie 3', image: require( './assets/forest.jpeg') },
    { id: 4, title: 'Movie 4', image: require( './assets/shaws.jpeg') },
    { id: 5, title: 'Movie 5', image: require( './assets/inceptio.jpeg') },
    { id: 6, title: 'Movie 6', image: require( './assets/avenger.jpeg') },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, movies.length]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h2>Welcome to the Online Movie Booking !</h2>
<p>Here you can find a list of movies that you can watch. You can browse through the movies by clicking on <b>Go to Movie Selection</b> <i>button</i></p>
<h3>Movie Selection</h3>
      <div className="movie-carousel">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`movie-carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
      <button className="go-movie" onClick={() => navigate('/movies')}>Go to Movie Selection</button>
    </div>
  );
};

export default Home;
