import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css';
import menu_logo from '../assets/images/menu-logo.png'

const HomePage = (getUserItineraryFromServer) => {
    const navigate = useNavigate()
    const [userItinerary, setuserItinerary] = useState(null);
    
    useEffect(() => {
        fetchUserItinerary();
    }, [])

    const fetchUserItinerary = async () => {
        const itinerary = await getUserItineraryFromServer();
        setuserItinerary(itinerary);
    }

    const handleAddTripClick = async() => {
        navigate('/');
    }

    return (
        <div>
            {userItinerary ? (
            <div className='body'>

                <div className='put your generated itinerary here!'> </div>

            </div>
            ) : (
            <div className='body'>
                <button onClick={handleAddTripClick} id="addTrip-btn" className='addTrip-btn'> Click here to add new trip </button>
            </div>
            )}
        </div>
    );
}

export { HomePage }