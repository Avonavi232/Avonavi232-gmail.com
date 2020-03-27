import * as React from 'react';
import { shallow } from 'enzyme';

import { Chart } from '../Chart';

describe('Chart', () => {
  it('должен рендериться без ошибок', () => {
    const wrapper = shallow(<Chart chartCanvasRef={{ current: null }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
