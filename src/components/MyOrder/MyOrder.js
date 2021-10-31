import { useState } from "react";

const MyOrder = ({ order, deleteOrder }) => {
    const { name, time, price, descliption, img } = order;
    // console.log(order);

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
                        <button onClick={() => handledelete(order._id)} className="book-btn">Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;