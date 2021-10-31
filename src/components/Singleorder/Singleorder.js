
import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const Singleorder = () => {
    const [orders, setOrders] = useState([])

    const deleteOrder = (id) => {
        const remaining = orders.filter(
            order => order._id !== id)
        console.log(remaining)
        setOrders(remaining)
    }

    useEffect(() => {
        fetch('https://tourx98.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div className="container mt-5">

                <h4 className="text-center  choose-packge">Choose Your Package</h4>

                <h1 className="text-center mt-3">Select Your Best Package <br /> For Your Travel</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        orders.map(order => <MyOrder
                            key={order.name}
                            order={order}
                            deleteOrder={deleteOrder}
                        >

                        </MyOrder>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Singleorder;