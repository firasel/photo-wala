import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,

    Link,

    Route, Switch, useHistory
} from "react-router-dom";
import { UserContext } from '../../../App';
import AddCategories from '../AddCategories/AddCategories';
import AddService from '../AddService/AddService';
import AllOrderList from '../AllOrderList/AllOrderList';
import Home from '../Home/Home';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import Order from '../Order/Order';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import './Dashborad.css';
const Dashboard = () => {
    const history=useHistory();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        fetch('https://photowalaapi.herokuapp.com/checkAdmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(loggedInUser)
        }).then(res=>res.json())
        .then(data=>setIsAdmin(data));
    },[])

    return (
        <Router>
            <Row className='m-0 p-0'>
                <Col className='p-1 dashboardHeader' xs={4} sm={3} md={3} lg={2}>
                    <div className='dashboardNavbar'>
                        <div onClick={()=>history.push('/home')} style={{cursor:'pointer'}} className='p-2 dashboardNavbar d-flex align-items-center'>
                            <img src="https://i.ibb.co/TBDZwFB/camera-Logo-min-removebg-preview.png" alt="navbarImg"/>
                            <h3>PhotoWala</h3>
                        </div>
                        <Button onClick={()=>history.push('/home')} variant='none' className='dashboardNavBtn w-100'>Home</Button>
                        {
                            !isAdmin ?
                            <div>
                                <Button as={Link} to='/dashboard/orderlist' variant='none' className='dashboardNavBtn w-100'>Order List</Button>
                                <Button as={Link} to='/dashboard/review' variant='none' className='dashboardNavBtn w-100'>Review</Button>
                            </div>
                            :
                            <div>
                                <Button as={Link} to='/dashboard/allorders' variant='none' className='dashboardNavBtn w-100'>Order List</Button>
                                <Button as={Link} to='/dashboard/addservice' variant='none' className='dashboardNavBtn w-100'>Add Service</Button>
                                <Button as={Link} to='/dashboard/makeadmin' variant='none' className='dashboardNavBtn w-100'>Make Admin</Button>
                                <Button as={Link} to='/dashboard/manageservice' variant='none' className='dashboardNavBtn w-100'>Manage Services</Button>
                                <Button as={Link} to='/dashboard/addcategories' variant='none' className='dashboardNavBtn w-100'>Add Categories</Button>
                            </div>
                        }
                    </div>
                </Col>
                <Switch>
                    <Route exact path='/dashboard'>
                        <Home/>
                    </Route>
                    <Route path='/dashboard/order/:id'>
                        <Order/>
                    </Route>
                    <Route path='/dashboard/orderlist'>
                        <OrderList/>
                    </Route>
                    <Route path='/dashboard/review'>
                        <Review/>
                    </Route>
                    <Route path='/dashboard/addservice'>
                        <AddService/>
                    </Route>
                    <Route path='/dashboard/makeadmin'>
                        <MakeAdmin/>
                    </Route>
                    <Route path='/dashboard/manageservice'>
                        <ManageService/>
                    </Route>
                    <Route path='/dashboard/allorders'>
                        <AllOrderList/>
                    </Route>
                    <Route path='/dashboard/addcategories'>
                        <AddCategories/>
                    </Route>
                </Switch>
            </Row>
        </Router>
    );
};

export default Dashboard;