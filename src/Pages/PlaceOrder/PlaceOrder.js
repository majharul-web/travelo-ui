import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    // get single data---------------
    const { id } = useParams();
    const [destinations, setDestinations] = useState([]);
    const [exactDestination, setExactDestination] = useState({})

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    useEffect(() => {
        if (destinations.length) {
            const exactDestination = destinations.find(destination => destination._id == id);
            setExactDestination(exactDestination);
        }
    }, [destinations]);

    const { imgURL, destination, details, cost } = exactDestination;
    // get single data-----------

    // Place order
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.image = imgURL;
        data.cost = cost;
        data.destination = destination;
        data.status = 'pending';

        axios.post('http://localhost:5000/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Confirm Order');
                    reset();
                }
            })
        console.log(data)
    };


    return (
        <div className='container py-5'>
            <h3 className='text-danger text-center py-4'>Confirm Your Tour</h3>

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-7 col-12">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-12">
                            <div>
                                <img className='img-fluid img-thumbnail w-100' src={imgURL} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div>
                                <h3>Tour Place: {destination}</h3>
                                <p>{details}</p>
                                <h5>Cost: <span className='text-primary'>$ {cost}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div className='container'>
                        <div>
                            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                                <input className=' form-control p-2 mb-3' type='text' defaultValue={user?.displayName} {...register("name", { required: true })} />
                                <input className=' form-control p-2 mb-3' type='email' defaultValue={user?.email} {...register("email", { required: true })} />
                                <input className=' form-control p-2 mb-3' type="text" {...register("destination")} placeholder='Address' />
                                <input className=' form-control p-2 mb-3' type="text" {...register("destination")} placeholder='City' />
                                <button className=' form-control p-2 mb-3 btn btn-danger' type="submit">Order Now</button>

                            </form>
                        </div>
                    </div>
                </div>

                <Link to='/home'>Home</Link>
            </div>
        </div>
    );
};

export default PlaceOrder;