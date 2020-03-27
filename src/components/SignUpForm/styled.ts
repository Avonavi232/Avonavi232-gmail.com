import * as React from 'react';
import styled from 'styled-components';

export const StyledSexRadioWrapper: React.FC = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const StyledSexRadioInputWrapper: React.FC = styled.div`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const StyledInputWrapper: React.FC = styled.div`
  width: 250px;
  
  & input {
    width: 100%;
  }

  &:not(:first-child) {
    margin-top: 12px;
  }
`;
