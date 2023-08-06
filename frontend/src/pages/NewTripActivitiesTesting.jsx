import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripActivities.css';
import { NewTripFooter } from '../components/NewTripFooter';
import closingIcon from '../assets/images/close-icon.png';

const ActivityTestingPage = () => {
  const navigate = useNavigate();
  const [selectedNoActivities, setSelectedNoActivities] = useState('');
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState('');
  const presetActivities = ['Cycling', 'Beaches', 'Night markets', 'Museums', 'Hiking', 'Shopping'];

  const handleNoActivitiesChange = (event) => {
    setSelectedNoActivities(event.target.value);
  };

  const handleActivitiesChange = (event) => {
    setCurrentActivity(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (currentActivity.trim() !== '') {
        setActivities((prevActivities) => [...prevActivities, currentActivity]);
        setCurrentActivity(''); // Clear the input after adding the activity
      }
    }
  };

  const handleBack = () => {
    navigate('/tripDetail');
  };

  const handleNext = () => {
    // Create the userPreferences object with collected data
    const userPreferences = {
      activitiesPerDay: selectedNoActivities,
      activityPreferences: activities,
    };

    // Pass userPreferences to the next component (e.g., NewTripDetail)
    navigate('/tripFood', { state: { userPreferences } });
  };

    return (
        <div>
            <div className='body'>
                <div className='body-activities'>
                <img 
                    src={closingIcon} 
                    alt="Close" 
                    className="closing-btn" 
                    onClick={() => navigate("/homePage")} 
                />
                    <h2>Activities</h2>
                    <p>Fill in the number of activities you would like to do in a day</p>
                    
                    <select value={selectedNoActivities} onChange={handleNoActivitiesChange} placeholder='Number of activities per day'>
                        <option value=""></option>
                        <option value="0 (I'd like to plan myself)">0 (I'd like to plan myself)</option>
                        <option value="1 to 2 per day">1 to 2 per day</option>
                        <option value="3 to 4 per day">3 to 4 per day</option>
                        <option value="More than 4">More than 4</option>
                        <option value="Unspecified">Unspecified</option>
                    </select>

          <h5>Activity preferences</h5>
          <p>
            Add activities or sights you would like to do/see.
            <br />
          </p>
          <br />
          <br />

          <div className='preset-activities'>
            {presetActivities.map((activity, index) => (
              <div key={index}>
                <input
                  type='checkbox'
                  id={`activity-${index}`}
                  name={activity}
                  value={activity}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setActivities((prevActivities) => [...prevActivities, activity]);
                    } else {
                      setActivities((prevActivities) => prevActivities.filter((a) => a !== activity));
                    }
                  }}
                />
                <label htmlFor={`activity-${index}`}>{activity}</label>
              </div>
            ))}
          </div>

          <label className='add-activities'>
            <input
              type='text'
              value={currentActivity}
              onChange={handleActivitiesChange}
              onKeyDown={handleKeyDown}
              placeholder='Type here to add activities'
            />
            <button 
              onClick={() => {
                if (currentActivity.trim() !== '') {
                  setActivities((prevActivities) => [...prevActivities, currentActivity]);
                  setCurrentActivity(''); // Clear the input after adding the activity
                }
              }}
            >
              Add activity
            </button>
          </label>


          <NewTripFooter handleBack={handleBack} handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export { ActivityTestingPage };
