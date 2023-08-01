// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItineraryProvider } from '../contexts/itinerarycontext'; // Import the ItineraryProvider
import HomePage from './HomePage'; 
import MainComponent from './MainComponent';
import NewTripActivities from './NewTripActivities';
import NewTripDetail from './NewTripDetail';
import NewTripFood from './NewTripFood';
import NewTripGenerate from './NewTripGenerate'; 

const App = () => {
  return (
    <ItineraryProvider>
      <Router> {/* Wrap the Router with the ItineraryProvider */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newTrip" component={MainComponent} />
          <Route path="/tripActivities" component={NewTripActivities} />
          <Route path="/tripDetail" component={NewTripDetail} />
          <Route path="/tripFood" component={NewTripFood} />
          <Route path="/tripGenerate" component={NewTripGenerate} />
        </Switch>
      </Router>
    </ItineraryProvider>
  );
};

export default App;
