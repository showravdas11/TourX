import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, time, price, descliption, img, _id } = service;
    return (
        <>
            <div className="col">
                <div className="card h-100 card-image">
                    <img src={img} classNameNmae="card-img-top " alt="" />
                    <div className="card-body">
                        <div className="price-time ">
                            <h6>{price}</h6>
                            <h6>📅{time}</h6>
                        </div>
                        <h4 className="card-title">{name}</h4>

                        <p className="card-text">{descliption}</p>
                        <Link to={`/Placeorder/${_id}`}>
                            <button className="book-btn">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;