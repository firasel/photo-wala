import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CategoriesCard from '../CategoriesCard/CategoriesCard';

const Categories = () => {
    const [catagoriesData,setCatagoriesData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/categories')
        .then(res=>res.json())
        .then(data=>setCatagoriesData(data));
    },[])

    return (
        <div style={{background:'#f2f2f2'}} className='pt-5 pb-4'>
            <div className='container text-center'>
                <h3 className='pb-4'>Our All Categories</h3>
                <Row>
                    {
                        catagoriesData.map(data=><CategoriesCard key={data._id} categories={data}/>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Categories;