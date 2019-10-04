import {shallow} from 'enzyme';
import React from 'react';

import {Directory} from './directory.component';

describe('Directory component', () => {
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
            sections: mockCollections
        }
        wrapper = shallow(<Directory {...mockProps} />);
    });

    it('should render Directory component.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a MenuItem component for each section.', () => {
        expect( wrapper.find('.menu-item').length ).toEqual( mockCollections.length );
    });
});