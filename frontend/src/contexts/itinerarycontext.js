import React, { createContext, useState } from 'react';

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
    const [userPreferences, setUserPreferences] = useState({});
    const [generatedItinerary, setGeneratedItinerary] = useState(null);

    return (
        <ItineraryContext.Provider value={{
            userPreferences, 
            setUserPreferences,
            generatedItinerary, 
            setGeneratedItinerary
        }}>
            {children}
        </ItineraryContext.Provider>
    );
};

