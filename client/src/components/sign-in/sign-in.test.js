import {shallow, mount} from 'enzyme';
import React from 'react';

import {SignIn} from './sign-in.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

describe('SignIn component', () => {
    let wrapper;
    let mockDispatch;
    let mockProps;

    beforeEach(() => {
        mockDispatch = jest.fn();

        mockProps = {
            googleSignInStart: () => mockDispatch(googleSignInStart()),
            emailSignInStart: (email, password) => mockDispatch(emailSignInStart({email, password}))
        };

        wrapper = mount(<SignIn {...mockProps} />);
    });

    it('should render SignIn component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('call emailSignInStart on filling out form', () => {
        const mockEmail = 'joe@email.com';
        const mockPassword = '123abc';

        const mockUserEvent = { 
            target: { 
                name: 'email',
                value: mockEmail
            }
        };
        const mockPasswordEvent = { 
            target: {
                name: 'password',
                value: mockPassword
            }
        };
        const form = wrapper.find('form');
        form.find('[name="email"] FormInputContainer').simulate("change", mockUserEvent);
        form.find('[name="password"] FormInputContainer').simulate("change", mockPasswordEvent);
        form.simulate('submit');
        
        expect(mockDispatch).toHaveBeenCalledWith(emailSignInStart({
            email: mockEmail,
            password: mockPassword
        }));
    });

    it('call googleSignInStart on clicking option', () => {
        wrapper = shallow(<SignIn {...mockProps} />);
        wrapper.find('[isGoogleSignIn]').simulate("click");
        
        expect(mockDispatch).toHaveBeenCalledWith(googleSignInStart());
    });
});