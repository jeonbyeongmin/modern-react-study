import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:id/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
