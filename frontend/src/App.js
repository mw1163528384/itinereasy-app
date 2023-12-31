import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScenarioProvider } from "./contexts/ScenarioContext";
import { NewTrip } from "./pages/NewTrip";
import { TypeOfTrip } from "./pages/TypeOfTrip";
import { NewTripDetail } from "./pages/NewTripDetail";
import { NewTripActivities } from "./pages/NewTripActivities";
import { NewTripFood } from "./pages/NewTripFood";
import { NewTripGenerate } from "./pages/NewTripGenerate";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { WelcomePage } from "./pages/WelcomePage";
import { ActivityTestingPage } from "./pages/NewTripActivitiesTesting";

function App() {
  return(
    <ScenarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="tripActivitiesTest" element={<ActivityTestingPage/>}></Route>
          <Route path="homePage" element={<HomePage/>}></Route>
          <Route path="newTrip" element={<NewTrip/>}></Route>
          <Route path="tripType" element={<TypeOfTrip/>}></Route>
          <Route path="tripDetail" element={<NewTripDetail/>}></Route>
          <Route path="tripActivities" element={<NewTripActivities/>}></Route>
          <Route path="tripFood" element={<NewTripFood/>}></Route>
          <Route path="tripGenerate" element={<NewTripGenerate/>}></Route>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="welcomePage" element={<WelcomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </ScenarioProvider>
  );
}

export default App;