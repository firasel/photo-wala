import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { UserContext } from '../../../App';
const Home = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Col className='p-0 m-0' xs={8} sm={9} md={9} lg={10}>
            <div style={{height:'100vh',background:'#E5E5E5'}} className='w-100 d-flex align-items-center justify-content-center'>
                <h3 className='pl-4 pt-2 text-center'>Welcome to <span className='h2'>{loggedInUser.name}</span></h3>
            </div>
        </Col>
    );
};

export default Home;