import React, { createContext, useContext, useState } from 'react';

const ScenarioContext = createContext();

export const useScenario = () => {
    return useContext(ScenarioContext);
}

export const ScenarioProvider = ({ children }) => {
    const [scenarioNumber, setScenarioNumber] = useState(null);

    const value = {
        scenarioNumber,
        setScenarioNumber,
    };

    return (
        <ScenarioContext.Provider value={value}>
            {children}
        </ScenarioContext.Provider>
    );
}
