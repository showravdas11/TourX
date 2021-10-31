import { useState } from "react";

const MyOrder = ({ order }) => {
    const [orders, setOrders] = useState()
    const { name, time, price, descliption, img } = order;
    // console.log(order);

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