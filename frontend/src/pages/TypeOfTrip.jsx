import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/TypeOfTrip.css';

const TypeOfTrip = ({ onNext, onBack }) => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleGo = async () => {
        const newData = {
            location
          };
          onNext(newData);
      };

    return (
        <div>
            <div className='body'>
                <div className='body-type'>
                    <h2>What is the purpose of your trip?</h2>
                    <div className='body-description'>
                        <h3>Where are you headed to?</h3>

                        <label className='Location'>
                            <input type='text' value={location} onChange={handleLocationChange} placeholder='Enter City/state/country' />
                        </label>
                    </div>

                    <button onClick={handleGo} className='letsgo-btn'> Let's go! </button>
                </div>
            </div>
        </div>
    );
}

export { TypeOfTrip };