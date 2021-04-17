import {
    CardCvcElement,
    CardExpiryElement, CardNumberElement, useElements, useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import { Button } from "react-bootstrap";

const useOptions = () => {
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize:"16px",
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      []
    );
  
    return options;
  };

const PaymentForm = ({handlePayment}) => {

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement)
      });
      handlePayment(payload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className='w-100'>
                <span className='p-1 h5'>Card number</span>
                <CardNumberElement className='form-control' options={options}/>
            </label>
            <br/>
            <label className='w-100'>
                <span className='p-1 h5'>Expiration date</span>
                <CardExpiryElement className='form-control' options={options}/>
            </label>
            <br/>
            <label className='w-100'>
                <span className='p-1 h5'>CVC</span>
                <CardCvcElement className='form-control' options={options}/>
            </label>
            <br/>
            <div style={{textAlign:'end'}}>
                <Button type="submit" variant='success' disabled={!stripe}>Proceed to Checkout</Button>
            </div>
        </form>
    );
};

export default PaymentForm;