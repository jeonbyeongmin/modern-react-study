import type { ICoin } from "./CoinsType";
import {
  Coin,
  CoinsList,
  Container,
  Header,
  Loader,
  Title,
  Img,
} from "./CoinsStyle";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../../api/coinApi";
import { Helmet } from "react-helmet";

export default function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("coins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>COIN</title>
      </Helmet>
      <Header>
        <Title>COIN</Title>
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
