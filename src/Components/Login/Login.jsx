import React, { useState } from "react";
import axios from "axios";
import './login.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogIn, setIsLogin] = useState(false);
    const handleLogin = async (event) => {
        event.preventDefault();
        const payload = {
            userName,
            password
        }
        const response = await axios.post('http://localhost:3001/login/jwt', { ...payload });
        let expires = new Date();
        console.log(expires);
        expires = new Date(expires.getTime() + 1 * 60 * 1000)
        console.log(expires.toLocaleTimeString())
        var sessionObject = {
            expiresAt: expires,
            token: response.data.token,
        }
        sessionStorage.setItem('token', JSON.stringify(sessionObject));
        setTimeout(() => {
            sessionStorage.removeItem('token');
        }, 60000);
        if (response.data.token) {
            const config = {
                headers: {
                    'authorization': `Bearer ${response.data.token}`
                }
            };
            const loginresponse = await axios.post('http://localhost:3001/login', {}, config)
        }
    }
    return (
        <div className="login-container">
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={(event) => handleLogin(event)}>Login</button>
        </div>
    );
}

export default Login;
