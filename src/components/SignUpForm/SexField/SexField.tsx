import * as React from 'react';

import { Input } from '../../Input';
import { IFormContext } from '../../../containers/Form/types';
import { StyledSexRadioInputWrapper } from '../styled';

type TSexFieldProps = IFormContext;

export const _SexField: React.FC<TSexFieldProps> = ({ values, setValue }) => {
  return (
    <React.Fragment>
      <StyledSexRadioInputWrapper>
        <Input
          type="radio"
          onChange={() => setValue('sex', 'male')}
          checked={values['sex'] === 'male'}
          label="Мужчина"
        />
      </StyledSexRadioInputWrapper>

      <StyledSexRadioInputWrapper>
        <Input
          type="radio"
          onChange={() => setValue('sex', 'female')}
          checked={values['sex'] === 'female'}
          label="Женщина"
        />
      </StyledSexRadioInputWrapper>


      <StyledSexRadioInputWrapper>
        <Input
          type="radio"
          onChange={() => setValue('sex', 'other')}
          checked={values['sex'] === 'other'}
          label="Другое"
        />
      </StyledSexRadioInputWrapper>
    </React.Fragment>
  )
};

_SexField.displayName = 'SexField';

export const SexField = React.memo(_SexField);
