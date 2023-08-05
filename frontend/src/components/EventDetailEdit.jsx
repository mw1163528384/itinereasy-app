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
  const [operatingTime, setOperatingTime] = useState(event.operatingTime);
  const [cost, setCost] = useState(event.cost);
  const [transport, setTransport] = useState(event.transport);
  const [website, setWebite] = useState(event.website);
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
        operatingTime: operatingTime,
        cost: cost,
        transport: transport,
        website: website,
        notes: notes
    });
  }

  return (
    <div>
        <div className='body'>
            <form onSubmit={handleEditSubmit} className='eventdetail-edit-form'>
                <div className='eventdetail-edit-topbar'>
                    <label className='eventdetail-edit-title'>
                        <input value={title} onChange={e => setTitle(e.target.value)}/>
                    </label>
                    
                    <button className='eventdetail-edit-close' onClick={onEditClose}>
                        <img src={close_icon} alt='edit-close'/>
                    </button>
                </div>
                
                <div className='eventdetail-edit-content'>
                    <label className='eventdetail-edit-date'>
                        <img src={calendar_icon} alt='edit-calendar'/>
                        Date & Time
                        <input value={date} onChange={e => setDate(e.target.value)}/>
                        <input value={start} onChange={e => setStart(e.target.value)}/>
                        <input value={end} onChange={e => setEnd(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-location'>
                        <img src={location_pin} alt='edit-location'/>
                        Location
                        <input value={location} onChange={e => setLocation(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-operatingTime'>
                        <img src={time_icon} alt='edit-time'/>
                        Opening Hours
                        <input value={operatingTime} onChange={e => setOperatingTime(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-cost'>
                        <img src={cost_icon} alt='edit-cost'/>
                        Cost Estimate
                        <input value={cost} onChange={e => setCost(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-transportation'>
                        <img src={transport_icon} alt='edit-transportation'/>
                        Transportation
                        <input value={transport} onChange={e => setTransport(e.target.value)}/>
                    </label>

                    <label className='eventdetail-edit-website'>
                        <img src={language_icon} alt='edit-website'/>
                        Website
                        <input value={website} onChange={e => setWebite(e.target.value)}/>
                    </label>
                    
                    <label className='eventdetail-edit-notes'>
                        <img src={notebook_icon} alt='edit-notes'/>
                        Notes
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