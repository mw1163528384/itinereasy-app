import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css';
import itinereasy_logo from '../assets/images/itinereasy-logo.png'

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
}
    return (
        <div>
            <div className='body'>
                <div className='body-content'>
                    <img src={itinereasy_logo} alt='app-logo'/>
                </div>

                <div className='login-form'>
                    <form onSubmit={handleLoginSubmit}>
                        <div className='input_container'>
                            <input type="text" value={email} onChange={handleEmailChange} placeholder='Email' />
                            <input type="text" value={password} onChange={handlePasswordChange} placeholder='Password' />
                        </div>
                        
                        <div className='forget_container'>
                            <p>Forgot password?</p>
                        </div>

                        <div className='loginBtn_container'>
                            <input type='submit' value="login" className='login-btn' />
                        </div>

                        <div className='register_container'>
                            <p>
                                Don't have an account? Register
                            </p>
                        </div>

                        <div className='google_container'>
                            <p>Or sign in with Google</p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export { LoginPage }