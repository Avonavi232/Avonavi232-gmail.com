import * as React from 'react';

import { IFormContext } from '../types';

const defaultFormContext: IFormContext = {
  values: {},
  errors: {},
  setValue: () => null,
  setError: () => null,
  _setValues: () => null,
  _setErrors: () => null,
};

export const formContext = React.createContext<IFormContext>(defaultFormContext);
