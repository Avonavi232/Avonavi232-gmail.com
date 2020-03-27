import * as React from 'react';

import {StyledInputWrapper, StyledSexRadioWrapper} from './styled';

interface ISignUpFormProps {
  firstnameField: React.ReactElement,
  lastnameField: React.ReactElement,
  emailField: React.ReactElement,
  passwordField: React.ReactElement,
  birthdayField: React.ReactElement,
  sexField: React.ReactElement,
}

export const SignUpForm: React.FC<ISignUpFormProps> = props => {
  return (
    <div>
      <StyledInputWrapper>
        {props.firstnameField}
      </StyledInputWrapper>

      <StyledInputWrapper>
        {props.lastnameField}
      </StyledInputWrapper>

      <StyledInputWrapper>
        {props.emailField}
      </StyledInputWrapper>

      <StyledInputWrapper>
        {props.passwordField}
      </StyledInputWrapper>

      <StyledInputWrapper>
        {props.birthdayField}
      </StyledInputWrapper>

      <StyledSexRadioWrapper>
        {props.sexField}
      </StyledSexRadioWrapper>
    </div>
  );
};

SignUpForm.displayName = 'SignUpForm';
