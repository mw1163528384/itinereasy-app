import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewTrip } from "./pages/NewTrip";
import { TypeOfTrip } from "./pages/TypeOfTrip";
import { NewTripDetail } from "./pages/NewTripDetail";
import { NewTripActivities } from "./pages/NewTripActivities";
import { NewTripFood } from "./pages/NewTripFood";
import { NewTripGenerate } from "./pages/NewTripGenerate";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewTrip/>}></Route>
        <Route path="tripType" element={<TypeOfTrip/>}></Route>
        <Route path="tripDetail" element={<NewTripDetail/>}></Route>
        <Route path="tripActivities" element={<NewTripActivities/>}></Route>
        <Route path="tripFood" element={<NewTripFood/>}></Route>
        <Route path="tripGenerate" element={<NewTripGenerate/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
