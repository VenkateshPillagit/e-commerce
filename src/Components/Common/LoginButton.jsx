import React from 'react';
import './LoginButton.css'

function LoginButton(){
    return(
        <div className="login-button-container">
            <input className="login-button" type='button' value='Login'></input>
        </div>
    );
}

export default LoginButton;