import {shallow} from 'enzyme';
import React from 'react';

import FormInput from './form-input.component';

describe('FormInput component', () => {
    let wrapper;
    
    const handleChange = jest.fn();

    const mockProps = {
        handleChange,
        label: 'Mock Input',
        value: 'Mock value'
    }

    beforeEach(() => {
        wrapper = shallow(<FormInput {...mockProps} />);
    });

    it('should render FormInput component.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange callback prop on input change', () => {
        const mockEvent = { 
            target: { value: "foo" }
        };
        wrapper.find('.form-input').simulate("change", mockEvent);
        expect(handleChange).toHaveBeenCalledWith(mockEvent);
    });

    it('label should have shrink class if not an empty value is provided.', () => {
        expect(wrapper.find('FormInputLabel').hasClass('shrink')).toBeTruthy();
    });

    it('label should not have shrink class if an empty value is provided.', () => {
        mockProps.value = '';
        wrapper = shallow(<FormInput {...mockProps} />);
        expect(wrapper.find('FormInputLabel').hasClass('shrink')).toBeFalsy();
    });

});