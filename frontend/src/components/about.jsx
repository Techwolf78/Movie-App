import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1
        style={{
          color: 'green',
          fontSize: '60px',
          textAlign: 'center',
          '@media (max-width: 768px)': {
            fontSize: '40px',
          },
          '@media (max-width: 480px)': {
            fontSize: '30px',
          },
        }}
      >
        TheatreTonic
      </h1>
      <p
        style={{
          color: 'gray',
          fontSize: '25px',
          textAlign: 'center',
          '@media (max-width: 768px)': {
            fontSize: '20px',
          },
          '@media (max-width: 480px)': {
            fontSize: '15px',
          },
        }}
      >
        Your Premier Destination for Movie Ticket Booking
      </p>
      <p>
        Welcome to TheatreTonic, your premier destination for movie ticket booking.
        We strive to provide a seamless and enjoyable experience for our customers.
      </p>
      <p>
        Our mission is to make movie-going a memorable and enjoyable experience for
        everyone. We achieve this by offering a wide range of movies, convenient
        booking options, and a user-friendly interface.
      </p>
      <p>
        At TheatreTonic, we are committed to providing exceptional customer service
        and ensuring that our customers have a great time at the movies.
      </p>
      <p>
        We are constantly working to improve our services and provide the best
        possible experience for our customers. Your feedback is invaluable to us,
        and we appreciate any suggestions or comments you may have.
      </p>
    </div>
  );
};

export default About;