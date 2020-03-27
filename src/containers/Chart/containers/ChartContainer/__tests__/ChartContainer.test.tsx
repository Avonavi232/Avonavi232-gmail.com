//tslint:disable: no-any
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { usePrepareChartConfig } from '../utils/usePrepareChartConfig';
import { IChartProps } from '../../../components/Chart';
// @ts-ignore
import ChartLib from 'chart.js';
import { ChartContainer } from '../ChartContainer';

jest.mock('../utils/usePrepareChartConfig');

jest.mock('chart.js', () => {
  const ChartLib = jest.fn();
  // @ts-ignore
  ChartLib.defaults = {};

  return { default: ChartLib };
});

jest.mock('../../../components/Chart', () => {
  const Chart: React.FC<IChartProps> = ({ chartCanvasRef }) => {
    // @ts-ignore
    chartCanvasRef.current = { getContext: jest.fn(() => 'ctx') };

    return null;
  };

  return { Chart };
});

describe('ChartContainer', () => {
  let container: any = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('вызывает библиотеку chart.js с нужными параметрами', () => {
    /**
     * задача контейнера - вызвать библиотеку chart.js
     * ctx берется из ref, который передается в визуальный комп. Chart
     * Его мы мокаем, ref устанавливаем в 'ctx'
     * Конфиг берется из хука. Мокаем - возвращает 'config'
     * */
    (usePrepareChartConfig as jest.Mock).mockReturnValue('config');

    const defaultProps = {
      labels: ['a', 'b', 'c'],
      offerPriceData: [1, 2, 3],
      estimatedPriceData: [1, 2, 3],
    };

    act(() => {
      render(<ChartContainer chartOptions={defaultProps} />, container);
    });

    //Ожидаем, что библиотека будет вызвана с верными параметрами
    expect(ChartLib).toHaveBeenCalledWith('ctx', 'config');
  });
});
