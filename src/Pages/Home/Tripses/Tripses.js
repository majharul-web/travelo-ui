import React, { useEffect, useState } from 'react';
import Trip from '../Trip/Trip';

const Tripses = () => {

    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/trips/trip')
            .then(res => res.json())
            .then(data => setTrips(data))

    }, [])
    return (
        <div className='container'>
            <h2 className="fs-1 pb-4 title-color text-center">
                Recent Trips
            </h2>
            <div className="row   row-cols-md-3 row-cols-1 g-4 text-center">
                {
                    trips.map(trip => <Trip key={trip._id} trip={trip}></Trip>)
                }
            </div>

        </div>
    );
};

export default Tripses;