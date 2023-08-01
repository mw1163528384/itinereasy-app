import React from 'react';
import ai_logo from '../assets/images/ai-logo.png';
import { useNavigate } from "react-router-dom";
import '../styles/NewTrip.css';

const NewTrip = () => {
    const navigate = useNavigate()
    const handleStart = async() => {
        navigate("/tripType")
    }
    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <img src={ai_logo} alt='ai-logo'/>
                </div>

                <div className='body-description'>
                    <h2 className='trip-heading'>New Trip!</h2>

                    <p class="trip-description">
                        Fill in your trip details and preferences so that we can generate an Itinerary for you using AI!
                    </p>
                </div>

                <button onClick={handleStart} id="start-btn" className='start-btn'> Start! </button>
            </div>
        </div>
    );
}

export { NewTrip }