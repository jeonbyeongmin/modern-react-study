const BASE_URL = `https://api.coinpaprika.com/v1`;
const WEEK_TIME = 60 * 60 * 24 * 7;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(id: string | undefined) {
  return fetch(`${BASE_URL}/coins/${id}`).then((res) => res.json());
}

export function fetchCoinTickers(id: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${id}`).then((res) => res.json());
}

export function fetchCoinHistory(id: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 2 * WEEK_TIME;
  return fetch(
    `${BASE_URL}/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
