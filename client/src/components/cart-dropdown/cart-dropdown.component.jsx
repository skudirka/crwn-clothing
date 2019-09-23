import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems, selectCartHidden} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CheckoutButton
} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, hidden, history, dispatch}) => {
    const openClass = hidden ? '' : 'open';
    return (
    <CartDropdownContainer className={`cart-dropdown ${openClass}`}>
        <CartItemsContainer className="cart-items">
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : (
                    <EmptyMessageContainer className="empty-message">Your cart is empty</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(CartDropdown));