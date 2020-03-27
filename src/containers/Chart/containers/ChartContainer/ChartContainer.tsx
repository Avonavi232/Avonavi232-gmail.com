import * as React from 'react';
import ChartLib from 'chart.js';

import { Chart } from '../../components/Chart';
import { usePrepareChartConfig } from './utils/usePrepareChartConfig';
import {IChartContainerProps} from '../../types';

export const ChartContainer: React.FC<IChartContainerProps> = props => {
  const chartCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [chartCtx, setChartCtx] = React.useState<CanvasRenderingContext2D | null>(null);
  const chartRef = React.useRef(null);

  const chartConfig = usePrepareChartConfig(chartCtx, props.chartOptions);

  //Глобальные настройки для chart.js
  React.useEffect(() => {
    ChartLib.defaults.fontFamily = 'Roboto, Arial, sans-serif';
    ChartLib.defaults.fontSize = 12;
  }, []);

  //Сохраняем canvas context в стейт
  React.useEffect(() => {
    /*istanbul ignore else*/
    if (chartCanvasRef.current) {
      const ctx = chartCanvasRef.current.getContext('2d');
      setChartCtx(ctx);
    }
  }, []);

  React.useEffect(() => {
    if (chartCtx && chartConfig) {
      //Возвращаемое значение в настоящий момент не требуется
      // tslint:disable-next-line:no-unused-expression
      chartRef.current = new ChartLib(chartCtx, chartConfig);
    }
  }, [chartCtx, chartConfig]);

  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update(chartConfig);
    }
  }, [props.chartOptions, chartConfig]);

  return (
    <Chart chartCanvasRef={chartCanvasRef} />
  );
};

ChartContainer.displayName = 'Chart';
