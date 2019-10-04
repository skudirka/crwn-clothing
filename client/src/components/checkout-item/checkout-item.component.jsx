import React from 'react';
import {connect} from 'react-redux';

import {addItem, removeItem, clearItemFromCart} from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    LabelContainer,
    QuantityContainer,
    ValueContainer,
    ButtonContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem; 
    return (
        <CheckoutItemContainer className="checkout-item">
            <ImageContainer className="image-container">
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <LabelContainer className="name">{name}</LabelContainer>
            <QuantityContainer className="quantity">
                <ButtonContainer className="arrow remove" onClick={() => removeItem(cartItem)}>&#10094;</ButtonContainer>
                <ValueContainer className="value">{quantity}</ValueContainer>
                <ButtonContainer className="arrow add" onClick={() => addItem(cartItem)}>&#10095;</ButtonContainer>
            </QuantityContainer>
            <LabelContainer className="price">${price}</LabelContainer>
            <RemoveButtonContainer className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);