import {shallow, mount} from 'enzyme';
import React from 'react';

import {CheckoutPage} from './checkout.component';

describe('CheckoutPage page', () => {
    let wrapper;
    let mockDispatch;
    let mockProps;

    beforeEach(() => {
        mockDispatch = jest.fn();

        mockProps = {
            cartItems: [{ id: 1 }, { id: 2 }, { id: 3 }],
            total: 3
        };

        wrapper = shallow(<CheckoutPage {...mockProps} />);
    });

    it('should render CheckoutPage page', () => {
        expect(wrapper).toMatchSnapshot();
    });
})