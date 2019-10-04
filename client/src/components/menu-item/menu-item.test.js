import {shallow} from 'enzyme';
import React from 'react';

import {MenuItem} from './menu-item.component';

describe('MenuItem component', () => {
    let wrapper;
    let mockHistory;
    let mockMatch;
    let mockProps;

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockMatch = {
            url: 'home/'
        };

        mockProps = {
            title: 'Collection1',
            imageUrl: 'https://via.placeholder.com/150',
            size: 'large',
            history: mockHistory,
            linkUrl: '#',
            match: mockMatch
        };

        wrapper = shallow(<MenuItem {...mockProps} />);
    });

    it('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push when button is clicked', () => {
        wrapper.find('.menu-item').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
    });

     it('size prop should be passed as class to menu-item', () => {
        expect(wrapper.find('.menu-item').hasClass(mockProps.size)).toBeTruthy();
    });
    
});