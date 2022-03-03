import { Overview, OverviewItem } from "./Price.style";
import { PriceProps } from "./Price.type";

function Price({ tickersData }: PriceProps) {
  console.log(tickersData);
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>Market cap:</span>
          <span>{tickersData?.quotes.USD.market_cap}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Market cap change 24h:</span>
          <span>{tickersData?.quotes.USD.market_cap_change_24h} %</span>
        </OverviewItem>
      </Overview>

      <Overview>
        <OverviewItem>
          <span>change 15m:</span>
          <span>{tickersData?.quotes.USD.percent_change_15m} %</span>
        </OverviewItem>
        <OverviewItem>
          <span>change 30m:</span>
          <span>{tickersData?.quotes.USD.percent_change_30m} %</span>
        </OverviewItem>
        <OverviewItem>
          <span>change 1h:</span>
          <span>{tickersData?.quotes.USD.percent_change_1h} %</span>
        </OverviewItem>
      </Overview>

      <Overview>
        <OverviewItem>
          <span>volume 24h:</span>
          <span>{tickersData?.quotes.USD.volume_24h.toFixed(3)}</span>
        </OverviewItem>
        <OverviewItem>
          <span>volume 24h:</span>
          <span>{tickersData?.quotes.USD.volume_24h_change_24h} %</span>
        </OverviewItem>
      </Overview>
    </>
  );
}

export default Price;
