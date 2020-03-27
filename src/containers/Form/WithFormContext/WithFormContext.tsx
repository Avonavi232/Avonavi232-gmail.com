import * as React from 'react';
import { IWithFormContextProps } from '../types';
import { formContext } from '../context';

export const WithFormContext: React.FC<IWithFormContextProps> = ({children}) => {
  const context = React.useContext(formContext);

  return children(context);
};

WithFormContext.displayName = 'WithFormContext';
