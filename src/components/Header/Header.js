import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src="https://i.ibb.co/ZxR41jx/download.png" alt="" width="150" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <Link className="me-4 item" to="/home">Home</Link>
                        <Link className="me-4 item" to="/about">About Us</Link>
                        {user?.email ?
                            <Link className="me-4 item" to="/myorder">Myorder</Link> :
                            <Link className="me-4 item" to="/myorder"></Link>
                        }
                        {user?.email ?
                            <Link className="me-4 item" to="/addnewplace">Add New Place</Link> :
                            <Link className="me-4 item" to="/myorder"></Link>
                        }
                        <span className="mx-2">{user?.displayName}</span>
                        {user?.email ?
                            <button className="signIn-btn" onClick={logOut}>Log Out</button> :
                            <Link to="/login"><button className="signIn-btn">Sign In</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;