// HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/HomePage.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import sorry_img from '../assets/images/sorry-img.png';
import add_ring from '../assets/images/add_ring_fill.png';
import { HomePageHeader } from '../components/HomePageHeader';

const HomePage = () => {
    const navigate = useNavigate();
    const [userItinerary, setuserItinerary] = useState(null);
    const location = useLocation();
    const generatedItinerary = location.state?.generatedItinerary;
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetchUserItinerary();
    }, []);

    const fetchUserItinerary = async () => {
        try {
            const response = await fetch('/api/userItinerary');
            if (!response.ok) {
                throw new Error("Failed to fetch user itinerary");
            }

            const data = await response.json();
            setuserItinerary(data);
        } catch(error) {
            console.error('Error fetching user itinerary:', error);
        }
    }
    
    useEffect(() => {
        if (userItinerary) {
            const formattedEvents = userItinerary.map((item) => ({
                title: item.title,
                start: new Date(item.startDate),
                end: new Date(item.endDate),
            }));
            setEvents(formattedEvents);
        }
    }, [userItinerary])

    const handleAddTripClick = () => {
        navigate('/');
    };
      
    const localizer = momentLocalizer(moment);

    return (
        <div>
            <HomePageHeader generatedItinerary={generatedItinerary} />

            {generatedItinerary ? (
                <div className='homepage-body'>
                    <Calendar 
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={['week']}
                    style={{height:500}} 
                />
                <pre>{JSON.stringify(generatedItinerary, null, 2)}</pre>

                </div>
            ) : (
            <div className='homepage-body-new'>
                <div className='sorry_img_container'>
                    <img src={sorry_img} alt='sorry_img'/>
                </div>
                
                <div className='sorry_msg_container'>
                    <h3>Oops! Looks like you don't have any itineraries at the moment.</h3>
                </div>
                
                <div className='addTrip_btn_container'>
                    <button onClick={handleAddTripClick} id="addTrip-btn" className='addTrip-btn'> 
                        <img src={add_ring} alt='add_ring'/>
                        Click here to add new trip 
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}

export { HomePage };
