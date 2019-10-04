import {shallow} from 'enzyme';
import React from 'react';

import SignInAndSignUpPage from './sign-in-and-sign-up.component';

describe('SignInAndSignUpPage page', () => {
    it('SignInAndSignUpPage component should render', () => {
        expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
    })
});