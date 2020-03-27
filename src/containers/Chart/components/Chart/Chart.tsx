import * as React from 'react';

import { ChartLegend } from '../ChartLegend';

import * as styles from './styles.module.css';

export interface IChartProps {
  chartCanvasRef: React.RefObject<HTMLCanvasElement>;
}

export const Chart: React.FC<IChartProps> = ({ chartCanvasRef }) => {
  return (
    <>
      <div className={styles['legend']}>
        <ChartLegend />
      </div>
      <div className={styles['chart']} style={{ height: 186 }}>
        <canvas ref={chartCanvasRef} />
      </div>
    </>
  );
};

Chart.displayName = 'Chart';
