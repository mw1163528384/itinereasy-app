import React from 'react';
import '../styles/EventDetail.css';
import moment from 'moment';
import trash_icon from '../assets/images/trash-icon.png';
import close_icon from '../assets/images/close-icon.png';
import location_pin from '../assets/images/location-pin.png';
import time_icon from '../assets/images/time-icon.png';
import cost_icon from '../assets/images/cost-icon.png';
import transport_icon from '../assets/images/transport-icon.png';
import language_icon from '../assets/images/language-icon.png';
import notebook_icon from '../assets/images/notebook-icon.png';
import replace_icon from '../assets/images/replace-icon.png';
import edit_icon from '../assets/images/edit-icon.png';

function EventDetail({ event, toggleEventEdit, handleEventDetailClose }) {
    if (!event) {
        return null
    }

  return (
    <div>
        <div className='body'>
            <header className='eventdetail-header-container'>
            {/* Image get from database? ---- check */}
                <div className='eventdetail-header-btn'>
                    <button>
                        <img src={trash_icon} alt='trash-icon' />
                    </button>
                    <button onClick={handleEventDetailClose}>
                        <img src={close_icon} alt='close-icon' />
                    </button>
                </div>
            </header>
            
            <div className='eventdetail-container'>
                <div className='event-detail-basic'>
                    <h2>{event.title}</h2>
                    <p>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</p>
                </div>
                <div className='event-detail-more'>
                    <div className='event-location'>
                        <img src={location_pin} alt='location-pin' />
                        <p>{event.location}</p>
                    </div>
                    
                    <div className='event-operating-time'>
                        <img src={time_icon} alt='time-icon' />
                        <p>{event.operatingTime}</p>
                    </div>
                    
                    <div className='event-cost'>
                        <img src={cost_icon} alt='cost-icon' />
                        <p>{event.cost}</p>
                    </div>
                    
                    <div className='event-transport'>
                        <img src={transport_icon} alt='transport-icon' />
                        <p>{event.transport}</p>
                    </div>
                    
                    <div className='event-website'>
                        <img src={language_icon} alt='website-icon' />
                        <p>{event.website}</p>
                    </div>
                    
                    <div className='event-note'>
                        <img src={notebook_icon} alt='notebook-icon' />
                        <p>{event.note}</p>
                    </div>
                </div>
            </div>

            <footer className='eventdetail-footer-container'>
                <button className='replaceBtn'>
                    <img src={replace_icon} alt='replace-icon' />
                    Replace
                </button>

                <button className='editBtn' onClick={toggleEventEdit}>
                    <img src={edit_icon} alt='edit-icon' />
                    Edit
                </button>

            </footer>
        </div>
    </div>
  );
}

export{ EventDetail };