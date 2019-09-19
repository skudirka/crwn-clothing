import React, {useState} from 'react';
import {connect} from 'react-redux';

import {SignInContainer, SignInTitleContainer, SignInButtonsContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        
        console.log('email: ', email, 'password: ', password);
        emailSignInStart(email, password);
    };

    const handleChange = e => {
        const { value, name } = e.target;

        setCredentials({
            ...userCredentials,
            [name]: value
        });
    };
        
    return (
        <SignInContainer className="sign-in">
            <SignInTitleContainer>I already have an account</SignInTitleContainer>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="email" type="email" value={email} handleChange={handleChange} required />
                <FormInput name="password" label="password" type="password" value={password} handleChange={handleChange} required />

                <SignInButtonsContainer className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);