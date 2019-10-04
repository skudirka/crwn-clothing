import {shallow, mount, render} from 'enzyme';
import React from 'react';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('WithSpinner HOC', () => {
    const TestComponent = () => <div className='inner' />;
    const WrappedComponent = WithSpinner(TestComponent);

    it('should render WithSpinner component and inner child', () => {
        const wrapper = shallow(<WrappedComponent isLoading={false} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists(Spinner)).toBe(false);
        expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('if loading, should render spinner and not the passed inner child', () => {
        const wrapper = shallow(<WrappedComponent isLoading={true} />);
        
        expect(wrapper.exists(Spinner)).toBe(true);
        expect(wrapper.exists(TestComponent)).toBe(false);
    });
    
})