import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Navigation() {
    const [register, setRegister] = useState(false);

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-container'>
                <nav className='nav'>
                    <h4>Lato</h4>
                </nav>
                <div className='flex-container'>
                    <div className='intro-container'>
                        <h1>Lorem ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    {register ? (
                        <div className='register-container'>
                            <h5>-- Register --</h5>
                            <div className='form-container'>
                                <Register />
                            </div>
                            <p>Have an account? <button onClick={() => setRegister(false)}>Log In</button></p>
                        </div>
                    ) : (
                        <div className='login-container'>
                            <h5>-- Login --</h5>
                                <div className='form-container'>
                                    <Login />
                                </div>
                            <p>Don't have an account? <button onClick={() => setRegister(true)}>Sign Up</button></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navigation;