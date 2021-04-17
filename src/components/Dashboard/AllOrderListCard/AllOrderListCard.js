import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AllOrderListCard.css';

const AllOrderListCard = ({orderDetails}) => {
    let secondOption,thirdOption;
    if(orderDetails.status=='Pending'){
        secondOption='OnGoing'
        thirdOption='Done'
    }else if(orderDetails.status=='OnGoing'){
        secondOption='Pending'
        thirdOption='Done'
    }else{
        secondOption='Pending'
        thirdOption='OnGoing'
    }
    const handleOrderStatus=event=>{
        const status=event.target.value;
        const newStatusData={status:status,id:orderDetails._id}
        fetch('http://localhost:3001/updateStatus',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newStatusData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Status Updated Successfully.');
            }
        })
    }

    return (
        <Col className='m-auto pb-4 overflow-hidden' xs={11} sm={10} md={10}>
            <Row className='orderCardDesign' >
                <Col className='p-0 d-flex align-items-center overflow-hidden orderCardHeader' sm={12} md={7}>
                    <img src={orderDetails.imgURL} alt=""/>
                    <h4>{orderDetails.packageName}</h4>
                </Col>
                <Col className='p-0 p-sm-2 pr-3 d-flex align-items-center justify-content-between' sm={12} md={5}>
                    <h4 className='order-sm-1 order-md-0'>${orderDetails.price}</h4>
                    <div style={{textAlign:'end'}}>
                        <select onChange={handleOrderStatus} className='selectDesign'>
                            <option value={orderDetails.status}>{orderDetails.status}</option>
                            <option value={secondOption}>{secondOption}</option>
                            <option value={thirdOption}>{thirdOption}</option>
                        </select>
                    </div>
                </Col>
                <Col md={12} className='d-flex justify-content-between align-items-center'>
                    <span>Name: {orderDetails.name}</span>
                    <span>Email: {orderDetails.email}</span>
                    <span>PlacedOn: {orderDetails.time}</span>
                </Col>
            </Row>
        </Col>
    );
};

export default AllOrderListCard;