import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripFood.css';
import { NewTripFooter } from '../components/NewTripFooter';

const NewTripFood = () => {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState(null);
    const [foodPreferences, setFoodPreferences] = useState('');

    const handleClick = (button) => {
        setSelectedButton(button);
    };

    const handleFoodPreferencesChange = (event) => {
        setFoodPreferences(event.target.value);
    };

    const handleBack = () => {
        navigate('/tripActivities');
    };

    const handleNext = () => {
        // Pass the collected data to the next step
        navigate('/tripGenerate', { state: { selectedButton, foodPreferences } });
    };

    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <h2>Food</h2>
                    <h5>Food preferences</h5>
                    <p>Add your favourite food preferences below, or specific dishes you want to try abroad.</p>
                    <div className='food-type-selection'>
                        <button onClick={() => handleClick("Local")}>Local</button>
                        <button onClick={() => handleClick("Korean")}>Korean</button>
                        <button onClick={() => handleClick("Chinese")}>Chinese</button>
                        <button onClick={() => handleClick("Burgers")}>Burgers</button>
                        <button onClick={() => handleClick("Spam musubi")}>Spam musubi</button>
                        <button onClick={() => handleClick("Japanese")}>Japanese</button>
                        <button onClick={() => handleClick("Shaved ice")}>Shaved ice</button>
                    </div>
                    <label className='add-food'>
                        <input type='text' value={foodPreferences} onChange={handleFoodPreferencesChange} placeholder='Type here to add food' />
                    </label>
                    <NewTripFooter handleBack={handleBack} handleNext={handleNext} isFoodPage={true} />   
                </div>
            </div>
        </div>
    );
}

export { NewTripFood };