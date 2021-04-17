import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{background:'black',color:'white !important'}} className='p-3 pt-4 mt-4'>
            <Row>
                <Col className='text-center text-white p-2' xs={10} sm={6} md={4}>
                    <h4>About Me</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus accusantium beatae. Harum, praesentium vitae?</p>
                </Col>
                <Col className='text-center text-white p-2' xs={10} sm={6} md={4}>
                    <h4>Contact</h4>
                    <p>40No Building, 12No Road, Chandghaon Abasik,Chittagong, Bangladesh</p><br/>
                    <p>+880123456789</p>
                    <p>contact@photoWala.com</p>
                </Col>
                <Col className='text-center text-white p-2' xs={10} sm={6} md={4}>
                    <h4>Quick Links</h4>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Catagories</h6>
                    <h6>Review</h6>
                </Col>
            </Row>
            <p className='text-center text-white'>Copyright&©2021 PhotoWala All Right Reserved.</p>
            <div className='d-flex align-items-center justify-content-center text-white'>
                <Button variant='none' className='text-white mr-4'>
                    <FontAwesomeIcon icon={faFacebook} />
                </Button>
                <Button variant='none' className='text-white mr-4'>
                    <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button variant='none' className='text-white'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Button>
            </div>
        </div>
    );
};

export default Footer;