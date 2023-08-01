import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripDetail.css';
import { NewTripFooter } from '../components/NewTripFooter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewTripDetail = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedArrivalTiming, setSelectedArrivalTiming] = useState('');
    const [selectedReturnTiming, setSelectedReturnTiming] = useState('');
    const [budget, setBudget] = useState('');

    const handleArrivalTimingChange = (event) => {
        setSelectedArrivalTiming(event.target.value);
    };

    const handleReturnTimingChange = (event) => {
        setSelectedReturnTiming(event.target.value);
    };

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleBack = () => {
        navigate('/tripType');
    };

    const handleNext = () => {
        // Pass the collected data to the next step
        navigate('/tripActivities', { state: { selectedDate, selectedArrivalTiming, selectedReturnTiming, budget } });
    };

    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <h2>What is the purpose of your trip?</h2>
                    <p>Fill in your trip dates, arrival and departure times.</p>
                    <div className='calendar-box'>
                        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
                        <h4>Select arrival and return timings</h4>
                        <select value={selectedArrivalTiming} onChange={handleArrivalTimingChange} placeholder='Select arrival time'>
                            <option value=""></option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="night">Night</option>
                            <option value="before-dawn">Before dawn</option>
                            <option value="not-specified">Not specified</option>
                        </select>
                        <select value={selectedReturnTiming} onChange={handleReturnTimingChange} placeholder='Select return time'>
                            <option value=""></option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="night">Night</option>
                            <option value="before-dawn">Before dawn</option>
                            <option value="not-specified">Not specified</option>
                        </select>
                    </div>
                    <div className='body-budget'>
                        <h2>Budget</h2>
                        <p>Input a rough estimate of your budget for the trip (excluding international travel and accommodations)</p>
                        <label className='budget'>
                            <input type='text' value={budget} onChange={handleBudgetChange} placeholder='SGD - Fill in your budget here' />
                        </label>
                    </div>
                    <NewTripFooter handleBack={handleBack} handleNext={handleNext} />   
                </div>
            </div>
        </div>
    );
}

export { NewTripDetail };