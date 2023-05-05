import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import { FcLike } from "react-icons/fc";
import { useParams } from 'react-router-dom';

const Chef = () => {
    const [chefData, setChefData] = useState({})
    
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-soourav8.vercel.app/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data));
            
    }, [])


    return (
        <Container className='d-flex border border-secondary border-2 p-5 '>

            <div>
                <img style={{width:"30rem"}} src={chefData.picture} alt="" />
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