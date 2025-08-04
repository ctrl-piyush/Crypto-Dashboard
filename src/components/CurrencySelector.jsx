function CurrencySelector({ currency, setCurrency }) {
  const options = ['usd', 'inr', 'eur'];
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt.toUpperCase()}</option>
      ))}
    </select>
  );
}

export default CurrencySelector;