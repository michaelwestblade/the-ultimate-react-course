import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product.tsx';
import HomePage from './pages/Home.tsx';
import PricingPage from './pages/Pricing.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<ProductPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
