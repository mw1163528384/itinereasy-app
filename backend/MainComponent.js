import React, { useContext } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { runPrompt } from '../frontend/src/pages/generator_model'; 
import { ItineraryContext } from '../contexts/itinerarycontext'; 

const MainComponent = () => {
    const location = useLocation();
    const { userPreferences, setGeneratedItinerary } = useContext(ItineraryContext);

    // Function to generate the itinerary
    const handleGenerateItinerary = async () => {
        // Call the API to generate the itinerary
        const generatedData = await runPrompt(userPreferences);

        // Update the global state with the generated itinerary
        setGeneratedItinerary(generatedData);
    };

  return (
    <div>
      {/* Render appropriate component based on user progress */}
      <Switch>
        <Route path="/newTrip" component={NewTripActivities} />
        <Route path="/tripActivities" component={NewTripActivities} />
        <Route path="/tripDetail" component={NewTripDetail} />
        <Route path="/tripFood" component={NewTripFood} />
      </Switch>

      {/* Button to generate the itinerary */}
      <button onClick={handleGenerateItinerary}>Generate Itinerary</button>
    </div>
  );
};

export default MainComponent;
