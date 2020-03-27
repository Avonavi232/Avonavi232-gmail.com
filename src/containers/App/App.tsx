import * as React from 'react';
import {Wrapper} from '../../components/Wrapper';
import {Header} from '../../components/Header';
import {Section} from '../../components/Section';
import {SignUpFormContainer} from '../SignUpForm';
import {LoginFormContainer} from '../LoginForm';

export const App = () => {
    return (
        <div>
            <Wrapper>
              <Header/>

              <Section>
                <SignUpFormContainer/>
              </Section>

              <Section>
                <LoginFormContainer/>
              </Section>
            </Wrapper>
        </div>
    );
};
