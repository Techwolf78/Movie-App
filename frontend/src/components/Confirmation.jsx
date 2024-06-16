import React, { useContext, useEffect } from 'react';
import { BookingContext } from '../context/BookingContext.js';
import "./css/Confirmation.css";

const Confirmation = () => {
  const { bookingDetails } = useContext(BookingContext);

  useEffect(() => {

    const timer = setTimeout(() => {
      console.log('Redirecting...');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="confirmation-container">
      <div className="confirmation">
        <h1>Congratulations!</h1>
        <p>Your seats are booked!</p>
        <ul className="no-bullets"> 
          <li><strong>Movie:</strong> {bookingDetails.selectedMovie}</li>
          <li><strong>Showtime:</strong> {bookingDetails.selectedShowtime}</li>
          <li><strong>Screen:</strong> {bookingDetails.selectedScreen}</li>
          <li><strong>Seat Number:</strong> {bookingDetails.selectedSeats.join(', ')}</li>
          <li><strong>Total Price:</strong> ₹{bookingDetails.totalPrice}</li>
        </ul>
      </div>
    </div>
  );
};

export default Confirmation;