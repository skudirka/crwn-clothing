import {shallow, mount, render} from 'enzyme';
import React from 'react';

import {CheckoutItem} from './checkout-item.component';

import {addItem, removeItem, clearItemFromCart} from '../../redux/cart/cart.actions';

describe('CheckoutItem component', () => {
    let wrapper;
    let mockDispatch;
    let mockItem;

    beforeEach(() => {
        mockDispatch = jest.fn();

        mockItem = {
            imageUrl: 'https://via.placeholder.com/150',
            price: 10,
            name: 'hats',
            quantity: 2
        };

        const mockProps = {
            cartItem: mockItem,
            addItem: item => mockDispatch(addItem(item)),
            removeItem: item => mockDispatch(removeItem(item)),
            clearItem: item => mockDispatch(clearItemFromCart(item))
        };

        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call removeItem when left arrow is clicked', () => {
        wrapper.find('.arrow.remove').simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(removeItem(mockItem));
    });

    it('should call addItem when right arrow is clicked', () => {
        wrapper.find('.arrow.add').simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(addItem(mockItem));
    });

    it('should call clearItem when X is clicked', () => {
        wrapper.find('.remove-button').simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(clearItemFromCart(mockItem));
    });

});