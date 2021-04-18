import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';

const ManageService = () => {
    const [allServiceData,setAllServiceData]=useState([]);
    useEffect(()=>{
        fetch('https://photowalaapi.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>{
            setAllServiceData(data);
        })
    },[])

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>Manage Packages</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    {
                        allServiceData.map(data=><ManageServiceCard key={data._id} serviceData={data}/>)
                    }
                </Row>
            </div>
        </Col>
    );
};

export default ManageService;