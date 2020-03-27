import * as React from 'react';
import {Wrapper} from '../../components/Wrapper';
import {Header} from '../../components/Header';
import {Section} from '../../components/Section';
import {ChartDemoContainer} from '../Chart/containers/ChartDemoContainer/ChartDemoContainer';

export const App = () => {
    return (
        <div>
            <Wrapper>
              <Header/>

              <Section>
                <ChartDemoContainer/>
              </Section>
            </Wrapper>
        </div>
    );
};
