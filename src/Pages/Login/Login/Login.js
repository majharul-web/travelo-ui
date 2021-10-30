import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle, setUser } = useAuth();

    // ------------------redirect

    const location = useLocation();
    const history = useHistory();
    // console.log("came from", location.state?.from);
    const redirect_url = location.state?.from || "/home";

    // ------------------redirect

    const handleSingInUsingGoogle = () => {
        singInUsingGoogle()
            .then((result) => {
                setUser(result.user)
                history.push(redirect_url);
                console.log(result.user);
            }).catch((error) => {
                console.log(error.message);
            });
    }


    return (
        <div className='container text-center py-5'>
            <h3 className='py-3'>Please Login</h3>
            <Button variant="danger" onClick={handleSingInUsingGoogle}>
                <span className='mx-2'>
                    <i className='fab fa-google'></i>
                </span>
                Google
            </Button>
        </div>
    );
};

export default Login;