import React, { useState } from 'react';
import '../styles/EventDetailEdit.css';
import close_icon from '../assets/images/close-icon.png';
import location_pin from '../assets/images/location-pin.png';
import time_icon from '../assets/images/time-icon.png';
import cost_icon from '../assets/images/cost-icon.png';
import transport_icon from '../assets/images/transport-icon.png';
import language_icon from '../assets/images/language-icon.png';
import notebook_icon from '../assets/images/notebook-icon.png';
import calendar_icon from '../assets/images/calendar-icon.png';


function EventEdit({ event, onEditSubmit, onEditClose}) {
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [start, setStart] = useState(event.start);
  const [end, setEnd] = useState(event.end);
  const [location, setLocation] = useState(event.location);
  const [cost, setCost] = useState(event.cost);
  const [transportation, setTransportation] = useState(event.transportation);
  const [notes, setNotes] = useState(event.note);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditSubmit({
        ...event,
        title: title,
        date: date,
        start: start,
        end: end,
        location: location,
        cost: cost,
        transport: transportation,
        notes: notes
    });
  }

  return (
    <div>
<<<<<<< HEAD
        <div className='eventedit-body'>
=======
        <div className='eventdetail-edit-body'>
>>>>>>> 10f293df229da43077ef5d67e0dc9127728b3258
            <button className='eventdetail-edit-close' onClick={onEditClose}>
                <img src={close_icon} alt='edit-close'/>
            </button>
            <form onSubmit={handleEditSubmit} className='eventdetail-edit-form'>
                <label className='eventdetail-edit-title'>
                    <input value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                
                <div className='eventdetail-edit-content'>
                    <label className='eventdetail-edit-date'>
                        <h1>Date & Time</h1>
                        <img src={calendar_icon} alt='edit-calendar'/>
<<<<<<< HEAD
                        <input className="dateInput" value={date} onChange={e => setDate(e.target.value)}/>
                        <input className="startInput" value={start} onChange={e => setStart(e.target.value)}/>
                        <input className="endInput" value={end} onChange={e => setEnd(e.target.value)}/>
=======
                        <input className="calendar" value={date} onChange={e => setDate(e.target.value)}/>
                        <input className="startDate" value={start} onChange={e => setStart(e.target.value)}/>
                        <input className="endDate" value={end} onChange={e => setEnd(e.target.value)}/>
>>>>>>> 10f293df229da43077ef5d67e0dc9127728b3258
                    </label>

                    <label className='eventdetail-edit-location'>
                        <h1>Location</h1>
                        <img src={location_pin} alt='edit-location'/>
                        <input value={location} onChange={e => setLocation(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-operatingTime'>
                        <h1>Opening Hours</h1>
                        <img src={time_icon} alt='edit-time'/>
                        <input className="startTime" value="8.00am"/>
                        <p>to</p>
                        <input className="endTime" value="9.30pm" />
                    </label>

                    <label className='eventdetail-edit-cost'>
                        <h1>Cost Estimate</h1>
                        <img src={cost_icon} alt='edit-cost'/>
                        <input value={cost} onChange={e => setCost(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-transportation'>
                        <h1>Transportation</h1>
                        <img src={transport_icon} alt='edit-transportation'/>
                        <input value={transportation} onChange={e => setTransportation(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-website'>
                        <h1>Website</h1>
                        <img src={language_icon} alt='edit-website'/>
                        <input value="www.itinerasy.com"/>
                    </label>
                    
                    <label className='eventdetail-edit-notes'>
                        <h1>Notes</h1>
                        <img src={notebook_icon} alt='edit-notes'/>
                        <input value={notes} onChange={e => setNotes(e.target.value)}/>
                    </label>
                </div>
            
                <button className='saveEditBtn'>Save</button>
            </form>
        </div>
    </div>
  );
}

export{ EventEdit };