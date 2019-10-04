import {shallow} from 'enzyme';
import React from 'react';

import {Header} from './header.component';

import {signOutStart} from '../../redux/user/user.actions';

describe('Header component', () => {
    let wrapper;
    const mockDispatch = jest.fn();
    
    const mockProps = {
        currentUser: {},
        signOutStart: () => mockDispatch(signOutStart())
    };

    beforeEach(() => {
        wrapper = shallow(<Header {...mockProps} />);
    });

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('when user is present, sign-out link is available and sign out click works.', () => {
        const signOut = wrapper.find('.sign-out');
        expect(signOut.length).toBeTruthy();
        signOut.simulate('click');
        expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
    });

    it('when user is not present, sign-in link is available and sign out link is not.', () => {
        mockProps.currentUser = null;
        wrapper = shallow(<Header {...mockProps} />);
        
        expect(wrapper.find('.sign-in').length).toBeTruthy();
        expect(wrapper.find('.sign-out').length).toBeFalsy();
    });
});