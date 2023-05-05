import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Chef = () => {
    const [chefData, setChefData] = useState({})
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data));

    }, [])

    

    const handleToast1 = () => {
         toast("Added to favourite !", );
         setIsVisible1(!isVisible1);
        

    }
    const handleToast2 = () => {
         toast("Added to favourite !", );
         setIsVisible2(!isVisible2);
        

    }
    const handleToast3 = () => {
         toast("Added to favourite !", );
         setIsVisible3(!isVisible3);
        

    }


    return (
        <Container>
            <Container className='d-flex border  p-5 '>

                <div>
                    <img style={{ width: "30rem" }} src={chefData.picture} alt="" />
                </div>
                <div className='p-4'>
                    <p className='fs-1 fw-bolder'>Name: {chefData.name}</p>
                    <p className='fs-2 fw-normal'>{chefData.description}</p>
                    <p className='fs-2 fw-normal'>Experience: {chefData.years_of_experience} years</p>
                    <p className='fs-2 fw-normal'>Recipes: {chefData.num_recipes}</p>
                    <p className='fs-2 fw-normal'>Likes: {chefData.likes}+</p>

                    

                </div>





            </Container>
            <div>
                    <p className='text-center fs-2 fw-bold mb-3'>Most Popular Recipes</p>
            <CardGroup>
                
                <Card>
                    <Card.Img variant="top" src={chefData.img1} />
                    <Card.Body>
                        <Card.Title>{chefData.recipe1}</Card.Title>
                            <p className='fs-normal fw-bold'>Ingredients</p>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <p>• {chefData.ingredients1}</p>
                                <p>• {chefData.ingredients2}</p>
                                <p>• {chefData.ingredients3}</p>
                                
                            </div>
                            <div>
                            
                                <p>• {chefData.ingredients4}</p>
                                <p>• {chefData.ingredients5}</p>
                            </div>
                        </div>
                        <Card.Text>
                            <p><small>{chefData.method}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <div>
                        <Rating style={{ maxWidth: 90 }} value={Math.round(chefData.ratings)}  readOnly />
                        </div>
                        <div>

                        <small className="text-muted">  <Button variant="light" onClick={handleToast1}>{isVisible1 ? <FcLike/> : "" }</Button></small>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chefData.img2} />
                    <Card.Body>
                        <Card.Title>{chefData.recipe2}</Card.Title>
                        <p className='fs-normal fw-bold'>Ingredients</p>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <p>• {chefData.ingredients1}</p>
                                <p>• {chefData.ingredients2}</p>
                                <p>• {chefData.ingredients3}</p>
                                
                            </div>
                            <div>
                            
                                <p>• {chefData.ingredients4}</p>
                                <p>• {chefData.ingredients5}</p>
                            </div>
                        </div>
                        <Card.Text>
                        <p><small>{chefData.method}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <div>
                        <Rating style={{ maxWidth: 90 }} value={Math.round(chefData.ratings)}  readOnly />
                        </div>
                        <div>

                        <small className="text-muted">  <Button variant="light" onClick={handleToast2}>{isVisible2 ? <FcLike/> : "" }</Button></small>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chefData.img3} />
                    <Card.Body>
                        <Card.Title>{chefData.recipe3}</Card.Title>
                        <p className='fs-normal fw-bold'>Ingredients</p>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <p>• {chefData.ingredients1}</p>
                                <p>• {chefData.ingredients2}</p>
                                <p>• {chefData.ingredients3}</p>
                                
                            </div>
                            <div>
                            
                                <p>• {chefData.ingredients4}</p>
                                <p>• {chefData.ingredients5}</p>
                            </div>
                        </div>
                        <Card.Text>
                        <p><small>{chefData.method}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <div>
                        <Rating style={{ maxWidth: 90 }} value={Math.round(chefData.ratings)}  readOnly />
                        </div>
                        <div>

                        <small className="text-muted">
                             <Button variant="light" onClick={handleToast3}>{isVisible3 ? <FcLike/> : "" }</Button>
                             </small>
                        <ToastContainer position="top-center" theme="dark"/>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </div>
        </Container>
    );
};

export default Chef;