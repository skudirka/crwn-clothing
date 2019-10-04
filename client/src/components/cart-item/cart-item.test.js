import {shallow, mount, render} from 'enzyme';
import React from 'react';

import CartItem from './cart-item.component';

describe('CartItem component', () => {

    it('should render CartItem component', () => {
        const mockItem = {
            imageUrl: 'https://via.placeholder.com/150',
            price: 10,
            name: 'hats',
            quantity: 2
        };
        expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
    });

});