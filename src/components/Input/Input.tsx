import * as React from 'react';

import {StyledInput, StyledLabel, StyledLabelText} from './styled';

interface IInputProps extends React.ComponentProps<'input'>{
  label?: string;
  isError?: boolean;
}

export const _Input: React.FC<IInputProps> = ({label, ...rest}) => {
  return (
    <StyledLabel>
      <StyledInput {...rest}/>
      {
        label &&
        <StyledLabelText>{label}</StyledLabelText>
      }
    </StyledLabel>
  )
};

export const Input = React.memo(_Input);
