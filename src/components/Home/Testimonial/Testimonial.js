import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css';

const Testimonial = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1},
        { width: 768, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 }
      ]

    const [allReviewData,setAllReviewData]=useState([]);
    useEffect(()=>{
        fetch('https://photowalaapi.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setAllReviewData(data))
    },[])
    return (
        <div>
            <div className='text-center mt-4 mb-4'>
                <div className='testimonialHeader mt-3 mb-5'>
                    <h6>MY CLIENTS</h6>
                    <h2>TESTIMONIAL</h2>
                </div>
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000} >
                    {
                        allReviewData.map(data=><TestimonialCard key={data._id} testimonial={data}/>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;