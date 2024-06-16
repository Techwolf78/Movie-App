import React, { useState, useContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from '../context/BookingContext.js';
import "./css/SeatSelection.css";

const screens = [
  {
    id: 1,
    name: "Screen 1",
    seats: [
      { id: 1, row: "1", seat: "1", status: "available" },
{ id: 2, row: "1", seat: "2", status: "available" },
{ id: 3, row: "1", seat: "3", status: "available" },
{ id: 4, row: "1", seat: "4", status: "available" },
{ id: 5, row: "1", seat: "5", status: "available" },
{ id: 6, row: "1", seat: "6", status: "available" },
{ id: 7, row: "1", seat: "7", status: "available" },
{ id: 8, row: "1", seat: "8", status: "available" },
{ id: 9, row: "1", seat: "9", status: "available" },
{ id: 10, row: "1", seat: "10", status: "available" },
{ id: 11, row: "2", seat: "11", status: "available" },
{ id: 12, row: "2", seat: "12", status: "available" },
{ id: 13, row: "2", seat: "13", status: "available" },
{ id: 14, row: "2", seat: "14", status: "available" },
{ id: 15, row: "2", seat: "15", status: "available" },
{ id: 16, row: "2", seat: "16", status: "available" },
{ id: 17, row: "2", seat: "17", status: "available" },
{ id: 18, row: "2", seat: "18", status: "available" },
{ id: 19, row: "2", seat: "19", status: "available" },
{ id: 20, row: "2", seat: "20", status: "available" },
{ id: 21, row: "3", seat: "21", status: "available" },
{ id: 22, row: "3", seat: "22", status: "available" },
{ id: 23, row: "3", seat: "23", status: "available" },
{ id: 24, row: "3", seat: "24", status: "available" },
{ id: 25, row: "3", seat: "25", status: "available" },
{ id: 26, row: "3", seat: "26", status: "available" },
{ id: 27, row: "3", seat: "27", status: "available" },
{ id: 28, row: "3", seat: "28", status: "available" },
{ id: 29, row: "3", seat: "29", status: "available" },
{ id: 30, row: "3", seat: "30", status: "available" },
{ id: 31, row: "4", seat: "31", status: "available" },
{ id: 32, row: "4", seat: "32", status: "available" },
{ id: 33, row: "4", seat: "33", status: "available" },
{ id: 34, row: "4", seat: "34", status: "available" },
{ id: 35, row: "4", seat: "35", status: "available" },
{ id: 36, row: "4", seat: "36", status: "available" },
{ id: 37, row: "4", seat: "37", status: "available" },
{ id: 38, row: "4", seat: "38", status: "available" },
{ id: 39, row: "4", seat: "39", status: "available" },
{ id: 40, row: "4", seat: "40", status: "available" },
{ id: 41, row: "5", seat: "41", status: "available" },
{ id: 42, row: "5", seat: "42", status: "available" },
{ id: 43, row: "5", seat: "43", status: "available" },
{ id: 44, row: "5", seat: "44", status: "available" },
{ id: 45, row: "5", seat: "45", status: "available" },
{ id: 46, row: "5", seat: "46", status: "available" },
{ id: 47, row: "5", seat: "47", status: "available" },
{ id: 48, row: "5", seat: "48", status: "available" },
{ id: 49, row: "5", seat: "49", status: "available" },
{ id: 50, row: "5", seat: "50", status: "available" },
{ id: 51, row: "6", seat: "51", status: "available" },
{ id: 52, row: "6", seat: "52", status: "available" },
{ id: 53, row: "6", seat: "53", status: "available" },
{ id: 54, row: "6", seat: "54", status: "available" },
{ id: 55, row: "6", seat: "55", status: "available" },
{ id: 56, row: "6", seat: "56", status: "available" },
{ id: 57, row: "6", seat: "57", status: "available" },
{ id: 58, row: "6", seat: "58", status: "available" },
{ id: 59, row: "6", seat: "59", status: "available" },
{ id: 60, row: "6", seat: "60", status: "available" }

    ],
  },
  {
    id: 2,
    name: "Screen 2",
    seats: [
      
{ id: 1, row: "1", seat: "1", status: "available" },
{ id: 2, row: "1", seat: "2", status: "available" },
{ id: 3, row: "1", seat: "3", status: "available" },
{ id: 4, row: "1", seat: "4", status: "available" },
{ id: 5, row: "1", seat: "5", status: "available" },
{ id: 6, row: "1", seat: "6", status: "available" },
{ id: 7, row: "1", seat: "7", status: "available" },
{ id: 8, row: "1", seat: "8", status: "available" },
{ id: 9, row: "2", seat: "9", status: "available" },
{ id: 10, row: "2", seat: "10", status: "available" },
{ id: 11, row: "2", seat: "11", status: "available" },
{ id: 12, row: "2", seat: "12", status: "available" },
{ id: 13, row: "2", seat: "13", status: "available" },
{ id: 14, row: "2", seat: "14", status: "available" },
{ id: 15, row: "2", seat: "15", status: "available" },
{ id: 16, row: "2", seat: "16", status: "available" },
{ id: 17, row: "3", seat: "17", status: "available" },
{ id: 18, row: "3", seat: "18", status: "available" },
{ id: 19, row: "3", seat: "19", status: "available" },
{ id: 20, row: "3", seat: "20", status: "available" },
{ id: 21, row: "3", seat: "21", status: "available" },
{ id: 22, row: "3", seat: "22", status: "available" },
{ id: 23, row: "3", seat: "23", status: "available" },
{ id: 24, row: "3", seat: "24", status: "available" },
    ],
  },
];

const SeatSelection = () => {
  const { bookingDetails, setBookingDetails } = useContext(BookingContext);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [screenSelection, setScreenSelection] = useState(null);
  const navigate = useNavigate();

  const handleSeatSelection = (seat) => {
    if (seat.status === "available") {
      setSelectedSeats((prevSeats) => [...prevSeats, seat]);
      seat.status = "selected";
    } else if (seat.status === "selected") {
      setSelectedSeats((prevSeats) => prevSeats.filter((s) => s.id !== seat.id));
      seat.status = "available";
    }
  };

  const handleScreenSelection = (screen) => {
    setScreenSelection(screen);
    setSelectedSeats([]);
    screens.forEach((s) => {
      s.seats.forEach((seat) => {
        seat.status = "available";
      });
    });
    setBookingDetails(prevState => ({
      ...prevState,
      selectedScreen: screen.name
    }));
  };

  useEffect(() => {
    if (selectedSeats.length > 0) {
      const totalPrice = selectedSeats.length * 300;
      setBookingDetails(prevState => ({
        ...prevState,
        selectedSeats: selectedSeats.map(seat => seat.seat),
        totalPrice: totalPrice
      }));
    }
  }, [selectedSeats, setBookingDetails]);

  return (
    <div className="seat-selection">
      <h2>Seat Selection</h2>
      <div className="screen-selection">
        <h3>Screen Selection:</h3>
        <ul>
          {screens.map((screen) => (
            <li key={screen.id}>
              <button onClick={() => handleScreenSelection(screen)}>
                {screen.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {screenSelection && (
        <div className="seat-map-container">
          <h3>Seat Map:</h3>
          <div className="seat-map">
            {screenSelection.seats.map((seat) => (
              <div
                key={seat.id}
                className={`seat ${seat.status}`}
                onClick={() => handleSeatSelection(seat)}
              >
                {seat.seat}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedSeats.length > 0 && (
        <div className="price-button-container">
          <button
            className="price-button"
            onClick={() => navigate("/payment")}
          >
            ₹{bookingDetails.totalPrice}
          </button>
        </div>
      )}
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>{seat.seat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatSelection;