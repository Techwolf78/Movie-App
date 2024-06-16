import React, { createContext, useState } from "react";

// Create a Context
export const BookingContext = createContext();

// Create a Provider component
export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    selectedMovie: null,
    selectedShowtime: null,
    selectedScreen: null,
    selectedSeats: [],
    totalPrice: 0,
  });

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};
