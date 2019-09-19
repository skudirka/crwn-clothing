import React from 'react';

import {SignInAndSignUpPageContainer} from './sign-in-and-sign-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageContainer className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
)

export default SignInAndSignUpPage;