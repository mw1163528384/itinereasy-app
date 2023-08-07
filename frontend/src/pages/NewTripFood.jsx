import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripFood.css';
import { NewTripFooter } from '../components/NewTripFooter';
import closingIcon from '../assets/images/close-icon.png';
import { useScenario } from '../contexts/ScenarioContext';

const NewTripFood = () => {
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [currentFood, setCurrentFood] = useState('');
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

  console.log('gen itin:', generatedItinerary);
  const allFoods = generatedItinerary ? Object.values(generatedItinerary).flat() : [];
  console.log('allFoods:', allFoods);
  const foodNames = allFoods.map(event => event.Food);


 



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
    navigate('/tripactivitiesTest');
  };

  const handleNext = () => {
    const userPreferences = {
      foodType: selectedButtons,
      specificFoodPreferences: foodList,
    };
    navigate('/tripGenerate', { state: { userPreferences } });
  };

  const handleFoodSelection = (food, event) => {
    if (event.target.checked) {
      if (foodList.length < 5) {
        setFoodList((prevFoodList) => [...prevFoodList, food]);
      } else {
        event.target.checked = false;
        alert('You can only select up to 5 food options.');
      }
    } else {
      setFoodList((prevFoodList) => prevFoodList.filter((f) => f !== food));
    }
  };

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
          <p>Likewise, add up to 5 preferred food options below and we'll suggest similar ones for you!</p>

          <div className='food-type-selection' style={{ maxHeight: '200px', overflowY: 'scroll' }}>
            {foodNames.map((food, index) => (
              food && (
                <div key={index}>
                  <input
                    type='checkbox'
                    id={`food-${index}`}
                    name={food}
                    value={food}
                    onChange={(event) => handleFoodSelection(food, event)}
                  />
                  <label htmlFor={`food-${index}`}>{food}</label>
                </div>
              )
            ))}
          </div>

          <NewTripFooter handleBack={handleBack} handleNext={handleNext} isFoodPage={true} />   
        </div>
      </div>
    </div>
  );
}

export { NewTripFood };
