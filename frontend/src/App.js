import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItineraryProvider } from './contexts/itinerarycontext';
import { NewTrip } from "./pages/NewTrip";
import { TypeOfTrip } from "./pages/TypeOfTrip";
import { NewTripDetail } from "./pages/NewTripDetail";
import { NewTripActivities } from "./pages/NewTripActivities";
import { NewTripFood } from "./pages/NewTripFood";
import { NewTripGenerate } from "./pages/NewTripGenerate";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <ItineraryProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="newTrip" element={<NewTrip />} />
          <Route path="tripType" element={<TypeOfTrip />} />
          <Route path="tripDetail" element={<NewTripDetail />} />
          <Route path="tripActivities" element={<NewTripActivities />} />
          <Route path="tripFood" element={<NewTripFood />} />
          <Route path="tripGenerate" element={<NewTripGenerate />} />
        </Routes>
      </ItineraryProvider>
    </BrowserRouter>
  );
}

export default App;
