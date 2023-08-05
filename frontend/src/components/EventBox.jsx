import React from 'react';

const EventBox = ({ event, handleEventClick }) => {
  const { title, location, startTime, endTime } = event;
  
  const eventDuration = (new Date(endTime) - new Date(startTime)) / 3600000;

  // Define height for a one-hour event
  {/* Please help adjust */}
  const hourHeight = 60;  // e.g. 60px for one hour

  // Calculate event box height
  const eventBoxHeight = eventDuration * hourHeight;

  return (
    <div style={{ height: `${eventBoxHeight}px`}} 
          className='eventBox-container'
          onClick={() => handleEventClick(event)}>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{`${startTime} - ${endTime}}`}</p>
    </div>
  )
};

export{ EventBox };
