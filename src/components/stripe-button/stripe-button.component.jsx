import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_yV9AZvGkMZiBsZqW6mvaEu3v00NYW5Z6Et';

    const onToken = token => {
        console.log('token: ', token);
        alert('Payment Successful');
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
        />
    )
};

export default StripeCheckoutButton;