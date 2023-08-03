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
                    {/* To Yingyu: if you dont want the title and button tgt, just shift the </h3> beside the title */}
                    <h3>Itinerary options
                        <button onClick={handleCloseClick}>
                            <img src={close_icon} alt='close-icon' />
                        </button>
                    </h3>

                    <div className='optionMenu-btn-conatiner'>
                        <div className='regenerateBtn-container'>
                            <button className='regenerateBtn-container'>
                                <img src={regenerate_icon} alt='regenerate-icon' />
                            </button>
                            <p>Regenerate</p>
                        </div>

                        <div className='ShareBtn-container'>
                            <button>
                                <img src={share_icon} alt='share-icon' />
                            </button>
                            <p>Share</p>
                        </div>

                        <div className='TrashBtn-container'>
                            <button>
                                <img src={trash_icon} alt='trash-icon' />
                            </button>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { OptionMenu }
