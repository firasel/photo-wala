import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className='p-4'>
            <div className='m-auto testimonialCarouselImg'>
                <img className="d-block w-100" src={testimonial.imgURL} alt="Fourth slide"/>
            </div>
            <div className='text-center mt-4 mb-2'>
                <p className='text-muted'>{testimonial.message}</p>
                <h3>{testimonial.name}</h3>
            </div>
        </div>
    );
};

export default TestimonialCard;