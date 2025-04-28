import { createContext, useContext, useEffect, useState } from 'react';
import { CityInterface } from '../const.ts';

export interface CitiesContextInterface {
  cities: CityInterface[];
  loading: boolean;
  error: boolean;
  currentCity: CityInterface | null;
  getCity: (id: string) => void;
  createCity: (city: CityInterface) => void;
}

export const CitiesContext = createContext<CitiesContextInterface>({
  cities: [],
  loading: false,
  error: false,
  currentCity: null,
  getCity: () => {},
  createCity: () => {},
});

export function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [cities, setCities] = useState<CityInterface[]>([]);
  const [currentCity, setCurrentCity] = useState<CityInterface | null>(null);
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

  async function getCity(id: string) {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await res.json();
      setLoading(false);
      setCurrentCity(data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  }

  async function createCity(city: CityInterface) {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:9000/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });
      const data: CityInterface = await res.json();
      setCities((cities: CityInterface[]) => [...cities, data]);
      setCurrentCity(data);
      console.log(data);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, loading, error, currentCity, getCity, createCity }}
    >
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
