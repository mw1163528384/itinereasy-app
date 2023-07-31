import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTripDetail.css';
import { NewTripFooter } from '../components/NewTripFooter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewTripDetail = () => {
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTiming, setSelectedTiming] = useState('');
    const [location, setLocation] = useState('');
    
    const handleTimingChange = (event) => {
        setSelectedTiming(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleBack = () => {
        navigate('tripType');
    }

    const handleNext = () => {
        navigate('/tripActivities');
    }    

    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <h2>What is the purpose of your trip?</h2>
                    <p>Fill in your trip dates, arrival and departure times.</p>
                    
                    <div className='calendar-box'>
                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
                        
                        <h4>Select arrival and return timings</h4>
                        <select value={selectedTiming} onChange={handleTimingChange} placeholder='Select arrival time'>
                            <option value=""></option>
                            <option value="">Morning</option>
                            <option value="">Afternoon</option>
                            <option value="">Night</option>
                            <option value="">Before dawn</option>
                            <option value="">Not specified</option>
                        </select>

                        <select value={selectedTiming} onChange={handleTimingChange} placeholder='Select return time'>
                            <option value=""></option>
                            <option value="">Morning</option>
                            <option value="">Afternoon</option>
                            <option value="">Night</option>
                            <option value="">Before dawn</option>
                            <option value="">Not specified</option>
                        </select>

                    </div>

                    <div className='body-budget'>
                        <h2>Budget</h2>
                        <p>Input a rough estimate of your budget for the trip (excluding interntional travel and accommodations)</p>

                        <label className='budget'>
                            <input type='text' value={location} onChange={handleLocationChange} placeholder='SGD - Fill in your budget here' />
                        </label>
                    </div>

                    <NewTripFooter handleBack={handleBack} handleNext={handleNext} />   
                </div>
            </div>
        </div>
    );
}

export { NewTripDetail }