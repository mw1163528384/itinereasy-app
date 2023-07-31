import React from 'react';
import '../styles/NewTripFooter.css';

const NewTripFooter = ({handleBack, handleNext}) => {
    return (
        <div>
            <footer className='footer'>
                <button onClick={handleBack} id="back-btn" className='back-btn'> Back </button>
                <button onClick={handleNext} id="next-btn" className='next-btn'> Next </button>
            </footer>
        </div>
    );
}

export { NewTripFooter }