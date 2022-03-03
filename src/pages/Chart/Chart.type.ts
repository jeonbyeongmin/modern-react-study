export interface ChartProps {
  id: string | undefined;
}

export interface IHistoricalData {
  time_open: Date;
  time_close: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
