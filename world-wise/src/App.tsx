import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product.tsx';
import HomePage from './pages/Home.tsx';
import PricingPage from './pages/Pricing.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AppLayout from './pages/AppLayout.tsx';
import Login from './pages/Login.tsx';
import CityList from './components/CityList.tsx';
import { useEffect, useState } from 'react';
import CountryList from './components/CountriesList.tsx';

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:9000/cities');
        const data = await res.json();
        setLoading(false);
        setCities(data);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>listofcities</p>} />
          <Route
            path="cities"
            element={
              <CityList cities={cities} loading={loading} error={error} />
            }
          />
          <Route
            path="countries"
            element={
              <CountryList cities={cities} loading={loading} error={error} />
            }
          />
          <Route path="form" element={<p>FORM</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
