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
import { useScenario } from '../contexts/ScenarioContext';


const HomePage = () => {
    const [generatedItinerary,setGenerateditinerary] = useState(null);
    const [itineraryIndex, setItineraryIndex] = useState(0);
    const { scenarioNumber } = useScenario();
    const [events, setEvents] = useState([]);
    const [scenarioStartDate, setScenarioStartDate] = useState(new Date());
    const [isEventDetailOpen, setEventDetailOpen] = useState(false);
    const [isEventDetailEditOpen, setEventDetailEditOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    const [pageToggle, setpageToggle] = useState(false);
    const localizer = momentLocalizer(moment);


    const fetchData = () => {
        setIsLoading(true); // Set loading state to true when fetching data
        console.log(`Fetching data for scenario: ${scenarioNumber}`);
        fetch(`http://localhost:5001/getData/${scenarioNumber}`)
            .then((response) => {
                if (!response.ok) { 
                    throw new Error('Network response was not returned. Check your scenario number!'); 
                }
                return response.json();
            })
            .then((generatedItinerary) => {
                console.log('Itinerary Data:', generatedItinerary);
                setGenerateditinerary(generatedItinerary);
                let allDates = [];
                for(let scenario of generatedItinerary){
                    allDates = [...allDates, ...Object.keys(scenario)];
                }
                allDates.sort();
                setScenarioStartDate(new Date(allDates[0].split("-").reverse().join("-")));
            })
            .catch((error) => {
                setIsLoading(false);
                setpageToggle(false);
                console.error('An error occurred:', error);
            });
    };
    
    useEffect(() => {
        fetchData();
    }, [scenarioNumber]);

    useEffect(() => {
        const itinerary = generatedItinerary?.[itineraryIndex];
        if (itinerary) {
            console.log('Scenario Data:', generatedItinerary);
            console.log('Generated Itinerary:', itinerary);
    
            try {   
                const formattedEvents = [];
                // Loop through all days in the itinerary
                for (const day in itinerary) {
                    const activities = itinerary[day];

                    // Loop through all activities in the day
                    for (const activity of activities) {
                        console.log('Activity:', activity);
                    
                        // Inside the loop processing your activities
                            const title = activity.Activity || activity.Food || 'No Title'; // add default title
                            if (title && title.trim() !== '') {
                                const timeParts = activity.Time.split(' - ');

                                const [dayPart, month, year] = day.split('-');
                                const startDate = new Date(year, month - 1, dayPart); // JS counts months from 0
                                const endDate = new Date(year, month - 1, dayPart);
                                

                                // Extract hours, minutes and AM/PM from start and end times
                                const [startHours, startMinutesPart] = timeParts[0].split(':');
                                const [startMinutes, startAmPm] = startMinutesPart.split(' ');
                                console.log('Start time init:', parseInt(startHours),startMinutes);

                                const [endHours, endMinutesPart] = timeParts[1].split(':');
                                const [endMinutes, endAmPm] = endMinutesPart.split(' ');
                                console.log('End time init:', parseInt(endHours),endMinutes);

                                // Adjust hours based on AM/PM
                                const startHoursAdjusted = startAmPm.toUpperCase() === 'PM' && parseInt(startHours) !== 12 ? parseInt(startHours) + 12 : startHours;
                                const endHoursAdjusted = endAmPm.toUpperCase() === 'PM' && parseInt(endHours) !== 12 ? parseInt(endHours) + 12 : endHours;
                                console.log('Start time:', startHoursAdjusted,startMinutes);
                                console.log('End time:', endHoursAdjusted,endMinutes);

                                // Create new start and end date objects with merged date and time
                                const startDateTime = new Date(startDate.setHours(startHoursAdjusted, parseInt(startMinutes)));
                                const endDateTime = new Date(endDate.setHours(endHoursAdjusted, parseInt(endMinutes)));

                                // Adjust the time to the local time zone
                                //startDateTime.setMinutes(startDateTime.getMinutes() - startDateTime.getTimezoneOffset());
                                //endDateTime.setMinutes(endDateTime.getMinutes() - endDateTime.getTimezoneOffset());


                                const formattedEvent = {
                                    title: String(title),
                                    start: startDateTime,
                                    end: endDateTime,
                                    cost: activity.Cost,
                                    transportation: Array.isArray(activity.Transportation) ? [].concat(...activity.Transportation).join(', ') : activity.Transportation || "Not provided",
                                };
                                //console.log('Formatted event:', formattedEvent);
                                formattedEvents.push(formattedEvent);
                                setpageToggle(true)  //set me if itinerary is generated
                            } else {
                                console.error('Missing required itinerary item properties for activity:', activity);
                                throw new Error('Missing required itinerary item properties');
                            }

                    
                        // Check if title is missing or empty
                        if (!title || title.trim() === '') {
                            console.log('Activity without title:', activity);
                        }
                        }
                        
                        
                    }
    
                    setEvents(formattedEvents);
                    setIsLoading(false); // Set loading state to false when data has been loaded and formatted
                }
            catch (error) {
                console.error('Error formatting events:', error);
            }
        }
        
    }, [generatedItinerary,itineraryIndex]);

  

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
        setEventDetailOpen(true);
    }

    const handleRegenerateClick = () => {
        if (itineraryIndex === 0) {
            setItineraryIndex(parseInt(1));
        
        }
        else {
            setItineraryIndex(parseInt(0));
        
        }

        

    }

    console.log('itineraryIndex:', itineraryIndex);

    return (
        <div>
            <HomePageHeader 
                generatedItinerary={generatedItinerary}
                handleRegenerateClick={handleRegenerateClick}/>
            {isLoading ? (
                <div>Fetching itinerary data...</div> // Display loading message while data is being fetched
            ) : pageToggle? (
                        <div className='homepage-body'>
                            {/*{console.log('Events:', events)} {/* Log events here */}
                            {/*{events.forEach((event, index) => console.log(`Title at index ${index}:`, event.title))}*/}
                            <Calendar 
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                defaultView='day'
                                style={{height:800}}
                                components={{
                                    event: EventBox
                                }}
                                onSelectEvent={handleEventClick}
                                defaultDate={scenarioStartDate}
                                eventPropGetter= {
                                    (event, start, end, isSelected) => {
                                        let newStyle = {
                                            backgroundColor: "#FFA800",
                                            color: 'black',
                                            borderRadius: "10px",
                                            border: "none",
                                        };
                            
                                        return {
                                            className: "",
                                            style: newStyle
                                        };
                                    }
                                }
                            />

                            <Modal
                                isOpen={isEventDetailOpen}
                                onRequestClose={closeEventDetail}
                                overlayClassName="overlay-eventDetail"
                                className="eventDetail-popup"
                            >
                                <EventDetail 
                                event={selectedEvent}
                                onEventDetailClose={closeEventDetail}
                                onEventEdit={openEventDetailEdit}
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
                                onEditClose={closeEventDetailEdit}
                                />
                            </Modal>
                        </div>
                ) :  (


                    <div className='homepage-body-new'>
                        <div className='sorry_img_container'>
                            <img src={sorry_img} alt='sorry_img'/>
                        </div>
                        
                        <div className='sorry_msg_container'>
                            <h3>Oops! Looks like you don't have any itineraries at the moment.</h3>
                        </div>
                        
                        <AddTripButton className="homepage-addtripBtn"/>
                    </div>

                )
            }
        </div>
    );
}

export { HomePage };
