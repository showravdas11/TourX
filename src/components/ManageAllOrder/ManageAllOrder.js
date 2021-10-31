import React, { useEffect, useState } from 'react';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrder = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map(order => <ManageSingleOrder
                    key={order.name}
                    order={order}

                >

                </ManageSingleOrder>)
            }
        </div>
    );
};

export default ManageAllOrder;