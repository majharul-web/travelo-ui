import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div className='container'>
            <h3>Manage all Orders: {allOrders.length}</h3>
        </div>
    );
};

export default ManageOrders;