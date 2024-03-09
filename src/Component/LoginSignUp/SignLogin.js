import React, { useRef, useState, useEffect } from 'react';
import Home from '../../Pages/Home';
import "./LoginSignUp.css";

const SignLogin = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }
        if (localEmail) {
            setShow(true);
        }
    }, [localSignUp, localEmail]);

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const validatePassword = (input) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(input);
    };

    const handleEmailChange = () => {
        const enteredEmail = email.current.value;
        setEmailValidation(validateEmail(enteredEmail) ? '' : 'Invalid email format');
    };
    const handlePasswordChange = () => {

        const enteredPassword = password.current.value;
    
        setPasswordValidation(validatePassword(enteredPassword) ? '' : 'Invalid password format');
    
    };

    const handleClick = () => {
        const enteredName = name.current.value;
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        if (!enteredName || !validateEmail(enteredEmail) || !validatePassword(enteredPassword)) {
            alert("Invalid input. Please check your information.");
            return;
        }

        localStorage.setItem("name", enteredName);
        localStorage.setItem("email", enteredEmail);
        localStorage.setItem("password", enteredPassword);
        localStorage.setItem("signUp", enteredEmail);
        alert("Account created successfully!!");
        window.location.reload();
    };

    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value);
            window.location.reload();
        } else {
            alert("Please Enter valid Credential");
        }
    };

    return (
        <div>
            {showHome ? (
                <Home />
            ) : (
                <div className="container-input mb-5">
                    <div className='header'>
                        <h1>{show ? `Hello ${localName}` : 'Register'}</h1>
                        <div className='underline'></div>
                    </div>
                    <div className='inputs'>
                        {show ? (
                            <>
                                <div className="input_space">
                                    <i className="fa-solid fa-at fa-lg icons"></i>
                                    <input placeholder="Email" type='text' ref={email} onChange={handleEmailChange} />
                                    <span className="validation-message" style={{ color: 'red' }}>{emailValidation}</span>
                                </div>
                                <div className="input_space">
                                    <i className="fa-solid fa-lock fa-lg icons"></i>
                                    <input placeholder="Password" type='password' ref={password} onChange={handlePasswordChange} />
                                    <span className="validation-message" style={{ color: 'red' }}>{passwordValidation}</span>
                                </div>
                                <button className='Submit' onClick={handleSignIn}>Sign In</button>
                            </>
                        ) : (
                            <>
                                <div className="input_space">
                                    <i className="fa-solid fa-user fa-lg icons"></i>
                                    <input placeholder="Name" type='text' ref={name} />
                                </div>
                                <div className="input_space">
                                    <i className="fa-solid fa-at fa-lg icons"></i>
                                    <input placeholder="Email" type='text' ref={email} onChange={handleEmailChange} />
                                    <span className="validation-message" style={{ color: 'red' }}>{emailValidation}</span>
                                </div>
                                <div className="input_space">
                                    <i className="fa-solid fa-lock fa-lg icons"></i>
                                    <input placeholder="Password" type='password' ref={password} onChange={handlePasswordChange} />
                                    <span className="validation-message" style={{ color: 'red' }}>{passwordValidation}</span>
                                </div>
                                <button className='Submit' onClick={handleClick}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignLogin;
