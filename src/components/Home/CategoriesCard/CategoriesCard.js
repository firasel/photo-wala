import React from 'react';
import { Col } from 'react-bootstrap';
import './CategoriesCard.css';

const CategoriesCard = ({categories}) => {
    return (
        <Col xs={10} sm={6} md={3}>
            <div className='categoriesCard mb-4'>
                <img src={categories.imgURL} alt=""/>
                <h4>{categories.categoriesName}</h4>
            </div>
        </Col>
    );
};

export default CategoriesCard;