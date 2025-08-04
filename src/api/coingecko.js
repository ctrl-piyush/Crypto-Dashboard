const BASE_URL = 'https://api.coingecko.com/api/v3';

export async function fetchMarkets(currency = 'usd') {
  try {
    const res = await fetch(`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch markets:', err);
    return [];
  }
}

export async function fetchCoinDetail(id) {
  try {
    const res = await fetch(`${BASE_URL}/coins/${id}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch coin detail:', err);
    return null;
  }
}