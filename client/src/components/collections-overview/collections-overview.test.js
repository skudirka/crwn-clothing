import {shallow, mount, render} from 'enzyme';
import React from 'react';

import {CollectionsOverview} from './collections-overview.component';

describe('CollectionsOverview component', () => {
    let wrapper;
    const mockCollections = [
        {
            id: '1',
            name: 'Collection1',
            items: []
        },
        {
            id: '2',
            name: 'Collection2',
            items: []
        },
        {
            id: '3',
            name: 'Collection3',
            items: []
        }
    ];

    beforeEach(() => {
        const mockProps = {
            collections: mockCollections
        }
        wrapper = shallow(<CollectionsOverview {...mockProps} />);
    });

    it('should render the CollectionsOverview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a CollectionPreview for each collection', () => {
        expect(wrapper.find('CollectionPreview').length).toEqual(mockCollections.length);
    });
});