import * as React from 'react';
import { formContext } from '../context';

export const useWatchIsFormValid = () => {
  const {errors, _setIsValid, isFormValid} = React.useContext(formContext);

  React.useEffect(() => {
    const newIsValid = Object.keys(errors).length === 0;

    if (isFormValid !== newIsValid) {
      _setIsValid(newIsValid);
    }
  }, [errors, _setIsValid, isFormValid])
};
