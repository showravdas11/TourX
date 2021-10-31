import React, { useState } from 'react';
import './ManageSingleOrder.css'

const ManageSingleOrder = ({ order }) => {
    const [orders, setOrders] = useState()
    const { name, time, price, descliption, img } = order;


    const handledelete = id => {
        console.log(id)
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)

                }

            })
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