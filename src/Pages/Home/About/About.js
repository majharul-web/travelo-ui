import React from 'react';

const About = () => {
    return (
        <div className='container my-5'>
            <h3 className=' text-danger text-center'>About Us</h3>

            <h3 className='mt-5'>Our History</h3>
            <div className='mx-5'>
                <p className='mx-5 mt-5 fs-5'>
                    Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                    <br />
                    <br />
                    Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                </p>

                <div className='mx-5 my-3'>
                    <div className="row">
                        <div className="col-md-5">
                            <div >
                                <img className=' img-thumbnail' src="https://preview.colorlib.com/theme/travelo/img/about/x1.png.pagespeed.ic.j2Pjj026l2.webp" alt="" />
                            </div>
                            <div className="text-center">
                                <h2 className='text-danger display-4 fw-bold py-3'>345</h2>
                                <p className='fs-5 py-2'>Tour has done successfully</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className=" mt-3 mt-md-0">
                                <img className=' img-thumbnail' src="https://preview.colorlib.com/theme/travelo/img/about/x2.png.pagespeed.ic.pOyJh6a8-N.webp" alt="" />
                            </div>
                            <div className="">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-md-6">
                                        <div className="text-center">
                                            <h2 className='text-danger display-4 fw-bold py-3'>34</h2>
                                            <p className='fs-5 py-2'>Yearly tour arrange</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center">
                                            <h2 className='text-danger display-4 fw-bold py-3'>2263</h2>
                                            <p className='fs-5 py-2'>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;