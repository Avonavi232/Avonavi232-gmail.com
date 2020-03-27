import { IGetFieldErrorsParams } from '../types';

export const getFieldErrors = (params: IGetFieldErrorsParams) => {
  const { value, validRules } = params;

  if (!validRules) {
    return null;
  }

  const fieldErrors = validRules.reduce((errorsSet, rule) => {
    const isValueMatchRule = rule.regexp.test(value || '');

    if (!isValueMatchRule) {
      errorsSet.add(rule.error);
    }

    return errorsSet;
  }, new Set<string>());

  return fieldErrors.size ? fieldErrors : null;
}
