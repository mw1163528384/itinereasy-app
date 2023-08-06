import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTripGenerate.css';
import check_logo from '../assets/images/check-logo.png';
import loading_logo from '../assets/images/loading-logo.png';
import flying_aiplane from '../assets/images/flying-airplane.png';
import landed_airplane from '../assets/images/landed-airplane.png';


const NewTripGenerate = () => {
    const navigate = useNavigate()
    const [isGenerating, setIsGenerating] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsGenerating(false);
        }, 5000); 
        
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    const handleCancel = () => {
        navigate('/tripfood');
    }

    const handleView = () => {
        navigate('/homePage');
    }

    return (
        <div>
            {isGenerating ? (
            <div className='generating-body'>
                <div className='body-generate'>
                    <img src={loading_logo} alt='loading-logo'/>
                    <img src={flying_aiplane} alt='flying-airplane'/>
                </div>

                <div className='generate-description'>
                    <h3>Generating your Itinerary</h3>

                    <p>
                        Hang on for a moment, this may take a few minutes. 
                    </p>

                    <button onClick={handleCancel} id="cancel-btn" className='cancel-btn'> Cancel </button>
                </div>
            </div>
            ) : (
            <div className='completed-body'>
                <div className='completed'>
                    <img src={check_logo} alt='check-logo'/>
                    <img src={landed_airplane} alt='landed-airplane'/>
                    <div className='line'></div>
                </div>

                <div className='completed-description'>
                    <h3>Itinerary complete!</h3>

                    <p>
                        Have a good trip! 
                    </p>

                    <button onClick={handleView} id="view-btn" className='view-btn'> View Itinerary </button>
                </div>
            </div>
        )}
        </div>
    );
}

export { NewTripGenerate }