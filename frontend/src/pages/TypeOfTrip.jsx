import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTrip.css';

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
        <div>
            <div className='body'>
                <div className='body-content'>
                    <h2>What is the purpose of your trip?</h2>

                    <div className='trip-reason-selection'>
                        <button onClick={() => handleClick("Vacation & Leisure")}>Vacation & Leisure</button>
                        <button onClick={() => handleClick("Business / Work")}>Business / Work</button>
                        <button onClick={() => handleClick("Event / Celebration")}>Event / Celebration</button>
                        <button onClick={() => handleClick("Volunteering / Humanitarian Work")}>Volunteering / Humanitarian Work</button>
                        <button onClick={() => handleClick("Family / Friends")}>Family / Friends</button>
                        <button onClick={() => handleClick("ilgrimage and Religious Reasons")}>Pilgrimage and Religious Reasons</button>
                        <button onClick={() => handleClick("Education and Learning")}>Education and Learning</button>
                        <button onClick={() => handleClick("Others")}>Others</button>
                    </div>

                    <div className='body-description'>
                    <h2>Where are you headed to?</h2>

                    <label className='Location'>
                        <input type='text' value={location} onChange={handleLocationChange} placeholder='Enter City/state/country' />
                    </label>
                </div>

                    <button onClick={handleGo} id="letsgo-btn" className='letsgo-btn'> Lets go! </button>
                </div>
            </div>
        </div>
    );
}

export { TypeOfTrip }