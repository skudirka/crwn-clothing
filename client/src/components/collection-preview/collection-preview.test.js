import {shallow, mount, render} from 'enzyme';
import React from 'react';

import CollectionPreview from './collection-preview.component';

describe('CollectionPreview component', () => {
    let wrapper;
    const mockItems = [
        {
            id: '1',
            name: 'Item1',
            imageUrl: 'https://via.placeholder.com/150',
            price: 10,
            quantity: 0,
        },
        {
            id: '2',
            name: 'Item2',
            imageUrl: 'https://via.placeholder.com/150',
            price: 20,
            quantity: 0,
        },
        {
            id: '3',
            name: 'Item3',
            imageUrl: 'https://via.placeholder.com/150',
            price: 13,
            quantity: 0,
        },
        {
            id: '4',
            name: 'Item4',
            imageUrl: 'https://via.placeholder.com/150',
            price: 16,
            quantity: 0,
        },
        {
            id: '5',
            name: 'Item5',
            imageUrl: 'https://via.placeholder.com/150',
            price: 9,
            quantity: 0,
        }
    ];

    beforeEach(() => {
        const mockProps = {
            items: mockItems,
            title: 'Mock Items'
        };

        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    it('should render CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should only render the first four items in the collection', () => {
        expect(wrapper.find('.collection-item').length).toEqual(4);
    });
});