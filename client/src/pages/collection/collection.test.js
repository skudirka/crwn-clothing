import {shallow, mount} from 'enzyme';
import React from 'react';

import {CollectionPage} from './collection.component';

describe('CollectionPage page', () => {
    let wrapper;
    let mockProps;

    const mockCollection = {
        id: '1',
        name: 'Collection1',
        items: [
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
        ]
    }

    beforeEach(() => {

        mockProps = {
            collection: mockCollection
        };

        wrapper = shallow(<CollectionPage {...mockProps} />);
    });

    it('should render CollectionPage page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render same number of CollectionItem as the number of items in the collection', () => {
        expect(wrapper.find('.collection-item').length).toEqual( mockCollection.items.length );
    });
})