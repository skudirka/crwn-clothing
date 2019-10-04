import {shallow} from 'enzyme';
import React from 'react';

import Spinner from './spinner.component';

describe('Spinner component', () => {
    it('should render Spinner component', () => {
        expect(shallow(<Spinner />)).toMatchSnapshot();
    });
});