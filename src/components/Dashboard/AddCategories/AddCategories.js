import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddCategories = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl,setImageUrl]=useState(null);
    const [imgUploadSuccess,setImgUploadSuccess]=useState(false);
    
    const onSubmit=data=>{
        data.imgURL=imageUrl;
        fetch('https://photowalaapi.herokuapp.com/addCategories',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert('Categories Added SuccessFully.');
            }
        })
    }


    const handleImageUpload=event=>{
        setImgUploadSuccess(true);
        const imageData = new FormData();
        imageData.set('key','a52d1dcbb5d9055fd1a000e42d4f0578');
        imageData.append('image',event.target.files[0])
        fetch('https://api.imgbb.com/1/upload',{
            method:'POST',
            body:imageData
        })
        .then((res) =>res.json())
        .then(data=>{
            setImageUrl(data.data.display_url);
            setImgUploadSuccess(false);
            console.log(data.data.display_url);
        })
        .catch(error=>console.log('error: ',error));
    }

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>Add Categories</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    <Col style={{background:'rgb(245,245,245)',borderRadius:'10px'}} className='m-auto shadow p-3' xs={11} sm={10} md={7}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label>Categories Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter categories name" {...register("categoriesName", { required: true })} />
                                {errors.categoriesName && <span className='text-danger'>categories name is required</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Upload Photo</Form.Label>
                                <div className='d-flex justify-content-between '>
                                    <input onChange={handleImageUpload} type="file" />
                                    {
                                        imgUploadSuccess && <Spinner animation="border" variant="primary" />
                                    }
                                </div>
                            </Form.Group>
                            <div style={{textAlign:'end'}}>
                                <Button variant='dark' className='ml-auto pl-4 pr-4 pt-2 pb-2' type='submit'><FontAwesomeIcon icon={faPlusSquare} /> Add Categories</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default AddCategories;