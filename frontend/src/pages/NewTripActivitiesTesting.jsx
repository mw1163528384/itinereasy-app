import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripActivities.css';
import { NewTripFooter } from '../components/NewTripFooter';
import closingIcon from '../assets/images/close-icon.png';
import { useScenario } from '../contexts/ScenarioContext';

const ActivityTestingPage = () => {
  const navigate = useNavigate();
  const [selectedNoActivities, setSelectedNoActivities] = useState('');
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState('');
  const {scenarioNumber } = useScenario();
  const [generatedItinerary,setGenerateditinerary] = useState(null);

  const fetchData = () => {
    console.log(`Fetching data for scenario: ${scenarioNumber}`);
    fetch(`http://localhost:5001/getData/${scenarioNumber}`)
        .then((response) => {
            if (!response.ok) { 
                throw new Error('Network response was not returned. Check your scenario number!'); 
            }
            return response.json();
        })
        .then((data) => {
            console.log('Itinerary Data:', data);
            setGenerateditinerary(data[0]);
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
  };

  useEffect(() => {
    console.log('Scenario Number:', scenarioNumber);
    fetchData();
  }, [scenarioNumber]);

  const allActivities = generatedItinerary ? Object.values(generatedItinerary).flat() : [];
  const activityNames = allActivities.map(event => event.Activity);

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

  const handleActivitySelection = (activity, event) => {
    if (event.target.checked) {
      if (activities.length < 5) {
        setActivities((prevActivities) => [...prevActivities, activity]);
      } else {
        event.target.checked = false;
        alert('You can only select up to 5 activities.');
      }
    } else {
      setActivities((prevActivities) => prevActivities.filter((a) => a !== activity));
    }
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
            Here are some popular activities in your destination!
            <br />
            Pick up to 5 activities and we'll plan your trip around your selected options!
          </p>
          <br />
          <br />

          <div className='preset-activities' style={{ maxHeight: '200px', overflowY: 'scroll' }}>
            {activityNames.map((activity, index) => (
              activity && activity !== "Business Meeting" && (
                <div key={index}>
                  <input
                    type='checkbox'
                    id={`activity-${index}`}
                    name={activity}
                    value={activity}
                    onChange={(event) => handleActivitySelection(activity, event)}
                  />
                  <label htmlFor={`activity-${index}`}>{activity}</label>
                </div>
              )
            ))}
          </div>

          
          <NewTripFooter handleBack={handleBack} handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export { ActivityTestingPage };
