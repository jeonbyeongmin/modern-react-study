import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../api/coinApi";
import { ChartProps, IHistoricalData } from "./ChartType";
import ApexChart from "react-apexcharts";

function Chart({ id }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", id],
    () => fetchCoinHistory(id),
    { refetchInterval: 10000 }
  );

  return (
    <div>
      {isLoading ? (
        "Loading.."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "price",
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  y: [price.open, price.high, price.low, price.close],
                };
              }),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
            },
            grid: {
              show: true,
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
