import React, {useState} from 'react';
import {connect} from 'react-redux';

import {SignUpContainer, SignUpTitleContainer} from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';

export const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert('You must confirm your password!');
            return;
        }

        signUpStart({email, displayName, password});
    };

    const handleChange = e => {
        const {name, value} = e.target;

        setCredentials({
            ...userCredentials,
            [name]: value
        });
    };
        
    return (
        <SignUpContainer className="sign-up">
            <SignUpTitleContainer>I do not have an account</SignUpTitleContainer>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);