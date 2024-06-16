import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import MovieSelection from "./components/MovieSelection";
import SeatSelection from "./components/SeatSelection";
import Payment from "./components/payments";
import Confirmation from "./components/Confirmation";
import { AuthProvider, useAuth } from "./context/Auth";
import About from "./components/about";
import Contact from "./components/contact";
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppWithNavbarAndFooter />
      </Router>
    </AuthProvider>
  );
};

const AppWithNavbarAndFooter = () => {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<MovieSelection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/SeatSelection"
          element={<ProtectedRoute element={<SeatSelection />} />}
        />
        <Route path="/movies" element={<MovieSelection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

const ProtectedRoute = ({ element }) => {
  const [auth] = useAuth();
  return auth.token ? element : <Navigate to="/login" />;
};

export default App;
