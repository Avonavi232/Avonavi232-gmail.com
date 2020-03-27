import * as React from 'react';
import { shallow } from 'enzyme';

import { ChartLegend } from '../ChartLegend';

describe('ChartLegend', () => {
  it('должен рендериться без ошибок', () => {
    const wrapper = shallow(<ChartLegend />);
    expect(wrapper).toMatchSnapshot();
  });
});
