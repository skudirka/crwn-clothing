import React from 'react';

import {GroupContainer, FormInputContainer, FormInputLabel} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer className="group">
        <FormInputContainer className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? (
                <FormInputLabel className={'form-input-label ' + (otherProps.value.length ? 'shrink' : '')}>
                    {label}
                </FormInputLabel>
            ) : null
        }
    </GroupContainer>
)

export default FormInput;