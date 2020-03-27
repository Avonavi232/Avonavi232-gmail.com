import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import {IFieldChildrenProps} from '../../../containers/Form/types';

export const Input: React.FC<IFieldChildrenProps> = props => {
  const {value, name, handleInputChange, handleBlur, label, fieldErrors, type} = props;

  const error = React.useMemo(() => fieldErrors ? fieldErrors.values().next().value : null, [fieldErrors]);

  return (
    <TextField
      name={name}
      value={value}
      label={label}
      onChange={handleInputChange}
      onBlur={handleBlur}
      error={Boolean(error)}
      helperText={error}
      type={type}
    />
  );
};

Input.displayName = 'Input';
