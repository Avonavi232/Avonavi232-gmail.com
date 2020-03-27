import { IFormContext, TFieldContext } from '../types';
import {getFieldErrors} from './getFieldErrors';

export const handleValidateForm = (formContext: IFormContext) => {
  const { values, _setErrors, fieldRefs } = formContext;

  if (!fieldRefs.current) {
    return;
  }

  const errors = Object.values(fieldRefs.current).reduce((_errors, ref) => {
    const fieldContext = {
      value: values[ref.name],
      validRules: ref.validRules
    };

    const errors = getFieldErrors(fieldContext);

    if (errors) {
      _errors[ref.name] = errors;
    }

    return _errors;
  }, {});

  if (Object.keys(errors)) {
    _setErrors(errors);
  }
};
