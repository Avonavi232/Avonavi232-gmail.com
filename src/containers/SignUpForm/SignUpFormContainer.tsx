import * as React from 'react';

import { Form, Field } from '../Form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SignUpForm } from '../../components/SignUpForm';
import { SexField } from '../../components/SignUpForm/SexField';
import * as regexps from '../../constants/regexps';

export const SignUpFormContainer: React.FC = () => {
  return (
    <Form onSubmit={() => null}>
      <SignUpForm
        firstnameField={(
          <Field name="firstname" placeholder="Имя" validRegexp={regexps.firstnameRegexp}>
            <Input label="Имя" type="text"/>
          </Field>
        )}

        lastnameField={(
          <Field name="lastname" placeholder="Фамилия" validRegexp={regexps.lastnameRegexp}>
            <Input label="Фамилия"/>
          </Field>
        )}

        emailField={(
          <Field name="email" placeholder="E-mail" validRegexp={regexps.emailRegexp}>
            <Input label="E-mail"/>
          </Field>
        )}

        passwordField={(
          <Field name="password" type="password" placeholder="Пароль" validRegexp={regexps.passwordRegexp}>
            <Input label="Пароль"/>
          </Field>
        )}

        birthdayField={(
          <Field name="birthday" type="date" validRegexp={regexps.dateRegexp}>
            <Input label="Дата рождения"/>
          </Field>
        )}

        sexField={<Field name="sex" render={options => <SexField {...options}/>}/>}
      />

      <div style={{ marginTop: 16 }}>
        <Button type="submit">Регистрация</Button>
      </div>
    </Form>
  );
};

SignUpFormContainer.displayName = 'SignUpForm';
