import * as React from 'react';
import { mergeDeepRight } from 'ramda';
import * as ChartLib from 'chart.js';

import { getGradientEstimatedPrice, getGradientOfferPrice } from './getChartLineGradient';
import { BASE_CONFIG, mergeDataWithBaseDataset } from './chartConfiguration';
import { IChartData } from '../../../types';

export const usePrepareChartConfig = (ctx: CanvasRenderingContext2D | null, options: IChartData) => {
  return React.useMemo(() => {
    if (!ctx) {
      return null;
    }

    const gradientEstimatedPrice = getGradientEstimatedPrice(ctx);
    const gradientOfferPrice = getGradientOfferPrice(ctx);
    const gradients = { gradientEstimatedPrice, gradientOfferPrice };

    const estimatedPriceDataset = mergeDataWithBaseDataset(1, {
      data: options.valuationPrices,
      label: 'Рыночная цена',
      backgroundColor: gradients.gradientEstimatedPrice,
    });

    const offerPriceDataset = mergeDataWithBaseDataset(0, {
      data: options.historyPrices,
      label: 'В объявлении',
      backgroundColor: gradients.gradientOfferPrice,
    });
    const datasets = [estimatedPriceDataset, offerPriceDataset];

    return mergeDeepRight(BASE_CONFIG, {
      data: {
        labels: options.datesLabels,
        datasets,
      },
      options: {
        scales: {
          y: {
            min: options.minChartPrice,
            max: options.maxChartPrice,
          },
        },
      },
    }) as ChartLib.ChartConfiguration;
  }, [ctx, options]);
};
