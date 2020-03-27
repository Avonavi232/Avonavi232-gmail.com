import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Form, Field, WithFormContext } from '../Form';
import { LoginForm, Input } from '../../components/LoginForm';

import * as regexps from '../../constants/regexps';

export const LoginFormContainer: React.FC = () => {
  return (
    <Form onSubmit={(...args) => console.log(...args)}>
      <LoginForm
        loginField={(
          <Field
            name="login"
            validRules={[
              {error: 'Логин должен быть непустым', regexp: new RegExp('^(?!\\s*$).+')},
              {error: 'Некорректный логин', regexp: regexps.loginRegexp}
            ]}
            render={(context) => (
              <Input label="Логин" type="text" {...context}/>
            )}
          />
        )}
        passwordField={(
          <Field
            name="password"
            render={(context) => (
              <Input label="Пароль" type="password" {...context}/>
            )}
            validRules={[
              {error: 'Пароль должен быть непустым', regexp: new RegExp('^(?!\\s*$).+')},
              {error: 'Пароль должен содержать определенные символы', regexp: regexps.passwordRegexp},
            ]}
          />
        )}
      />
      <div style={{ marginTop: 16 }}>
        <WithFormContext>
          {
            ({isFormValid}) => (
              <Button variant={'contained'} color={'primary'} type="submit" disabled={!isFormValid}>Войти</Button>
            )
          }
        </WithFormContext>
      </div>
    </Form>
  );
};

LoginFormContainer.displayName = 'SignUpForm';
