import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../api/coinApi";
import { ChartProps, IHistoricalData } from "./Chart.type";
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
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close),
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
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
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
