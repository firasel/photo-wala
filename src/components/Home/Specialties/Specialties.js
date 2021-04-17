import React from 'react';
import { Row } from 'react-bootstrap';
import SpecialtiesCard from '../SpecialtiesCard/SpecialtiesCard';

const SpecialtiesData=[
    {
        _id:'weerf5654564e',
        title:'Fashion Photography',
        img:'https://i.ibb.co/cXWmJQ1/fashion-Photo.jpg',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam soluta, dicta autem officia tempora culpa ducimus dignissimos cumque sint magni.'
    },
    {
        _id:'cfe541546rrt',
        title:'Nature Photography',
        img:'https://i.ibb.co/C0rKj1P/nature-Photo.jpg',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam soluta, dicta autem officia tempora culpa ducimus dignissimos cumque sint magni.'
    },
    {
        _id:'2v5695vfef8',
        title:'Product Photography',
        img:'https://i.ibb.co/L5G7F05/product-Photo.jpg',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam soluta, dicta autem officia tempora culpa ducimus dignissimos cumque sint magni.'
    }
]

const Specialties = () => {
    return (
        <div className='container text-center mt-5 mb-4'>
            <h2>OUR SPECIALTIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil perferendis incidunt in assumenda adipisci quis!</p>
            <Row>
                {
                    SpecialtiesData.map(data=><SpecialtiesCard key={data._id} specialData={data}/>)
                }
            </Row>
        </div>
    );
};

export default Specialties;