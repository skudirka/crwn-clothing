import {shallow, mount} from 'enzyme';
import React from 'react';

import HomePage from './homepage.component';

describe('HomePage page', () => {

    it('should render HomePage page', () => {
        expect(shallow(<HomePage />)).toMatchSnapshot();
    });
})