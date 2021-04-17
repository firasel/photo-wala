import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <Carousel className='carousel-container' fade={true} pause={false} indicators={false} controls={false}>
            <Carousel.Item interval={2500}>
                <div className='carouselImg'>
                    <img className="d-block w-100" src="https://i.ibb.co/ZhkyXbC/carousel-Img4.jpg" alt="First slide" />
                </div>
                <Carousel.Caption>
                <h3>Welcome to Our PhotoGraphy Websites</h3>
                <p>we are the best photographer in Bangladesh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='carouselImg'>
                    <img className="d-block w-100" src="https://i.ibb.co/MVLq8tJ/carousel-Img3.jpg" alt="Second slide"/>
                </div>
                <Carousel.Caption>
                <h3>STAY POPULAR AND TRENDY WITH PhotoWala</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, cum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='carouselImg'>
                    <img className="d-block w-100" src="https://i.ibb.co/CVzt7S2/carousel-Img2.jpg" alt="Third slide"/>
                </div>
                <Carousel.Caption>
                <h3>Creative Photography studio</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit at perferendis exercitationem qui.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='carouselImg'>
                    <img className="d-block w-100" src="https://i.ibb.co/n7kqqkD/carousel-Img1.jpg" alt="Fourth slide"/>
                </div>
                <Carousel.Caption>
                <h3>Unique Moments</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam architecto ratione nobis aperiam veritatis.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;