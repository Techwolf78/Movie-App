import React, { useContext, useState, useEffect } from "react";
import { BookingContext } from '../context/BookingContext.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import "./css/payments.css";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const { bookingDetails } = useContext(BookingContext);
  const [clientSecret, setClientSecret] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    fetch(`${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: bookingDetails.totalPrice * 100 }), 
    })
    .then(response => response.json())
    .then(data => {
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        console.error('Failed to get client secret:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching client secret:', error);
    });
  }, [bookingDetails.totalPrice]);

  const handleBookingConfirmation = async (details) => {
    try {

      await fetch(`${process.env.REACT_APP_BACKEND_URL}/confirm-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: details.email, 
          bookingDetails: {
            ...details.bookingDetails,
          },
        }),
      });


      navigate('/Confirmation', { state: { bookingDetails } });
    } catch (error) {
      console.error('Error sending booking confirmation:', error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <ul className="no-bullets"> 
        <li><strong>Movie Name:</strong> {bookingDetails.selectedMovie}</li>
        <li><strong>Screen Name:</strong> {bookingDetails.selectedScreen}</li>
        <li><strong>Showtime:</strong> {bookingDetails.selectedShowtime}</li>
        <li><strong>Selected Seat Number:</strong> {bookingDetails.selectedSeats.join(", ")}</li>
        <li><strong>Total Price:</strong> ₹{bookingDetails.totalPrice}</li>
      </ul>
      <Elements stripe={stripePromise}>
        <CheckoutForm 
          clientSecret={clientSecret} 
          bookingDetails={bookingDetails} 
          handleBookingConfirmation={handleBookingConfirmation} 
        />
      </Elements>
    </div>
  );
};

const CheckoutForm = ({ clientSecret, bookingDetails, handleBookingConfirmation }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded yet.');
      setLoading(false);
      return;
    }

    if (!clientSecret) {
      setError('Failed to retrieve payment details. Please try again.');
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      await handleBookingConfirmation({ email, bookingDetails });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit" disabled={!stripe || loading} className="submit-button">
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Payment;