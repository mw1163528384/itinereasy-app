// HomePage.js
import React, { useState, useEffect } from 'react';
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
    const [generatedItinerary,setGenerateditinerary] = useState(null);
    const scenarioNumber = 1; //JANICE CHANGE THIS TO BE VARIABLE!!!!!!!!!!
    const [events, setEvents] = useState([]);
    const [isEventDetailOpen, setEventDetailOpen] = useState(false);
    const [isEventDetailEditOpen, setEventDetailEditOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    
    const fetchData = () => {
        setIsLoading(true); // Set loading state to true when fetching data
        console.log(`Fetching data for scenario: ${scenarioNumber}`);
        fetch(`http://localhost:5001/getData/${scenarioNumber}`)
            .then((response) => {
                if (!response.ok) { 
                    throw new Error('Network response was not ok'); 
                }
                return response.json();
            })
            .then((generatedItinerary) => {
                console.log('Itinerary Data:', generatedItinerary);
                setGenerateditinerary(generatedItinerary);
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    };
    
    useEffect(() => {
        fetchData();
    }, [scenarioNumber]);
    


    useEffect(() => {
        if (generatedItinerary) {
            console.log('Scenario Data:', generatedItinerary);
    
            try {
                const itinerary1 = generatedItinerary[0];
                console.log('Generated Itinerary:', itinerary1);
    
                if (itinerary1) {
                    const formattedEvents = [];
    
                    // Loop through all days in the itinerary
                    for (const day in itinerary1) {
                        const activities = itinerary1[day];
    
                        // Loop through all activities in the day
                        for (const activity of activities) {
                            console.log('Activity:', activity);
    
                            const title = activity.Activity || activity.Food;
                            if (title && title.trim() !== '' && activity.Time) {
                                const timeParts = activity.Time.split(' - ');
                                const formattedEvent = {
                                    title: title,
                                    start: timeParts[0],
                                    end: timeParts[1],
                                    cost: activity.Cost,
                                    transportation: Array.isArray(activity.Transportation) ? [].concat(...activity.Transportation).join(', ') : activity.Transportation || "Not provided",
                                };
                                console.log('Formatted event:', formattedEvent);
                                formattedEvents.push(formattedEvent);
                            } else {
                                console.error('Missing required itinerary item properties for activity:', activity);
                                throw new Error('Missing required itinerary item properties');
                            }
                        }
                    }
    
                    setEvents(formattedEvents);
                    setIsLoading(false); // Set loading state to false when data has been loaded and formatted
                }
            } catch (error) {
                console.error('Error formatting events:', error);
            }
        }
    }, [generatedItinerary]);
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
      
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

            {isLoading ? (
                <div>Loading...</div> // Display loading message while data is being fetched
            ) : generatedItinerary ? (
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
