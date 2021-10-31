import React from 'react';

const Trip = (props) => {
    const { tipsName, date, img } = props.trip;
    return (
        <div className='my-4 text-start'>
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