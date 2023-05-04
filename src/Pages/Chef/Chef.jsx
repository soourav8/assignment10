import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Chef = () => {
    const {id} = useParams();
    useEffect( ()=>{
        fetch(`http://localhost:5000/${id}`)
        .then(res=> res.json())
        .then(data => console.log(data));
    } ,[])
    return (
        <div>
            <h2>This is from chef  </h2>
        </div>
    );
};

export default Chef;