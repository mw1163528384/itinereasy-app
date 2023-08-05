// HomePage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../styles/HomePage.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import sorry_img from '../assets/images/sorry-img.png';
import { AddTripButton } from '../components/AddTripButton';
import { HomePageHeader } from '../components/HomePageHeader';
import { EventDetail } from '../components/EventDetail';
import { EventEdit } from '../components/EventDetailEdit';
import { EventBox } from '../components/EventBox';

const HomePage = () => {
    const [userItinerary, setuserItinerary] = useState(null);
    const location = useLocation();
    const generatedItinerary = location.state?.generatedItinerary;
    const [events, setEvents] = useState([]);
    const [isEventDetailOpen, setEventDetailOpen] = useState(false);
    const [isEventDetailEditOpen, setEventDetailEditOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    
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
      
    const localizer = momentLocalizer(moment);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setEventDetailOpen(true);
    }

    const closeEventDetail = () => {
        setEventDetailOpen(false);
    }

    const openEventDetailEdit = () => {
        setEventDetailOpen(false)
        setEventDetailEditOpen(true);
    }

    const closeEventDetailEdit = () => {
        setEventDetailEditOpen(false);
    }

    return (
        <div>
            <HomePageHeader />

            {generatedItinerary ? (
                    <div className='homepage-body'>
                        <Calendar 
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        views={['week']}
                        style={{height:500}}
                        components={{
                            event: EventBox
                        }}
                        onSelectEvent={handleEventClick} 
                    />
                        <pre>{JSON.stringify(generatedItinerary, null, 2)}</pre>

                        <Modal
                            isOpen={isEventDetailOpen}
                            onRequestClose={closeEventDetail}
                            overlayClassName="overlay-eventDetail"
                            className="eventDetail-popup"
                        >
                            <EventDetail 
                            event={selectedEvent}
                            onClose={closeEventDetail}
                            onEdit={openEventDetailEdit}
                            />
                        </Modal>

                        <Modal
                            isOpen={isEventDetailEditOpen}
                            onRequestClose={closeEventDetailEdit}
                            overlayClassName="overlay-eventDetail"
                            className="eventDetail-popup"
                        >
                            <EventEdit
                            event={selectedEvent}
                            onClose={closeEventDetailEdit}
                            />
                        </Modal>
                    </div>
                ) : (
                    <div className='homepage-body-new'>
                        <div className='sorry_img_container'>
                            <img src={sorry_img} alt='sorry_img'/>
                        </div>
                        
                        <div className='sorry_msg_container'>
                            <h3>Oops! Looks like you don't have any itineraries at the moment.</h3>
                        </div>
                        
                        <AddTripButton />
                    </div>
                )
            }
        </div>
    );
}

export { HomePage };
