import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/TypeOfTrip.css';

const TypeOfTrip = () => {
    const navigate = useNavigate()
    const [selectedButton, setSelectedButton] = useState(null);
    const [location, setLocation] = useState('');

    const handleClick = (button) => {
        setSelectedButton(button);
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
                <button className="vacation-btn" onClick={() => handleClick("Vacation & Leisure")}>Vacation & Leisure</button>
                <button className="business-btn" onClick={() => handleClick("Business / Work")}>Business / Work</button>
                <button className="event-btn" onClick={() => handleClick("Event / Celebration")}>Event / Celebration</button>
                <button className="volunteering-btn" onClick={() => handleClick("Volunteering / Humanitarian Work")}>Volunteering / Humanitarian Work</button>
                <button className="family-btn" onClick={() => handleClick("Family / Friends")}>Family / Friends</button>
                <button className="pilgrimage-btn" onClick={() => handleClick("Pilgrimage and Religious Reasons")}>Pilgrimage and Religious Reasons</button>
                <button className="education-btn" onClick={() => handleClick("Education and Learning")}>Education and Learning</button>
                <button className="others-btn" onClick={() => handleClick("Others")}>Others</button>
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
