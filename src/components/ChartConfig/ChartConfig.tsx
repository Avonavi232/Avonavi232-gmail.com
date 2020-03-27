import * as React from 'react';
import { IChartData } from '../../containers/Chart/types';

interface IChartConfigProps {
  data: string;
  handleSet(IChartData): void
}

export const ChartConfig: React.FC<IChartConfigProps> = props => {
  const ref = React.useRef(null);

  return (
    <div style={{paddingLeft: '24px'}}>
      <h4>data</h4>
      <textarea ref={ref}>{props.data}</textarea>
      <p>
        <button onClick={() => props.handleSet(JSON.parse(ref.current.value))}>Применить!</button>
      </p>
    </div>
  );
};

ChartConfig.displayName = 'ChartConfig';
