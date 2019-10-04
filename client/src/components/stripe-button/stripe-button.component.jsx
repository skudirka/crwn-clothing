import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_yV9AZvGkMZiBsZqW6mvaEu3v00NYW5Z6Et';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            alert('There was an issue with your payment. Please be sure you use the provided credit card.');
        });
    }

    return (
        <StripeCheckout 
            label="Pay Now" 
            name="CRWN Clothing Ltd." 
            billingAddress 
            shippingAddress 
            image='http://svgshare.com/i/CUz.svg' 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel="Pay Now" 
            token={onToken} 
            stripeKey={publishableKey}
            className="stripe"
        />
    )
};

export default StripeCheckoutButton;