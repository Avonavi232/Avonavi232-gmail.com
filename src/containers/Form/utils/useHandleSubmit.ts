import React from 'react';

import { IFormContext } from '../types';
import { formContext } from '../context';
import { handleValidateForm } from './handleValidateForm';

export const useHandleSubmit = () => {
  const context = React.useContext(formContext);

  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidateForm(context);
  }
}
