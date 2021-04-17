import React, { useContext } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const OrderForm = ({submitFunction,packageData}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Form onSubmit={handleSubmit(submitFunction)}>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Your name" {...register("name", { required: true })} value={loggedInUser.name} />
                {errors.name && <span className='text-danger'>name is required</span>}
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" placeholder="Enter Your email" {...register("email", { required: true })} value={loggedInUser.email} />
                {errors.email && <span className='text-danger'>email is required</span>}
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Delivery address" {...register("address", { required: true })} />
                {errors.address && <span className='text-danger'>address is required</span>}
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Enter Your Number" {...register("number", { required: true })} />
                {errors.number && <span className='text-danger'>Phone number is required</span>}
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label className='pl-1 h6'>Package Name</Form.Label>
                    <Form.Control style={{fontWeight:'700'}} type="text" placeholder="Package Name" value={packageData.packageName} disabled />
                </Form.Group>
                <Form.Group className='col-3' as={Col}>
                    <Form.Label className='pl-1 h6'>Price</Form.Label>
                    <Form.Control style={{fontWeight:'700'}} type="text" placeholder="Package Price" value={packageData.price} disabled />
                </Form.Group>
            </Form.Row>
            <div style={{textAlign:'end'}}>
                <Button className='ml-auto pl-4 pr-4 pt-2 pb-2' type='submit'>Proceed to Order</Button>
            </div>
        </Form>
    );
};

export default OrderForm;