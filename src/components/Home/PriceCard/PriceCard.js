import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PriceCard.css';

const PriceCard = ({packageDetail}) => {
    return (
        <Col className='m-auto pb-4' xs={10} sm={5} md={4}>
            <Card className='priceCard h-100'>
                <div className='priceCardImg'>
                    <div>
                        <Card.Img variant="top" src={packageDetail.imgURL} />
                    </div>
                </div>
                <Card.Body>
                <Card.Title>{packageDetail.packageName}</Card.Title>
                <Card.Text className='text-muted'>{packageDetail.packageDetail}</Card.Text>
                </Card.Body>
                <h3 className='packagePrice'>${packageDetail.price}</h3>
                <Card.Footer className='priceCardBtn mb-2' style={{border:'0',background:'none'}}>
                    <Button as={Link} to={`/dashboard/order/${packageDetail._id}`} variant='dark' className='m-auto'>ByeNow</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default PriceCard;