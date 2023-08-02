import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTrip.css';
import regenerate_icon from '../assets/images/regenerate-icon.png';
import share_icon from '../assets/images/share-icon.png';
import trash_icon from '../assets/images/trash-icon.png';
import close_icon from '../assets/images/close-icon.png';

const OptionMenu = ({handleCloseClick}) => {
    const navigate = useNavigate();

    const handleRegenerateClick = async() => {
        navigate("/")
    }
    
    const handleShareClick = async() => {
        navigate("/")
    }
    
    const handleDeleteClick = async() => {
        navigate("/")
    }

    return (
        <div>
            <div className='body'>
                <div className='optionMenu-container'>
                    {/* To Yingyu: if you dont want the title and button tgt, just shift the </h3> beside the title */}
                    <h3>Itinerary options
                        <button onClick={handleCloseClick}>
                            <img src={close_icon} alt='close-icon' />
                        </button>
                    </h3>

                    <div className='optionMenu-btn-conatiner'>
                        <button className='regenerateBtn-container' onClick={handleRegenerateClick}>
                            <img src={regenerate_icon} alt='regenerate-icon' />
                            Regenerate
                        </button>

                        <button className='ShareBtn-container' onClick={handleShareClick}>
                            <img src={share_icon} alt='share-icon' />
                            Share
                        </button>

                        <button className='TrashBtn-container' onClick={handleDeleteClick}>
                            <img src={trash_icon} alt='trash-icon' />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { OptionMenu }
