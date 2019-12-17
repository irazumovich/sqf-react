import React, {useState} from "react";
import {withCookies, useCookies} from 'react-cookie';

import "./log-in.scss";
import Spinner from "shared/components/spinner/spinner";

const LogIn = ({logIn, isLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

    const onLogIn = () => {
        logIn(email, password, setCookie);
    };

    return (
        <div className="log-in__container">
            <div className='log-in__header'>
                <h2>Welcome</h2>
            </div>
            <div className='log-in__field'>
                <input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='log-in__field'>
                <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='log-in__submit'>
                <div id="color" className="log-in__button-color"/>
                <button
                    className='log-in__button'
                    type='button'
                    onClick={onLogIn}
                >
                    Sign in
                </button>
            </div>
        </div>
    )
};

export default withCookies(LogIn);

