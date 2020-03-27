import * as React from 'react';

import {StyledInputWrapper} from './styled';

interface ISignUpFormProps {
  loginField: React.ReactElement,
  passwordField: React.ReactElement,
}

export const LoginForm: React.FC<ISignUpFormProps> = props => {
  return (
    <div>
      <StyledInputWrapper>
        {props.loginField}
      </StyledInputWrapper>

      <StyledInputWrapper>
        {props.passwordField}
      </StyledInputWrapper>
    </div>
  );
};

LoginForm.displayName = 'LoginForm';
