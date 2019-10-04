import {shallow, mount, render} from 'enzyme';
import React from 'react';

import {CollectionItem} from './collection-item.component';

import {addItem} from '../../redux/cart/cart.actions';

describe('CollectionItem component', () => {

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
            item: mockItem,
            addItem: item => mockDispatch(addItem(item))
        };

        wrapper = shallow(<CollectionItem {...mockProps} />);
    });

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call addItem when add-to-cart button is clicked', () => {
        wrapper.find('AddButton').simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(addItem(mockItem));
    });

});