import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logos/logo.png'

const TopMenu = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container fluid className='mx-5 py-3'>

                <Navbar.Brand >
                    <Link to='home'>
                        <img src={logo} className='img-fluid w-100' alt="" />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/home" active className=' mx-1'>Home</Nav.Link>

                        <Nav.Link as={Link} to="/destination" active className=' mx-1'>Destination</Nav.Link>

                        <Nav.Link as={Link} to="/about" active className=' mx-1'>About</Nav.Link>

                    </Nav>

                    <Nav>



                        {
                            user?.email && <Nav.Link as={Link} to="/manageOrders" active className=' mx-1'>
                                Manage Orders
                            </Nav.Link>
                        }
                        {
                            user?.email && <Nav.Link as={Link} to="/addDestination" active className=' mx-1'>
                                Add
                                Destination
                            </Nav.Link>
                        }
                        {
                            user?.email && <Nav.Link as={Link} to="/orders" active className=' mx-1'>My Orders</Nav.Link>
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
                            <Nav.Link className=' mx-2'>
                                <div>
                                    <img style={{ width: '30px', height: "30px", borderRadius: '50%' }} src={user?.photoURL} alt={user?.displayName} />
                                </div>

                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default TopMenu;