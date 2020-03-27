import * as React from 'react';
import {ChartContainer} from '../ChartContainer';
import {chartOptions} from './initialData';
import {ChartConfig} from '../../../../components/ChartConfig';

import styles from './styles.module.css';

export const ChartDemoContainer: React.FC = props => {
  const [data, setData] = React.useState(chartOptions);

  return (
    <div className={styles['container']} >
      <div className={styles['chart']} >
        <ChartContainer chartOptions={data} />
      </div>
      <div className={styles['config']}>
        <ChartConfig data={JSON.stringify(data)} handleSet={setData}/>
      </div>
    </div>
  );
};

ChartDemoContainer.displayName = 'ChartDemoContainer';
