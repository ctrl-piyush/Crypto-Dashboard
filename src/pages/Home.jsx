import { useEffect, useState } from 'react';
import { fetchMarkets } from '../api/coingecko';
import SearchBar from '../components/SearchBar';
import CurrencySelector from '../components/CurrencySelector';
import SparklineChart from '../components/SparklineChart';
import { Link } from 'react-router-dom';

function Home() {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    fetchMarkets(currency).then(setCoins);
  }, [currency]);

  const filtered = coins.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-24 p-6">
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((coin) => (
          <Link to={`/coin/${coin.id}`} key={coin.id} className="border p-4 rounded hover:shadow bg-white dark:bg-gray-800">
            <img src={coin.image} alt={coin.name} className="w-12 h-12 mb-2" />
            <h2 className="font-bold text-lg">{coin.name} ({coin.symbol.toUpperCase()})</h2>
            <p>Price: {coin.current_price}</p>
            <p>Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
            {coin.sparkline_in_7d && <SparklineChart sparkline={coin.sparkline_in_7d.price} />}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;