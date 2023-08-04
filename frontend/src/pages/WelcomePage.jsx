import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import passport_icon from '../assets/images/passport-icon.png'; 
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
      navigate('/HomePage'); // Navigate to the homepage
    }, 50000); 
    
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]); // Add navigate to the dependency array


  return (
    <div>
      {isLoading ? (
        <div className='loading-body'>
          <div className='body-load'>
            <img src={passport_icon} alt='passport-icon'/>
          </div>
          <div className='load-description'>
            <h3>Welcome to</h3>
            <p>
              Itinereasy
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { WelcomePage };
