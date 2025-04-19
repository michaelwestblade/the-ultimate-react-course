import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product.tsx';
import HomePage from './pages/Home.tsx';
import PricingPage from './pages/Pricing.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AppLayout from './pages/AppLayout.tsx';
import Login from './pages/Login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
