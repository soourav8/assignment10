import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Header from '../../../Shared/Header/Header';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";


const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    const gridItems = chefs.map(chef => (
        <Col className='mt-5 mb-5' lg={4} sm={12} key={chef.id}>
            <Card className='m-2' style={{ width: '26rem' }}>
                <Card.Img style={{with:"25rem", height:"25rem"}} variant="top" src={chef.picture} />
                <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Years of experience: {chef.years_of_experience}+ </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Numbers of recipes:  {chef.num_recipes}+ </Card.Subtitle>
                    <div className='d-flex align-items-center '>

                        <div className='flex-grow-1'>
                            <p>{chef.likes}<FcLike /></p>
                        </div>

                    <Button  variant="primary">View Recipes</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ));


    return (
        <div>
            <Header></Header>

            <Container>

                <Row>
                    {gridItems}
                </Row>
            </Container>


        </div>
    );
};

export default Home;