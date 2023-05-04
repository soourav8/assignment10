import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Header from '../../../Shared/Header/Header';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import OurServices from '../OurServiecs/OurServices';
import NewFood from '../NewFood/NewFood';
import { Link } from 'react-router-dom';


const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])



    const gridItems = chefs.map(chef => (
        <Col className=' mb-5' lg={4} sm={12} key={chef.id}>
            <Card className='m-2' style={{ width: '26rem' }}>
                <Card.Img style={{ with: "25rem", height: "25rem" }} variant="top" src={chef.picture} />
                <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Years of experience: {chef.years_of_experience}+ </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Numbers of recipes:  {chef.num_recipes}+ </Card.Subtitle>
                    <div className='d-flex align-items-center '>

                        <div className='flex-grow-1'>
                            <p>{chef.likes}<FcLike /></p>
                        </div>


                        {<Link to = {`/chef/${chef.id}`}>
                        <Button variant="primary">View Recipes</Button>

                        </Link>}
                        
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ));


    return (
        <div>
            <Header></Header>

            <OurServices></OurServices>

            <Container>




                <Row>
                    <h2 style={{ color: "#146C94", fontWeight: "700", textAlign: "center", marginTop: '5rem', marginBottom: "1rem" }} >Our chefs</h2>
                    {gridItems}
                </Row>
            </Container>

            <NewFood></NewFood>


        </div>
    );
};

export default Home;