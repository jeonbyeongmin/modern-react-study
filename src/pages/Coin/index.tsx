import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import {
  Container,
  Description,
  Header,
  Loader,
  Overview,
  OverviewItem,
  Tab,
  Tabs,
  Title,
} from "./Coin.style";
import { InfoData, TickersData, RouteState } from "./Coin.type";
import Price from "../Price";
import Chart from "../Chart";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../../api/coinApi";
import { Helmet } from "react-helmet";

function Coin() {
  const { id } = useParams();
  const { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/:id/price");
  const chartMatch = useMatch("/:id/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", id],
    () => fetchCoinInfo(id),
    {
      refetchInterval: 5000,
    }
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<TickersData>(["tickers", id], () => fetchCoinTickers(id));

  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ?? (loading ? "Loading..." : infoData?.name)}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ?? (loading ? "Loading..." : infoData?.name)}
        </Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>$ {tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="price" element={<Price id={id} />} />
            <Route path="chart" element={<Chart id={id} />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
