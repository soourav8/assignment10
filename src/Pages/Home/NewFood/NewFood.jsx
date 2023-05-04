import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NewFood = () => {
    return (
        <div>
            <Container>
                    <h2 className="text-center mb-4" style={{color: "#146C94", fontWeight: "700", textAlign :"center", marginTop: '5rem',  }}>What's New</h2>
                    <Row>
                        <Col lg={3}>
                            <div className="service">
                                <div >
                                    <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/4/1/FNK_Creamy-Garlicky-Shrimp-Skillet-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1507136399226.jpeg" alt="" />
                                    
                                </div>
                                <h3>Creamy, Garlicky Shrimp Skillet</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="service">
                                <div >
                                <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/9/0/FNK_Lemon-Garlic-Skillet-Chicken-Potatoes_s4x3.jpg.rend.hgtvcom.966.725.suffix/1510259142284.jpeg" alt="" />
                                </div>
                                <h3>Lemon-Garlic Skillet Chicken and Potatoes</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="service">
                                <div  >
                                <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/7/25/0/FNK_Shrimp-White-Bean-And-Feta-Skillet-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1532527786890.jpeg" alt="" />
                                    
                                </div>
                                <h3>Shrimp, White Bean and Feta Skillet</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="service">
                                <div  >
                                <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/4/2/FNK_Cornbread-Topped-Cast-Iron-Skillet-Chili-2_s4x3.jpg.rend.hgtvcom.966.725.suffix/1480899713848.jpeg" alt="" />
                                    
                                </div>
                                <h3>Cornbread Topped Cast-Iron Skillet Chili</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default NewFood;