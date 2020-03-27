import * as React from 'react';

import styled from 'styled-components';

interface IStyledInputProps extends React.ComponentProps<'input'>{
  isError?: boolean;
}


export const StyledInput: React.FC<IStyledInputProps> = styled.input`
  border-radius: 4px;
  border: 1px solid #bdc7d8;
  outline: none;
  padding: 8px 10px;
  font-size: 18px;
  transition: all .15s;
  color: #1c1e21;
  flex-shrink: 0;
  flex-grow: 1;
  
  &:focus {
   border-color: rgba(0,0,0, .35);
  }
  // @ts-ignore
  ${({isError}) => isError && `
      &:not([type="data"]), 
      &:not([type="radio"]),
      &:not([type="checkbox"]) {
        border-color: red;
      }
  `}
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

export const StyledLabelText = styled.span`
  margin-left: 8px;
  flex-shrink: 0;
`;
