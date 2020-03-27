import { pipe } from 'ramda';

import { THandleInputChange, TFieldContext } from '../types';
import {handleValidateField} from './handleValidateField';

const handleSetValues = (fieldContext: TFieldContext) => {
  const { name, value, values, _setValues } = fieldContext;

  _setValues({ ...values, [name]: value });

  return fieldContext;
};

export const useHandleInputChange = (fieldContext: TFieldContext): THandleInputChange => e => {
  const newValue = e.currentTarget.value;

  pipe(handleValidateField, handleSetValues)({...fieldContext, value: newValue});
};
