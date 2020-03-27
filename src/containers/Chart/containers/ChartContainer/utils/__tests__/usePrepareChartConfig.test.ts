//tslint:disable: no-any
import * as React from 'react';
import { usePrepareChartConfig } from '../usePrepareChartConfig';

jest.mock('../getChartLineGradient', () => ({
  getGradientEstimatedPrice: jest.fn(() => 'gradientEstimatedPrice'),
  getGradientOfferPrice: jest.fn(() => 'gradientOfferPrice'),
}));

const ctx: any = 'ctx';

const options: any = {
  estimatedPriceData: 'estimatedPriceData',
  offerPriceData: 'offerPriceData',
  labels: 'labels',
  minChartPrice: 123,
  maxChartPrice: 999,
};

describe('usePrepareChartConfig', () => {
  /**
   * Хук занимается подготовкой конфига для графика
   * включает в себя мердж данных с бэка в разные области базового конфига
   * */
  let res: any;

  beforeAll(() => {
    jest.spyOn(React, 'useMemo').mockImplementation(fn => fn());
    res = usePrepareChartConfig(ctx, options);
  });

  it('мерджит переданные лейблы в итоговый конфиг', () => {
    expect(res.data.labels).toBe(options.labels);
  });

  it('мерджит переданные данные в итоговый конфиг', () => {
    expect(res.data.datasets[0]).toEqual(
      expect.objectContaining({
        data: options.estimatedPriceData,
        label: 'Рыночная цена',
        backgroundColor: 'gradientEstimatedPrice',
      }),
    );

    expect(res.data.datasets[1]).toEqual(
      expect.objectContaining({
        data: options.offerPriceData,
        label: 'В объявлении',
        backgroundColor: 'gradientOfferPrice',
      }),
    );
  });

  it('мерджит переданные параметры min и max в итоговый конфиг', () => {
    expect(res.options.scales.y).toEqual(
      expect.objectContaining({
        min: 123,
        max: 999,
      }),
    );
  });

  it('если переданный ctx = null (хук вызван до того, как ref назначился на canvas), вернется null', () => {
    const res = usePrepareChartConfig(null, {} as any);

    expect(res).toBeNull();
  });
});
