import React from 'react';

const Trip = (props) => {
    const { tipsName, date, img } = props.trip;
    return (
        <div className='my-4 text-start'
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="">
                <p className="fs-5 p-color pt-2">
                    {date}
                </p>
                <h3 className='title-color '>{tipsName}</h3>

            </div>

        </div>
    );
};

export default Trip;