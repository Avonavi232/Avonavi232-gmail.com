import React from 'react';

import { formContext } from '../context';
import { useHandleSubmit } from '../utils/useHandleSubmit';
import { IFormContext, IFormProps, TValues, TErrors, TFieldRefs } from '../types';
import { useWatchIsFormValid } from '../utils/useWatchIsFormValid';

export const Form: React.FC<IFormProps> = props => {
  const [ values, _setValues ] = React.useState<TValues>({});
  const [ errors, _setErrors ] = React.useState<TErrors>({});
  const fieldRefs = React.useRef<TFieldRefs>({});
  const [isValid, _setIsValid] = React.useState(true);

  const setValue = React.useCallback<IFormContext['setValue']>(
    (name, value) => _setValues({ ...values, [name]: value }),
    [ values ]
  );

  const setError = React.useCallback<IFormContext['setError']>(
    (name, fieldErrors) => _setErrors({ ...errors, [name]: fieldErrors }),
    [ errors ]
  );

  const contextValue: IFormContext = {
    values,
    errors,
    _setErrors,
    _setValues,
    setValue,
    setError,
    handleSubmit: props.onSubmit,
    fieldRefs,
    isFormValid: isValid,
    _setIsValid
  };

  return (
    <formContext.Provider value={contextValue}>
      <_Form {...props} />
    </formContext.Provider>
  );
};

export const _Form: React.FC = props => {
  const handleSubmit = useHandleSubmit();

  useWatchIsFormValid();

  return (
    <form action="#" onSubmit={handleSubmit}>
      {props.children}
    </form>
  )
}
