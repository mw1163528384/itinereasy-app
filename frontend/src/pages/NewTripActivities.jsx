import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripActivities.css';
import { NewTripFooter } from '../components/NewTripFooter';

const NewTripActivities = () => {
    const navigate = useNavigate();
    const [selectedNoActivities, setSelectedNoActivities] = useState('');
    const [activities, setActivities] = useState('');

  const handleNoActivitiesChange = (event) => {
    setSelectedNoActivities(event.target.value);
  };

  const handleActivitiesChange = (event) => {
    setActivities(event.target.value);
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
            <br/>e.g. Cycling, Beaches, Night markets, Etc.
          </p>

          <label className='add-activities'>
            <input type='text' value={activities} onChange={handleActivitiesChange} placeholder='Type here to add activities' />
          </label>

          <NewTripFooter handleBack={handleBack} handleNext={handleNext} />   
        </div>
      </div>
    </div>
  );
}

export { NewTripActivities };