import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTripDetail.css';
import { NewTripFooter } from '../components/NewTripFooter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { eachDayOfInterval } from 'date-fns';

const NewTripDetail = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [arrivalTiming, setArrivalTiming] = useState('');
    const [returnTiming, setReturnTiming] = useState('');
    const [budget, setBudget] = useState('');
    
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      };
    
    let highlightDates = [];

    if (startDate && endDate) {
        highlightDates = eachDayOfInterval({
            start: new Date(startDate),
            end: new Date(endDate)
        });
    }
    
    const handleArrivalTimingChange = (event) => {
        setArrivalTiming(event.target.value);
    }

    const handleReturnTimingChange = (event) => {
        setReturnTiming(event.target.value);
    }

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    }

    const handleBack = () => {
        navigate('/tripType');
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
                        <DatePicker 
                            selected={startDate} 
                            onChange={handleDateChange} 
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                            highlightDates={highlightDates}
                            calendarClassName='custom-calendar'
                        />
                        
                        <h4>Select arrival and return timings</h4>
                        <select value={arrivalTiming} onChange={handleArrivalTimingChange} placeholder='Select arrival time'>
                            <option value=""></option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Night">Night</option>
                            <option value="Before dawn">Before dawn</option>
                            <option value="Not specified">Not specified</option>
                        </select>

                        <select value={returnTiming} onChange={handleReturnTimingChange} placeholder='Select return time'>
                            <option value=""></option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Night">Night</option>
                            <option value="Before dawn">Before dawn</option>
                            <option value="Not specified">Not specified</option>
                        </select>

                    </div>

                    <div className='body-budget'>
                        <h2>Budget</h2>
                        <p>Input a rough estimate of your budget for the trip (excluding interntional travel and accommodations)</p>

                        <label className='budget'>
                            <input 
                                type='number'
                                value={budget} 
                                onChange={handleBudgetChange} 
                                placeholder='SGD - Fill in your budget here' 
                            />
                        </label>
                    </div>

                    <NewTripFooter handleBack={handleBack} handleNext={handleNext} />   
                </div>
            </div>
        </div>
    );
}

export { NewTripDetail }