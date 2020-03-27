import { ChartConfiguration, ChartData, ChartTooltipItem, ChartDataSets } from 'chart.js';
import { path } from 'ramda';
import { IChartScale, ITick } from '../../../types';
import { months } from '../../../contants';

export const yAxisTicksCb = (value: number) => (value === 0 ? '' : `${value} ₽`);

export const tooltipTitleCb = (tooltipItems: ChartTooltipItem[]): string => {
  try {
    const date = tooltipItems[0].label;
    const dateObj = new Date(date);

    return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  } catch (e) {
    return '';
  }
};

export const tooltipLabelCb = (tooltipItem: ChartTooltipItem, data: ChartData): string => {
  try {
    let currentLabel = path(['datasets', tooltipItem.datasetIndex as number, 'label'], data) as string;

    return `${currentLabel}: ${tooltipItem.value} ₽`;
  } catch (e) {
    return '';
  }
};

export const afterTickToLabelConversion = (scale: IChartScale) => {
  try {
    scale.ticks = scale.ticks.reduce<IChartScale['ticks']>((acc, tick) => {
      const dateObj = new Date(tick.value);
      const date = dateObj.getDate();

      if (date === 1) {
        acc.push({ value: tick.value, label: months[dateObj.getMonth()] });
      } else {
        acc.push({ label: '', value: tick.value });
      }

      return acc;
    }, []);
  } catch (e) {
    //оставляем пустым, т.к коллбэк ничего не должен возвращать
  }
};

export const verticalGridLineColorCb = ({ tick }: { tick: ITick }) =>
  tick.label ? 'rgba(21, 34, 66, 0.1)' : 'transparent';

export const BASE_CONFIG: ChartConfiguration = {
  type: 'line',
  data: {
    datasets: [
      {
        // https://www.chartjs.org/docs/next/charts/line.html#dataset-properties
        borderColor: '#FF1F34',
        pointHoverBackgroundColor: '#FF1F34',
        pointHoverBorderColor: '#FF1F34',
        pointHoverRadius: 4,
        pointRadius: 0,
        pointHitRadius: 4,
        order: 1,
        stepped: 'before',
      },
      {
        borderColor: '#0468FF',
        pointHoverBackgroundColor: '#0468FF',
        pointHoverBorderColor: '#0468FF',
        pointHoverRadius: 4,
        pointRadius: 0,
        pointHitRadius: 4,
        order: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      x: {
        //https://www.chartjs.org/docs/next/axes/styling.html#grid-line-configuration
        ticks: {
          //see https://www.chartjs.org/docs/next/axes/radial/linear.html#tick-options
          fontColor: 'rgba(21, 34, 66, 0.4)',
          padding: 6,
          // callback: xAxisTicksCb,
          maxRotation: 0,
          stepSize: 1,
          maxTicksLimit: 120,
          lineHeight: 1.5,
        },
        gridLines: {
          //https://www.chartjs.org/docs/next/axes/styling.html#grid-line-configuration
          zeroLineColor: 'rgba(21, 34, 66, 0.1)',
          color: verticalGridLineColorCb,
          borderDash: [3, 3],
          zeroLineBorderDash: [3, 3],
          tickMarkLength: 5,
        },
        afterTickToLabelConversion,
      },
      y: {
        position: 'right',
        offset: false,
        ticks: {
          //see https://www.chartjs.org/docs/next/axes/radial/linear.html#tick-options
          fontColor: 'rgba(21, 34, 66, 0.4)',
          padding: 12,
          callback: yAxisTicksCb,
          maxTicksLimit: 3,
        },

        gridLines: {
          // https://www.chartjs.org/docs/next/axes/styling.html#grid-line-configuration
          drawBorder: false,
          color: 'rgba(21, 34, 66, 0.06)',
          zeroLineColor: 'transparent',
          tickMarkLength: 0,
        },
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
      },
      point: {
        borderWidth: 2,
      },
    },
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: true,
      backgroundColor: '#152242',
      cornerRadius: 4,
      caretSize: 0,
      caretPadding: 12,
      mode: 'index',
      intersect: false,
      callbacks: {
        title: tooltipTitleCb,
        label: tooltipLabelCb,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  },
};

/**
 * Хелпер собирает объект из datasets, объединяя базовый конфиг и пользовательские настройки
 */
export const mergeDataWithBaseDataset = (indexInBaseDataset: number, options: ChartDataSets) => {
  const baseCfg = path(['data', 'datasets', indexInBaseDataset], BASE_CONFIG) as object;

  return {
    ...baseCfg,
    ...options,
  };
};
