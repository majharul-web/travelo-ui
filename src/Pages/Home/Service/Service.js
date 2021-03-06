import React from 'react';

const Service = (props) => {
    const { serviceName, shortDisc, img } = props.service;
    return (
        <div className='my-5' data-aos="fade-down-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="">
                <h3 className='title-color py-3'>{serviceName}</h3>
                <p className="fs-5 p-color py-1">
                    {shortDisc}
                </p>
            </div>

        </div>
    );
};

export default Service;