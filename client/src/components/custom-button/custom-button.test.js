import {shallow} from 'enzyme';
import React from 'react';

import CustomButton from './custom-button.component';

describe('CustomButton component', () => {
    it('should render CustomButton component', () => {
        expect(shallow(<CustomButton />)).toMatchSnapshot();
    });
});