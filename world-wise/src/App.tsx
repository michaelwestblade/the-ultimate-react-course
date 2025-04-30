import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CityList from './components/CityList.tsx';
import CountryList from './components/CountriesList.tsx';
import City from './components/City.tsx';
import Form from './components/Form.tsx';
import { CitiesProvider } from './contexts/CitiesContext.tsx';
import { AuthProvider } from './contexts/fakeAuthContext.tsx';
import { ProtectedRoute } from './pages/ProtectedRoute.tsx';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home.tsx'));
const ProductPage = lazy(() => import('./pages/Product.tsx'));
const PricingPage = lazy(() => import('./pages/Pricing.tsx'));
const AppLayout = lazy(() => import('./pages/AppLayout.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
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
