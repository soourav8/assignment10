import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


const OurServices = () => {
    return (
        <div>



            
                <Container>
                    <h2 className="text-center mb-4" style={{color: "#146C94", fontWeight: "700", textAlign :"center", marginTop: '7rem', }}>Family Favorites</h2>
                    <Row>
                        <Col lg={4}>
                            <div className="service">
                                <div >
                                    <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/29/0/FN_Ready-jet-cook-rjc101-lo-mein_6x4.jpg.rend.hgtvcom.1280.720.suffix/1567085927791.jpeg" alt="" />
                                    
                                </div>
                                <h3>Lo Mein Noodles</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="service">
                                <div >
                                <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/5/0/WU0710H_Pulled-Pork_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1485881039763.jpeg" alt="" />
                                </div>
                                <h3>Pulled Mutton</h3>
                                <p>
                                Each of these noodle roll-ups has just the right amount of filling and bakes in a fraction of the time a traditional deep-dish lasagna takes..
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="service">
                                <div  >
                                <img style={{height : "14rem"}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/11/0/FNK_Pesto-Lasagna-Rolls-H_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1494520429705.jpeg" alt="" />
                                    
                                </div>
                                <h3>Pesto Lasagna Rolls</h3>
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

export default OurServices;