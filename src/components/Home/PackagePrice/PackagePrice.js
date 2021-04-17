import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import PriceCard from '../PriceCard/PriceCard';
import './PackagePrice.css';

const PackagePrice = () => {
    const [packageData,setPackageData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/packages')
        .then(res=>res.json())
        .then(data=>setPackageData(data));
    },[])


    return (
        <div>
            <div className='text-center mt-4 mb-4 packageContainer'>
                <div className='packageHeader mt-3 mb-5'>
                    <h6>CHOOSE ONE OF MY</h6>
                    <h2>HOT PRICES</h2>
                </div>
                <Row className='p-3 m-0'>
                    {
                        packageData.map(data=><PriceCard key={data._id} packageDetail={data}/>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default PackagePrice;