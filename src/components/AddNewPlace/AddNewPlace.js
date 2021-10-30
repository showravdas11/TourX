import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewPlace.css'

const AddNewPlace = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                reset()
            })
    };
    return (
        <div className="add-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                </div>
                <div className="">
                    <input {...register("descliption")} placeholder="Description" />
                </div>
                <div className="">
                    <input type="number" {...register("price")} placeholder="Price" />
                </div>
                <div className="">
                    <input type="date" {...register("time")} placeholder="Price" />
                </div>
                <div className="">
                    <input {...register("img")} placeholder="image url" />
                    <br />
                    <button className="add">Add-New</button>
                    {/* <input type="submit" /> */}
                </div>
            </form>
        </div>
    );
};

export default AddNewPlace;