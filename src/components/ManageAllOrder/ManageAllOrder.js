import React, { useEffect, useState } from 'react';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrder = () => {

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
            {
                orders.map(order => <ManageSingleOrder
                    key={order.name}
                    order={order}
                    deleteOrder={deleteOrder}
                >

                </ManageSingleOrder>)
            }
        </div>
    );
};

export default ManageAllOrder;