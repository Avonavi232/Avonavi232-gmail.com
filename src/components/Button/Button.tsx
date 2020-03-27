import * as React from 'react';
import styled from 'styled-components';

type TButtonProps = React.ComponentProps<'button'>;

export const Button: React.FC<TButtonProps> = styled.button`
  border: 1px solid transparent;
  background-color: #0468FF;
  display: block;
  color: white;
  padding: 4px 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  cursor:pointer;
`;

Button.displayName = 'Button';
