import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Container >
            <Carousel className='mt-2 mb-5'>
                <Carousel.Item>
                    <img style={{height
                    : "25rem"}}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210710/original/pngtree-healthy-food-health-product-promotion-banner-picture-image_994071.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Delicious Food</h3>
                        <p>Let Us Know What Is Your Choice.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height
                        : "25rem"}}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210709/original/pngtree-food-whole-grains-fruit-and-vegetable-meal-background-picture-image_912698.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Extra Spicy</h3>
                        <p>Let Us Know What Is Your Choice.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height
                        : "25rem"}}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210710/original/pngtree-chinese-food-pasta-simple-white-banner-picture-image_1059420.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Delicious Noodles</h3>
                        <p>
                        Let Us Know What Is Your Choices.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;