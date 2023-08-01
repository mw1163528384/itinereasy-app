// NewTripGenerate.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import loading_logo from '../assets/images/loading-logo.png';
import flying_airplane from '../assets/images/flying-airplane.png';
import check_logo from '../assets/images/check-logo.png';
import landed_airplane from '../assets/images/landed-airplane.png';
import { HomePage } from './HomePage'; 
import { ItineraryContext } from '../contexts/itinerarycontext'; // Make sure the path is correct
import { runPrompt } from './generator_model'; // Make sure the path is correct

const NewTripGenerate = () => {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(true);
    const { userPreferences, setGeneratedItinerary, generatedItinerary } = useContext(ItineraryContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsGenerating(false);
        }, 5000);
        
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    const handleCancel = () => {
        navigate('/');
    }

    const handleView = () => {
        navigate('/', { state: { generatedItinerary } }); // Pass the generatedItinerary back to the HomePage component
    };

    const handleGenerateItinerary = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Call the API to generate the itinerary
        const generatedData = await runPrompt(userPreferences);
    
        // Update the global state with the generated itinerary
        setGeneratedItinerary(generatedData);
    };
    

    return (
        <div>
            {isGenerating ? (
                <div className='body'>
                    <div className='body-content'>
                        <img src={loading_logo} alt='loading-logo'/>
                        <img src={flying_airplane} alt='flying-airplane'/>
                    </div>

                    <div className='body-description'>
                        <h3>Generating your Itinerary</h3>

                        <p>
                            Hang on for a moment, this may take a few minutes. 
                        </p>

                        <button onClick={handleCancel} id="cancel-btn" className='cancel-btn'> Cancel </button>
                    </div>
                </div>
            ) : (
                <div className='body'>
                    <div className='body-content'>
                        <img src={check_logo} alt='check-logo'/>
                        <img src={landed_airplane} alt='landed-airplane'/>
                    </div>

                    <div className='body-description'>
                        <h3>Itinerary complete!</h3>

                        {/* Display the generated itinerary using the HomePage component */}
                        <HomePage generatedItinerary={generatedItinerary} />

                        <button onClick={handleView} id="view-btn" className='view-btn'> View Itinerary </button>
                        <button onClick={handleGenerateItinerary} type="submit" className='finish-btn'> Finish </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export { NewTripGenerate }
