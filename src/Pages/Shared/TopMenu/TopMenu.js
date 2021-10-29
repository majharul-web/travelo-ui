import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const TopMenu = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Brand >
                    <Link to='home'>
                        {/* <img src={logo} className='img-fluid w-100' alt="" /> */}
                        React
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link as={Link} to="/home" active className='fw-bold  text-primary mx-2'>Home</Nav.Link>

                        <Nav.Link as={Link} to="/services" active className='fw-bold  text-primary mx-2'>Services</Nav.Link>

                        <Nav.Link as={Link} to="/about" active className='fw-bold  text-primary mx-2'>About Us</Nav.Link>

                        <Nav.Link as={Link} to="/career" active className='fw-bold  text-primary mx-2'>Career</Nav.Link>
                        {
                            user?.email && <Nav.Link as={Link} to="/orders" active className='fw-bold  text-primary mx-2'>My Orders</Nav.Link>
                        }



                        {
                            user?.displayName ?
                                <Link to='/login'>
                                    <Button variant='danger' onClick={logOut}>Log out</Button>
                                </Link>
                                :
                                <Link to='/login'>
                                    <Button variant='danger'>Log In</Button>
                                </Link>
                        }
                        {
                            user?.displayName &&
                            <Nav.Link className='fw-bold  text-primary mx-2'>
                                <span className='text-danger mx-2'><i className="fas fa-user-check"></i></span>
                                {user?.displayName}
                            </Nav.Link>
                        }




                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default TopMenu;