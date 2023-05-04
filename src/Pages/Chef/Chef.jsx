import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import { FcLike } from "react-icons/fc";
import { useParams } from 'react-router-dom';

const Chef = () => {
    const [chefData, setChefData] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data));
    }, [])


    return (
        <Container className='d-flex border border-secondary border-2 p-5 '>

            <div>
                <img src={chefData.picture} alt="" />
            </div>
            <div className='p-4'>
                <p>Name: {chefData.name}</p>
                <p>{chefData.description}</p>
                <p>Experience: {chefData.years_of_experience} years</p>
                <p>Recipes: {chefData.num_recipes}</p>
                <p>Likes: {chefData.likes}+</p>

            </div>





        </Container>
    );
};

export default Chef;