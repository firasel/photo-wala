import React from 'react';
import { Col } from 'react-bootstrap';
import './SpecialtiesCard.css';

const SpecialtiesCard = ({specialData}) => {
    return (
        <Col className='m-auto' xs={10} sm={6} md={4}>
        <div className='text-center specialtiesCard p-1'>
            <div className='p-4'>
                <div className='specialCardImg'>
                    <img src={specialData.img} alt=""/>
                </div>
            </div>
            <h4>{specialData.title}</h4>
            <p className='text-muted'>{specialData.message}</p>
        </div>
        </Col>
    );
};

export default SpecialtiesCard;