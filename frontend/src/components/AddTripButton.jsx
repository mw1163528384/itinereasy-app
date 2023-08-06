import React from 'react';
import { useNavigate } from 'react-router-dom';
import add_ring from '../assets/images/add_ring_fill.png';
import '../styles/AddTripButton.css';


function AddTripButton() {
  const navigate = useNavigate()
  const handleAddTripClick = async() => {
    navigate('/newTrip')
  }

  return (
    <div>
      <div className='addTrip_btn_container'>
          <button onClick={handleAddTripClick} id="addTrip-btn" className='addTrip-btn'> 
              <img src={add_ring} alt='add_ring'/>
              Click here to add new trip 
          </button>
      </div>
    </div>
  );
}

export{ AddTripButton };