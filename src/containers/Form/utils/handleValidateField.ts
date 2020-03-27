import {omit} from 'ramda';

import { TFieldContext } from '../types';
import {getFieldErrors} from './getFieldErrors';

export const handleValidateField = (fieldContext: TFieldContext) => {
  const { name, value, errors, _setErrors, validRules } = fieldContext;

  if (validRules) {
    const fieldErrors = getFieldErrors({value, validRules});
    const newErrors = omit([name], errors);

    if (fieldErrors) {
      newErrors[name] = fieldErrors;
    }

    _setErrors(newErrors);
  }

  return fieldContext;
};
