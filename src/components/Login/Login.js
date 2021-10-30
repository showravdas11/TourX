import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 google-sign">
                        <button className='sign-btn' onClick={handleGoogleLogin}>Google sign in</button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://i.ibb.co/VQxLRxt/Secure-login-bro.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;