import {shallow, mount} from 'enzyme';
import React from 'react';

import {SignUp} from './sign-up.components';

import {signUpStart} from '../../redux/user/user.actions';

describe('SignUp component', () => {
    let wrapper;
    let mockDispatch;
    let mockProps;

    beforeEach(() => {
        mockDispatch = jest.fn();

        mockProps = {
            signUpStart: userCredentials => mockDispatch(signUpStart(userCredentials))
        };

        wrapper = mount(<SignUp {...mockProps} />);
    });

    it('should render SignUp component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    const submitForm = (mockDisplayName, mockEmail, mockPassword, mockConfirmPassword) => {
        const mockDisplayNameEvent = { 
            target: { 
                name: 'displayName',
                value: mockDisplayName
            }
        };
        const mockEmailEvent = { 
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
        const mockConfirmPasswordEvent = { 
            target: {
                name: 'confirmPassword',
                value: mockConfirmPassword
            }
        };

        const form = wrapper.find('form');
        form.find('[name="displayName"] FormInputContainer').simulate("change", mockDisplayNameEvent);
        form.find('[name="email"] FormInputContainer').simulate("change", mockEmailEvent);
        form.find('[name="password"] FormInputContainer').simulate("change", mockPasswordEvent);
        form.find('[name="confirmPassword"] FormInputContainer').simulate("change", mockConfirmPasswordEvent);
        form.simulate('submit');
    };

    it('validate that passwords match and signUpStart called', () => {
        const mockDisplayName = 'bigJoe';
        const mockEmail = 'joe@email.com';
        const mockPassword = '123abc';

        // submit with mockPassword===mockConfirmPassword
        submitForm(mockDisplayName, mockEmail, mockPassword, mockPassword);
        
        expect(mockDispatch).toHaveBeenCalledWith(signUpStart({
            displayName: mockDisplayName,
            email: mockEmail,
            password: mockPassword
        }));
    });

    

    it('confirm alert will show if password not confirmed and signUpStart will not be called', () => {
        const mockDisplayName = 'bigJoe';
        const mockEmail = 'joe@email.com';
        const mockPassword = '123abc';
        const mockConfirmPassword = 'abcefg';

        jest.spyOn(window, 'alert').mockImplementation(() => {});

        // submit with mockPassword!==mockConfirmPassword
        submitForm(mockDisplayName, mockEmail, mockPassword, mockConfirmPassword);
        
        expect(window.alert).toBeCalledWith('You must confirm your password!');
        expect(mockDispatch).not.toHaveBeenCalled();
    });
})