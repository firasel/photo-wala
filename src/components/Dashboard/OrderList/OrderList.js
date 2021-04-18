import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import OrderListCard from '../OrderListCard/OrderListCard';


const OrderList = () => {
    const [ordersData,setOrdersData]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://photowalaapi.herokuapp.com/orderData',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(loggedInUser)
        })
        .then(res=>res.json())
        .then(data=>setOrdersData(data.reverse()))
    },[])

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>Order Lists</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    {
                        ordersData.length<=0 && <h3 className='p-4 text-info' >No Orders</h3>
                    }
                    {
                        ordersData.map(data=><OrderListCard key={data._id} orderDetail={data}/>)
                    }
                </Row>
            </div>
        </Col>
    );
};

export default OrderList;