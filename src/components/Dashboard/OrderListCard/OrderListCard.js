import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './OrderListCard.css';

const OrderListCard = ({orderDetail}) => {
    return (
        <Col className='m-auto pb-4 overflow-hidden' xs={11} sm={10} md={10}>
            <Row className='orderCardDesign'>
                <Col className='p-0 d-flex align-items-center overflow-hidden orderCardHeader' sm={12} md={7}>
                    <img src={orderDetail.imgURL} alt=""/>
                    <h4>{orderDetail.packageName}</h4>
                </Col>
                <Col className='p-0 p-sm-2 pr-3 d-flex align-items-center justify-content-between' sm={12} md={5}>
                    <h4 className='order-sm-1 order-md-0'>${orderDetail.price}</h4>
                    <Button style={{textAlign:'end'}}>{orderDetail.status}</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default OrderListCard;