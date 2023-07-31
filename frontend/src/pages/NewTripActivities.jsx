import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTripActivities.css';
import { NewTripFooter } from '../components/NewTripFooter';

const NewTripActivities = () => {
    const navigate = useNavigate()
    const [selectedNoActivities, setSelectedNoActivities] = useState('');
    const [location, setLocation] = useState('');
    
    const handleNoActivitiesChange = (event) => {
        setSelectedNoActivities(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleBack = () => {
        navigate('/tripDetail');
    }

    const handleNext = () => {
        navigate('/tripFood');
    }    

    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <h2>Activities</h2>
                    <p>Fill in the number of activities you would like to do in a day</p>
                    
                    <select value={selectedNoActivities} onChange={handleNoActivitiesChange} placeholder='Number of activities per day'>
                        <option value=""></option>
                        <option value="">0 (I'd like to plan myself)</option>
                        <option value="">1 to 2 per day</option>
                        <option value="">3 to 4 per day</option>
                        <option value="">More than 4</option>
                        <option value="">Unspecified</option>
                    </select>

                    <h5>Activity preferences</h5>
                    <p>
                        Add activities or sights you would like to do/see. 
                        <br/>e.g. Cycling, Beaches, Night markets, Etc.
                    </p>

                    <label className='add-activities'>
                        <input type='text' value={location} onChange={handleLocationChange} placeholder='Type here to add activities' />
                    </label>

                    <NewTripFooter handleBack={handleBack} handleNext={handleNext} />   
                </div>
            </div>
        </div>
    );
}

export { NewTripActivities }