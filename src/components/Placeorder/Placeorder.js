import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Placeorder.css';
import axios from 'axios';


const Placeorder = () => {
    const { serviceId } = useParams();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                console.log(res);
            })
    };

    const [single, setSingle] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                const s = data?.find(i => i._id == serviceId)
                setSingle(s)
            })
    }, [serviceId])
    console.log(single);
    return (
        <>
            <div className="container ">
                <div className="row sevice-detail">
                    <div className="col-md-6">
                        <img src={single.img} alt="" />
                        <h4>{single.name}</h4>
                        <p>{single.descliption}</p>
                    </div>
                    <div className="col-md-6">
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group">
                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            </div>
                            <div className="input-group">
                                <input {...register("descliption")} placeholder="Description" />
                            </div>
                            <div className="input-group">
                                <input type="number" {...register("price")} placeholder="Price" />
                            </div>
                            <div className="input-group">
                                <input type="date" {...register("time")} placeholder="Time" />
                            </div>
                            <div className="input-group">
                                <input {...register("img")} placeholder="image url" />
                                <br />
                                <button className="Placeorder">Submit</button>
                                {/* <input type="submit" /> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Placeorder;