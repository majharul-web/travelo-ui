import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const { user } = useAuth();
    const currentEmail = user?.email;


    // get data from database
    useEffect(() => {
        fetch(`https://ancient-brushlands-56667.herokuapp.com/MyOrders/${currentEmail}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [isDeleted])

    // delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if (proceed) {
            fetch(`https://ancient-brushlands-56667.herokuapp.com/myOrders/order/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('delete success');
                        // const remaining = products.filter(product => product._id !== id);
                        // setProducts(remaining)
                        setIsDeleted(true);
                    }
                    else {
                        setIsDeleted(false)
                    }
                });
        }

    }

    return (
        <div className='container py-4'>
            <h3 className='py-3'>
                My Orders :
                <span className='text-danger ms-2'>
                    {myOrders.length}
                </span>
            </h3>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Tour Place</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {myOrders?.map((order, index) => (
                    <tbody key={order._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.destination}</td>
                            <td>$ {order?.cost}</td>
                            <td>{order?.status}</td>
                            <td>
                                <Button onClick={() => handleDelete(order?._id)} className='text-danger text-decoration-none text-center' variant="link">Delete</Button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;