import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    // get data from database
    useEffect(() => {
        fetch('https://ancient-brushlands-56667.herokuapp.com/destination')
            .then(res => res.json())

            .then(data => setDestinations(data));
    }, [])
    return (
        <div className='py-5'>
            <div className="container">
                <div className='text-center'>
                    <h2 className='fs-1 pt-5 title-color'>Popular Destination</h2>
                    <p className='pt-3 fs-5 p-color'>Suffered alteration in some form, by injected humour or good day <br /> randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                {
                    destinations.length === 0 ?
                        <div className='text-center'>
                            <Spinner animation="border" variant="danger" />
                        </div>
                        :
                        <div className="row   row-cols-md-3 row-cols-1 g-4">
                            {
                                destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)
                            }
                        </div>
                }

            </div>

        </div>
    );
};

export default Destinations;