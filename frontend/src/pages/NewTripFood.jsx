import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripFood.css';
import { NewTripFooter } from '../components/NewTripFooter';
import closingIcon from '../assets/images/close-icon.png';

const NewTripFood = () => {
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [currentFood, setCurrentFood] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (currentFood.trim() !== '') {
        setFoodList((prevFoodList) => [...prevFoodList, currentFood]);
        setCurrentFood(''); // Clear the input after adding the food
      }
    }
  };
  
  const handleClick = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(selectedButtons.filter(b => b !== button));
    } else {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const handleFoodPreferencesChange = (event) => {
    setCurrentFood(event.target.value);
  };

  const handleBack = () => {
    navigate('/tripActivities');
  };

  const handleNext = () => {
    const userPreferences = {
      foodType: selectedButtons,
      specificFoodPreferences: foodList,
    };
    navigate('/tripGenerate', { state: { userPreferences } });
  };

  const buttons = ["Local", "Korean", "Chinese", "Burgers", "Spam musubi", "Japanese", "Shaved ice"];

  return (
    <div>
      <div className='body'>
        <div className='body-food'>
        <img 
            src={closingIcon} 
            alt="Close" 
            className="closing-btn" 
            onClick={() => navigate("/homePage")} 
        />
          <h2>Food</h2>
          <h5>Food preferences</h5>
          <p>Add your favourite food preferences below, or specific dishes you want to try abroad.</p>

          <div className='food-type-selection'>
            {buttons.map(button => (
              <button 
                key={button}
                onClick={() => handleClick(button)}
                className={selectedButtons.includes(button) ? 'selected' : ''} // Add 'selected' class if the button is selected
              >
                {button}
              </button>
            ))}
          </div>

          <div className='new-food-box'>
          {foodList.map((foodItem, index) => (
            <div key={index} className='new-food-content'>
            {foodItem}
            </div>
          ))}
          </div>

          <label className='add-food'>
            <input type='text' value={currentFood} onKeyDown={handleKeyDown} onChange={handleFoodPreferencesChange} placeholder='Type here to add food' />
          </label>

          <NewTripFooter handleBack={handleBack} handleNext={handleNext} isFoodPage={true} />   
        </div>
      </div>
    </div>
  );
}

export { NewTripFood };

