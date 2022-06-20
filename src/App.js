import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import CoinDetails from './Components/CoinDetails';
import Header from './Components/Header';

function App() {
  return (
    <>
      <div className="row-12">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
