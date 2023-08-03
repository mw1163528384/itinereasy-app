import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactSlider from 'react-slider';
import ActivityBox from '../components/ActivitiesBox';

const ItineraryPage = () => {
    const location = useLocation();
    const [events, setEvents] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/itinerary') 
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                const formattedEvents = data.map((item) => ({
                    title: item.title,
                    start: new Date(item.startDate),
                    end: new Date(item.endDate),
                }));
                setEvents(formattedEvents);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const localizer = momentLocalizer(moment)

    const weekStart = moment(currentDate).startOf('week');
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => moment(weekStart).add(i, 'days'));

    const handleNavigate = (newDate) => {
        setCurrentDate(newDate);
    }

    const handleSliderChange = (value) => {
        setCurrentDate(daysOfWeek[value].toDate());
    }

    return (
        <div className='homepage-body'>
            <ReactSlider
                min={0}
                max={6}
                value={daysOfWeek.findIndex(day => day.isSame(currentDate, 'day'))}
                onChange={handleSliderChange}
            />
            <div className="date-row">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="date-item">
                        <button onClick={() => setCurrentDate(day.toDate())}>
                            {day.format('ddd D')}
                        </button>
                    </div>
                ))}
            </div>
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView={Views.DAY}
                views={['day']}
                style={{height:500}}
                date={currentDate}
                onNavigate={handleNavigate}
            />
            {events && events.map((item, index) => {
                // Calculate the duration of the activity in minutes
                const startTime = new Date(item.start);
                const endTime = new Date(item.end);
                const duration = (endTime - startTime) / 60000; // Convert milliseconds to minutes

                return (
                    <div key={index}>
                        <ActivityBox activityTime={duration} />
                        <span>{moment(startTime).format('HH:mm')} - {moment(endTime).format('HH:mm')}:</span>
                        <span>{item.title}</span>
                    </div>
                );
            })}
            <pre>{JSON.stringify(events, null, 2)}</pre>
        </div>
    );
}

export { ItineraryPage };
