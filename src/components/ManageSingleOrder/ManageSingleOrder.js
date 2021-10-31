import React, { useState } from 'react';
import './ManageSingleOrder.css'

const ManageSingleOrder = ({ order, deleteOrder }) => {
    const { name, time, price, descliption, img } = order;


    const handledelete = id => {
        const isDelete = window.confirm("Are you sure you want to delete?");
        if (isDelete) {
            const url = `https://tourx98.herokuapp.com/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted')
                        deleteOrder(id)
                    }

                })
        }

    }
    return (
        <div>
            <div class='table-resposive'>
                <table>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>time</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <td><img src={img} alt="" /></td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{time}</td>
                        <td>
                            <button onClick={() => handledelete(order._id)} className="manage-delete-btn">Delete</button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSingleOrder;