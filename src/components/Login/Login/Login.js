import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { UserContext } from '../../../App';
import firebaseConfig from "./firebase.config";
import './Login.css';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName,email} = result.user;
            const userData={name:displayName,email}
            setLoggedInUser(userData)
            history.replace(from);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error: ',errorCode,errorMessage)
        });
    }

    return (
        <div className='text-center w-100'>
            <div className='mt-5 loginHeader mb-4'>
                <img src="https://i.ibb.co/TBDZwFB/camera-Logo-min-removebg-preview.png" alt="logo img"/>
                <h3>PhotoWala</h3>               
            </div>
            <Button className='m-auto d-flex align-items-center p-2 signInBtn' variant='none' onClick={handleGoogleSignIn}>
                <img style={{width:'3rem'}} src="https://i.ibb.co/xz40BSR/google.png" alt="Icon img"/>
                <h5 className='pl-3 h5'>Sign In With Google</h5>
            </Button>
        </div>
    );
};

export default Login;