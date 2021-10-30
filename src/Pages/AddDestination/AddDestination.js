import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddDestination = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ancient-brushlands-56667.herokuapp.com/addDestination', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Destination insert success');
                    reset();
                }

            })
        console.log(data)
    };
    return (
        <div className='container py-4'>
            <div>
                <h3 className='text-center text-danger py-3'>Add Travel Destination</h3>
                <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-50 form-control p-2 mb-3' type='text' defaultValue={user?.displayName} {...register("name", { required: true })} />
                    <input className='w-50 form-control p-2 mb-3' type='email' defaultValue={user?.email} {...register("email", { required: true })} />

                    <input className='w-50 form-control p-2 mb-3' type="text" {...register("destination")} placeholder='Destination' />
                    <input className='w-50 form-control p-2 mb-3' type="number" {...register("cost")} placeholder='Travel Cost' />

                    <textarea className="w-50 form-control p-2 mb-3" cols="10" rows="5" placeholder='Details...' {...register("details")}></textarea>
                    <input className='w-50 form-control p-2 mb-3' type='text'  {...register("imgURL")} placeholder='image link' />
                    <input className='w-50 form-control p-2 mb-3 btn btn-danger' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDestination;