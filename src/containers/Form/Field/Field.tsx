import React from "react";
import {omit} from 'ramda';

import { formContext } from '../context';
import { IFieldProps, TFieldContext } from '../types';
import { handleValidateField } from '../utils/handleValidateField';
import { useHandleInputChange } from '../utils/useHandleInputChange';

export const Field: React.FC<IFieldProps> = props => {
  const { children, name, render, validRegexp, validRules, ...rest } = props;
  const context = React.useContext(formContext);
  const { values, errors, fieldRefs } = context;


  const value = values[name] || '';
  const fieldErrors = errors[name];
  const fieldContext: TFieldContext = {...context, name, value, validRegexp, fieldErrors, validRules};

  React.useEffect(() => {
    if (fieldRefs && fieldRefs.current) {
      fieldRefs.current[name] = {name, validRules};
    }
  }, [fieldRefs, name, value, fieldErrors, validRules]);

  const handleInputChange = useHandleInputChange(fieldContext);
  const handleBlur = () => handleValidateField(fieldContext);

  const extendedFieldContext = {...fieldContext, handleInputChange, handleBlur};

  if (typeof render === 'function') {
    return render(extendedFieldContext);
  }

  return React.cloneElement(
    // @ts-ignore
    children,
    {
      // @ts-ignore
      onChange: handleInputChange,
      onBlur: handleBlur,
      name,
      value,
      ...rest
    }
  )
};
