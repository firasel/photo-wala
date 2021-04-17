import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=data=>{
        fetch('http://localhost:3001/addAdmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert('Admin Added SuccessFully.');
            }
        })
    }

    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <h3 className='pl-4 pt-2'>Make Admin</h3>
            <div className='p-4' style={{width:'100%',minHeight:'93vh',background:'#E5E5E5'}}>
                <Row>
                    <Col style={{background:'rgb(245,245,245)',borderRadius:'10px'}} className='m-auto shadow p-3' xs={11} sm={10} md={7}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label className='h5'>Admin Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter New Admin Email" {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>Email is required</span>}
                            </Form.Group>
                            <div style={{textAlign:'end'}}>
                                <Button variant='dark' className='ml-auto pl-4 pr-4 pt-2 pb-2' type='submit'>Add Admin</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default MakeAdmin;