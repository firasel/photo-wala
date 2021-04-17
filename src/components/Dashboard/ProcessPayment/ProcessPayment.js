import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51Ie2xNLRu4cx0axb3kgyUaij1UWZ8FwKD9f31BfefCD1ELdXPr1vJUq8XdR3yyBH2WOZ5KAmY7Pzewvf1taPl0Ye00LV4b44if');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;