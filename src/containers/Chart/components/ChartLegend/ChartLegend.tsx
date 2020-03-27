import * as React from 'react';
import { chartLegend } from '../../contants';

import styles from './styles.module.css';

export const ChartLegend: React.FC = () => {
  return (
    <div className={styles['container']}>
      <h4 className={styles['title']}>Изменение цены</h4>
      <ul className={styles['legend']}>
        {chartLegend.map(item => (
          <li key={item.key} className={styles['legend-item']}>
            <span className={styles['legend-sign']} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ChartLegend.displayName = 'ChartLegend';
