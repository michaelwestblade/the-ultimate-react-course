import { createContext, useContext, useEffect, useState } from 'react';
import { CityInterface } from '../const.ts';

export interface CitiesContextInterface {
  cities: CityInterface[];
  loading: boolean;
  error: boolean;
}

export const CitiesContext = createContext<CitiesContextInterface>({
  cities: [],
  loading: false,
  error: false,
});

export function CitiesProvider({ children }: { children: React.ReactNode }) {
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
    <CitiesContext.Provider value={{ cities, loading, error }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error('useCities must be used within a CitiesProvider');
  }

  return context;
}
