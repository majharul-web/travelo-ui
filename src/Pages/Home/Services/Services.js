import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className="fs-1 py-2 title-color">
                    We offered best services
                </h2>
                <p className="fs-5 p-color">
                    Waters make fish every without firmament saw had. Morning air subdue. <br /> Our. Air very one. Whales grass is fish whales winged.
                </p>
            </div>
            <div className="row   row-cols-md-4 row-cols-1 g-4 text-center">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Services;