import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Cards from '../Cards/Cards';

const Home = () => {
    const [chefs , setChefs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/")
        .then(res=> res.json())
        .then(data => setChefs(data))
    } ,[])

    return (
        <div>

           {
            chefs.map(chef => <Cards key={id} chef={chef}></Cards>)
           }
            
            
        </div>
    );
};

export default Home;