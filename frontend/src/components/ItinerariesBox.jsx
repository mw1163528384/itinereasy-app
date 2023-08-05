import React from 'react';
import '../styles/MenuBar.css';

const ItinerariesBox = ({ history }) => {
    return (
        <div>
            <div className='history-item-box'>
                <h3>{history.location}</h3>
                <p>{history.date}</p>
                <p>{history.travelPurpose}</p>
            </div>
        </div>
    );
}

export { ItinerariesBox }