import React from 'react';
import moment from 'moment';

const EventBox = ({ event }) => {
  // Check if event is undefined
  if (!event) {
    console.error('Event is undefined.');
    return <div>Event is undefined.</div>;
  }

  // Destructure properties from the event object
  const { title, start, end, cost, transportation } = event;

  // Calculate event duration in hours
  const eventDuration = (new Date(end) - new Date(start)) / 3600000;

  // Define height for a one-hour event
  const hourHeight = 60;  // e.g. 60px for one hour

  // Calculate event box height
  const eventBoxHeight = eventDuration * hourHeight;

  return (
    <div style={{ height: `${eventBoxHeight}px`}} 
          className='eventBox-container'>
      <h3>{title || 'No Title'}</h3> {/* Use a default value if title is not provided */}
      <p>{cost}</p>
      <p>{transportation}</p>
      <p>{`${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`}</p>
    </div>
  )
};

export {EventBox};

