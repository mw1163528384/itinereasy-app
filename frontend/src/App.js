import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItineraryProvider } from './contexts/itinerarycontext'; // Import the context
import { NewTrip } from "./pages/NewTrip";
import { TypeOfTrip } from "./pages/TypeOfTrip";
import { NewTripDetail } from "./pages/NewTripDetail";
import { NewTripActivities } from "./pages/NewTripActivities";
import { NewTripFood } from "./pages/NewTripFood";
import { NewTripGenerate } from "./pages/NewTripGenerate";
import { HomePage } from "./pages/HomePage";

function App() {
  return(
    <BrowserRouter>
      <ItineraryProvider> {/* Wrap your routes with the context */}
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="newTrip" element={<NewTrip/>}></Route>
          <Route path="tripType" element={<TypeOfTrip/>}></Route>
          <Route path="tripDetail" element={<NewTripDetail/>}></Route>
          <Route path="tripActivities" element={<NewTripActivities/>}></Route>
          <Route path="tripFood" element={<NewTripFood/>}></Route>
          <Route path="tripGenerate" element={<NewTripGenerate/>}></Route>
        </Routes>
      </ItineraryProvider>
    </BrowserRouter>
  );
}

export default App;
