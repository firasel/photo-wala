import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import OrderForm from '../OrderForm/OrderForm';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Order = () => {
    const {id}=useParams();
    const [packageData,setPackageData]=useState({});
    useEffect(()=>{
        fetch(`https://photowalaapi.herokuapp.com/loadData/${id}`)
        .then(res=>res.json())
        .then(data=>setPackageData(data));
    },[])

    const [orderData,setOrderData]=useState({});
    const [isData,setIsData]=useState(false);
    const onSubmit = data => {
        setOrderData(data);
        setIsData(true);
    }
    const handlePayment=data=>{
        orderData.paymentId=data.paymentMethod.id;
        orderData.time=(new Date()).toLocaleString();
        orderData.status='Pending';
        orderData.imgURL=packageData.imgURL;
        orderData.packageName=packageData.packageName;
        orderData.price=packageData.price
        fetch('https://photowalaapi.herokuapp.com/order',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('SuccessFully Ordered');
            }
        })
    };

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>Order</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    <Col className='m-auto' xs={11} sm={10} md={7}>
                       {
                           !isData?<OrderForm packageData={packageData} submitFunction={onSubmit}/> : <ProcessPayment handlePayment={handlePayment}/>
                       }
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Order;