import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewTripDetail.css';
import { NewTripFooter } from '../components/NewTripFooter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { eachDayOfInterval } from 'date-fns';

const NewTripDetail = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
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

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  let highlightedDates = [];

  if (startDate && endDate) {
    highlightedDates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate)
    })
  }

  const handleBack = () => {
    navigate('/tripActivities');
  };

  const handleNext = () => {
    // Create the userPreferences object with collected data
    const userPreferences = {
      tripStartDate: startDate,
      tripEndDate: endDate,
      arrivalTiming: selectedArrivalTiming,
      returnTiming: selectedReturnTiming,
      budget: budget,
    };

    // Pass userPreferences to the next component (e.g., NewTripFood)
    navigate('/tripFood', { state: { userPreferences } });
  };

  return (
    <div>
      <div className='body'>
        <div className='body-detail'>
          <h2>Trip details</h2>
          <p>Fill in your trip dates, arrival and departure times.</p>
          
          <div className='calendar-section'>
            <div className='calendar-box'>
              <DatePicker 
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                highlightDates={highlightedDates}
                calendarClassName='custom-calendar'
               />
            </div> 

            <hr style={{ 
                marginTop: "5px",
                color:"white",
                backgroundColor:"white", 
                height: "1.5px",
                marginLeft: "15px",
                marginRight: "15px",
                border: "none"}} />
              
            <h4 className='arrival-return-timings'> Select arrival and return timings</h4>
            <div className='select-container'>
                <select className="select-arrival" value={selectedArrivalTiming} onChange={handleArrivalTimingChange} placeholder='Select arrival time'>
                    <option value="" selected disabled>Select arrival time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                    <option value="before-dawn">Before dawn</option>
                    <option value="not-specified">Not specified</option>
                </select>

                <select className="select-return" value={selectedReturnTiming} onChange={handleReturnTimingChange} placeholder='Select return time'>
                    <option value="" selected disabled>Select return time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                    <option value="before-dawn">Before dawn</option>
                    <option value="not-specified">Not specified</option>
                </select>
            </div>
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

export { NewTripDetail }
