import {shallow, mount} from 'enzyme';
import React from 'react';
import moxios from 'moxios'

import StripeCheckoutButton from './stripe-button.component';

describe('StripeCheckoutButton component', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
        moxios.install();
        
        mockProps = {
            price: 10.5
        };

        jest.spyOn(window, 'alert').mockImplementation(() => {});

        wrapper = shallow(<StripeCheckoutButton {...mockProps} />);
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('should render StripeCheckoutButton component', () => {
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
    

    it('should make API called to get token from Stripe', (done) => {
        const stripe = wrapper.find('.stripe').first();
        const onToken = stripe.props().token;

        const mockReturnData = jest.fn().mockResolvedValue({
            data: {}
        });

        onToken({ id: 'abc123' }, mockReturnData);

        moxios.wait(function() {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {}
            }).then(function () {
                expect(window.alert).toBeCalledWith('Payment Successful');
                done();
            });
        });
    });

    it('should show error if one comes back from API', (done) => {
        const stripe = wrapper.find('.stripe').first();
        const onToken = stripe.props().token;

        const mockReturnData = jest.fn().mockResolvedValue({
            data: {}
        });
        
        const mockError = {
            status: 400,
            response: {
                message: 'invalid data',
                headers: {}
            }
        };

        onToken({ id: 'abc123' }, mockReturnData);

        moxios.wait(function () {
            let request = moxios.requests.mostRecent();

            try{
                request.respondWith(JSON.stringify(mockError));
            } catch(error){
                
                request.reject(JSON.stringify(mockError));

                moxios.wait(function () {
                    expect(window.alert).toBeCalledWith('There was an issue with your payment. Please be sure you use the provided credit card.');
                    done();
                });
            }
        });

    });
})