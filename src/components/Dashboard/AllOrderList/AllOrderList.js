import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AllOrderListCard from '../AllOrderListCard/AllOrderListCard';

const AllOrderList = () => {
    const [allOrderData,setAllOrderData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/allOrderData')
        .then(res=>res.json())
        .then(data=>setAllOrderData(data))
    },[])

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>All Orders By Customer</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    {
                        allOrderData.map(data=><AllOrderListCard key={data._id} orderDetails={data}/>)
                    }
                </Row>
            </div>
        </Col>
    );
};

export default AllOrderList;