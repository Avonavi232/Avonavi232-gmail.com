import * as React from 'react';

export type TValue = string;
export type TError = string;
export type TErrorsSet = Set<TError>;
export type TValidRules = Array<{error: string, regexp: RegExp}>;
export type TValues = {[key: string]: TValue};
export type TErrors = {[key: string]: TErrorsSet | null};
export interface TFieldRef {
  name: string;
  validRules?: TValidRules;
}

export type THandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type THandleInputChange = React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
export type THandleBlur = React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;

export interface IFormProps {
  onSubmit: THandleSubmit
}

export type TFieldRefs = {[key: string]: TFieldRef};

export interface IFormContext {
  values: TValues;
  errors: TErrors;
  setValue(name: string, value: TValue): void;
  setError(name: string, value: TErrorsSet): void;
  _setValues(values: TValues): void;
  _setErrors(errors: TErrors): void;
  handleSubmit: THandleSubmit;
  fieldRefs: React.RefObject<TFieldRefs>,
  isFormValid: boolean;
  _setIsValid(boolean): void;
}

export interface TFieldContext extends IFormContext {
  name: string;
  value: TValue;
  fieldErrors: TErrorsSet | null;
  validRegexp?: RegExp;
  validRules?: TValidRules;
}

export interface TExtendedFieldContext extends TFieldContext {
  handleInputChange: THandleInputChange;
  handleBlur: THandleBlur;
}

export interface IFieldProps extends React.ComponentProps<'input'> {
  children?: React.ReactElement;
  name: string;
  render?: (params: TExtendedFieldContext) => React.ReactElement;
  validRegexp?: RegExp;
  validRules?: TValidRules;
}

export type IFieldChildrenProps = React.ComponentProps<'input'> & TExtendedFieldContext & {
  label?: string;
}

export interface IGetFieldErrorsParams {
  value: TValue;
  validRules?: TValidRules;
}

export interface IWithFormContextProps {
  children: (params: IFormContext) => React.ReactElement;
}
