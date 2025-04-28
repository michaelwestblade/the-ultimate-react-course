import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product.tsx';
import HomePage from './pages/Home.tsx';
import PricingPage from './pages/Pricing.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AppLayout from './pages/AppLayout.tsx';
import Login from './pages/Login.tsx';
import CityList from './components/CityList.tsx';
import CountryList from './components/CountriesList.tsx';
import City from './components/City.tsx';
import Form from './components/Form.tsx';
import { CitiesProvider } from './contexts/CitiesContext.tsx';
import { AuthProvider } from './contexts/fakeAuthContext.tsx';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
