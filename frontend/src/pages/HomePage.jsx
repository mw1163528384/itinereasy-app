// HomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HomePage.css';
import menu_logo from '../assets/images/menu-logo.png';

const HomePage = () => {
  const location = useLocation();
  const generatedItinerary = location.state?.generatedItinerary;

  const handleAddTripClick = () => {
    navigate('/newTrip');
  };

  return (
    <div>
      {generatedItinerary ? (
        <div className='body'>
          {/* Display the generated itinerary data */}
          <h2>Generated Itinerary</h2>
          <pre>{JSON.stringify(generatedItinerary, null, 2)}</pre>
        </div>
      ) : (
        <div className='body'>
          <button onClick={handleAddTripClick} id="addTrip-btn" className='addTrip-btn'>
            Click here to add a new trip
          </button>
        </div>
      )}
    </div>
  );
};

export { HomePage };