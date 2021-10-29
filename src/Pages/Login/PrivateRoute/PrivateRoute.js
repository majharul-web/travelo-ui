import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // console.log(isLoading);
    // loaded spinner until get user

    if (isLoading) {
        return (
            <div className='text-center my-2'>
                <Spinner animation='border' variant='danger' />
            </div>
        );
    }

    return <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )
        }
    />
};

export default PrivateRoute;