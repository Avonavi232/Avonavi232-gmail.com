export interface IChartData {
  labels: Array<string | number>;
  estimatedPriceData: Array<number | null>;
  offerPriceData: Array<number | null>;
  minChartPrice?: number;
  maxChartPrice?: number;
}

export interface IChartContainerProps {
  chartOptions: IChartData;
}

export interface IMarketPriceProps {
  price: string;
}

export interface IChartScale {
  ticks: Array<{ label: string | number; value: string | number }>;
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export interface ITick {
  label?: string | number;
}
