import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCoinDetail } from '../api/coingecko';

function CoinDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetchCoinDetail(id).then(setCoin);
  }, [id]);

  if (!coin) return <div className="mt-24 p-6">Loading...</div>;

  return (
    <div className="mt-24 p-6">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Back</button>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <img src={coin.image.large} alt={coin.name} className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold">{coin.name}</h2>
        <p>Rank: {coin.market_cap_rank}</p>
        <p>Price: {coin.market_data.current_price.usd}</p>
        <p>24h Change: {coin.market_data.price_change_percentage_24h}%</p>
        <p>Volume: {coin.market_data.total_volume.usd.toLocaleString()}</p>
        <p>Market Cap: {coin.market_data.market_cap.usd.toLocaleString()}</p>
        <p>Supply: {coin.market_data.circulating_supply.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CoinDetail;