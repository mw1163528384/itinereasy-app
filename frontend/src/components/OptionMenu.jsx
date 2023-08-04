import React from 'react';
import '../styles/OptionMenu.css';
import regenerate_icon from '../assets/images/regenerate-icon.png';
import share_icon from '../assets/images/share-icon.png';
import trash_icon from '../assets/images/trash-icon.png';
import close_icon from '../assets/images/close-icon.png';

const OptionMenu = ({handleCloseClick}) => {
    return (
        <div>
            <div className='body'>
                <div className='optionMenu-container'>
                    <div className='title-container'>
                        <h3>Itinerary options</h3>
                    </div>
                    <div className='close-button-container'>
                        <button className='close-button' onClick={handleCloseClick}>
                            <img src={close_icon} alt='close-icon' />
                        </button>
                    </div>
                </div>

                <div className='optionMenu-btn-container'>
                    <div className='regenerateBtn-container'>
                        <button className='regenerate-button'>
                            <img src={regenerate_icon} alt='regenerate-icon' />
                        </button>
                    </div>

                    <div className='regenerate-container'>
                        <h1>Regenerate</h1>
                    </div>

                    <div className='ShareBtn-container'>
                        <button className='share-button'>
                            <img src={share_icon} alt='share-icon' />
                        </button>
                    </div>

                    <div className='share-container'>
                        <h1>Share</h1>
                    </div>

                    <div className='TrashBtn-container'>
                        <button className='trash-button'>
                            <img src={trash_icon} alt='trash-icon' />
                        </button>
                    </div>

                    <div className='delete-container'>
                        <h1>Delete</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { OptionMenu }
