import React from 'react';

const ActivityBox = ({ activityTime }) => {
  // Define the base size
  const baseSize = 100;

  // Calculate the new size based on the activity time
  // In this example, each minute of activity time adds 1 pixel to the size
  const newSize = baseSize + activityTime;

  // Create a style object that sets the width and height
  const style = {
    width: `${newSize}px`,
    height: `${newSize}px`,
    border: '1px solid black',
    margin: '10px',
  };

  return <div style={style}></div>;
};

export default ActivityBox;
