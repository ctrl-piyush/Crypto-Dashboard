import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinDetail from './pages/CoinDetail';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;