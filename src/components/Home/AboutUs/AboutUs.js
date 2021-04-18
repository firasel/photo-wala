import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='mt-5'>
            <Row className='d-flex align-items-center m-0'>
                <Col xs={10} md={6} className='m-auto'>
                    <div className='text-center p-3'>
                        <h4 className='mb-3'>About Us</h4>
                        <h3 style={{fontSize:'2.5rem',fontFamily:"Niconne,cursive"}}>Forhad Islam Rasel</h3>
                        <p className='mt-3 mb-3 text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam delectus neque, animi quam quaerat eveniet numquam repellat quia.Dolorum dolorem libero inventore culpa quibusdam et placeat commodi aperiam fuga totam.</p>
                        <Button className='mt-3' variant='dark'> <FontAwesomeIcon icon={faChevronRight}/> Know More</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} className='p-0'>
                    <img style={{width:'100%'}} src="https://i.ibb.co/LZ6nFks/about-Photo.jpg" alt=""/>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;