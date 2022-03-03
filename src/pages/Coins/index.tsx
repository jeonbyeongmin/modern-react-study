import type { ICoin } from "./Coins.type";
import {
  Coin,
  CoinsList,
  Container,
  Header,
  Loader,
  Title,
  Img,
} from "./Coins.style";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../../api/coinApi";
import { Helmet } from "react-helmet";

export default function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("coins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>
          <Title>Coins</Title>
        </title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="coin-image"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
