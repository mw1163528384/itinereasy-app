import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/TypeOfTrip.css';

const TypeOfTrip = () => {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState(null);
    const [location, setLocation] = useState('');
    const [activeButton, setActiveButton] = useState(null); // new state

    const handleClick = (button) => {
        setSelectedButton(button);
        setActiveButton(button); // set the active button
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleGo = async() => {
        navigate("/tripDetail")
    }

    return (
        <div className='type-body'>
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
