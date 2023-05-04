import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Cards from '../Cards/Cards';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    const gridItems = chefs.map(chef => (
        <Col lg={4} sm={12} key={chef.id}>
            <Card className='m-2' style={{ width: '26rem' }}>
                <Card.Img style={{with:"25rem", height:"25rem"}} variant="top" src={chef.picture} />
                <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    ));


    return (
        <div>
            <Container>
                <Row>
                    {gridItems}
                </Row>
            </Container>


        </div>
    );
};

export default Home;