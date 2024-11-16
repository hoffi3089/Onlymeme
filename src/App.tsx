import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./layout";
import SwapPage from "./pages/swap";
import LiquidityPage from "./pages/liquidity";
import FarmPage from "./pages/farm";
import LiquidityDetailPage from "./pages/liquidity-detail";
import VotePage from "./pages/vote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LiquidityPage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/liquidity" element={<LiquidityPage />} />
            <Route path="/liquidity/:id" element={<LiquidityDetailPage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/farm" element={<FarmPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
