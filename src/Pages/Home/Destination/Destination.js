import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    const { imgURL, destination, details, _id } = props?.destination;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{destination}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 150)}
                    </Card.Text>
                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant='danger'>Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Destination;