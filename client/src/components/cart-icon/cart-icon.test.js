import {shallow, mount, render} from 'enzyme';
import React from 'react';

import {CartIcon} from './cart-icon.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartIcon component', () => {
    let wrapper;
    let mockDispatch;
    const mockItemCount = 5;

    beforeEach(() => {
        mockDispatch = jest.fn();

        const mockProps = {
            itemCount: mockItemCount,
            toggleCartHidden: () => mockDispatch(toggleCartHidden())
        };

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('rendered item count should match data', () => {
        const count = wrapper.find('ItemCountContainer').text();
        expect(count).not.toBeNaN();
        expect(parseFloat(count)).toEqual(mockItemCount);
    });

    it('should call toggleCartHidden when button is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });
});