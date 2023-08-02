import React, { useState } from 'react';
import { NewTrip } from './NewTrip';
import { TypeOfTrip } from './TypeOfTrip';
import { NewTripDetail } from './NewTripDetail';
import { NewTripActivities } from './NewTripActivities';
import { NewTripFood } from './NewTripFood';

const TripWizard = () => {
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState({});

  const handleNext = (newData) => {
    setTripData({ ...tripData, ...newData });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <NewTrip onNext={handleNext} />;
    case 2:
      return <TypeOfTrip onNext={handleNext} onBack={handleBack} />;
    case 3:
      return <NewTripDetail onNext={handleNext} onBack={handleBack} />;
    case 4:
      return <NewTripActivities onNext={handleNext} onBack={handleBack} />;
    case 5:
      return <NewTripFood onNext={handleNext} onBack={handleBack} />;
  
  
    default:
      return null;
  }
};

export default TripWizard;