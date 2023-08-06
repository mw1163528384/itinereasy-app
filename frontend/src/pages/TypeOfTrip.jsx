import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/TypeOfTrip.css';
import closeIcon from '../assets/images/close-icon.png';
import { useScenario } from '../contexts/ScenarioContext';

const TypeOfTrip = () => {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState(null);
    const { setScenarioNumber } = useScenario();
    const [location, setLocation] = useState('');
    const [activeButton, setActiveButton] = useState(null); // new state

    const scenarios = [
        {location: 'Bali', scenarioNumber: 1},
        {location: 'Hawaii', scenarioNumber: 2},
        {location: 'Amsterdam', scenarioNumber: 3}
    ]

    const handleClick = (button) => {
        setSelectedButton(button);
        setActiveButton(button); // set the active button
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const determineScenarioNumber = () => {
        const matchedScenario = scenarios.find(
          (scenario) =>
            scenario.location.toLowerCase() === location.trim().toLowerCase()
        );
        return matchedScenario ? matchedScenario.scenarioNumber : 1; // Default to 1 if no match found
      };

      const handleGo = async() => {
        const scenarioNumber = determineScenarioNumber();
        setScenarioNumber(scenarioNumber);
        navigate("/tripDetail");
    }

    return (
        <div className='type-body'>
            <img 
                src={closeIcon} 
                alt="Close" 
                className="close-btn" 
                onClick={() => navigate("/homePage")} 
            />
            <h2>What is the purpose of your trip?</h2>

            <div className='trip-reason-selection'>
                <button className={`vacation-btn ${activeButton === "Vacation & Leisure" ? 'active' : ''}`} onClick={() => handleClick("Vacation & Leisure")}>Vacation & Leisure</button>
                <button className={`business-btn ${activeButton === "Business / Work" ? 'active' : ''}`} onClick={() => handleClick("Business / Work")}>Business / Work</button>
                <button className={`event-btn ${activeButton === "Event / Celebration" ? 'active' : ''}`} onClick={() => handleClick("Event / Celebration")}>Event / Celebration</button>
                <button className={`volunteering-btn ${activeButton === "Volunteering / Humanitarian Work" ? 'active' : ''}`} onClick={() => handleClick("Volunteering / Humanitarian Work")}>Volunteering / Humanitarian Work</button>
                <button className={`family-btn ${activeButton === "Family / Friends" ? 'active' : ''}`} onClick={() => handleClick("Family / Friends")}>Family / Friends</button>
                <button className={`pilgrimage-btn ${activeButton === "Pilgrimage and Religious Reasons" ? 'active' : ''}`} onClick={() => handleClick("Pilgrimage and Religious Reasons")}>Pilgrimage and Religious Reasons</button>
                <button className={`education-btn ${activeButton === "Education and Learning" ? 'active' : ''}`} onClick={() => handleClick("Education and Learning")}>Education and Learning</button>
                <button className={`others-btn ${activeButton === "Others" ? 'active' : ''}`} onClick={() => handleClick("Others")}>Others</button>
            </div>

            <div className='body-description'>
                <h3>Where are you headed to?</h3>

                <label className='Location'>
                    <input type='text' value={location} onChange={handleLocationChange} placeholder='Enter city/state/country' className='location-input'/>
                </label>
            </div>

            <div className="letsgo-container">
                <button onClick={handleGo} className='letsgo-btn'> Let's go! </button>
            </div>
        </div>
    );
}

export { TypeOfTrip }