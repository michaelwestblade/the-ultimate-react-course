import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { CityInterface } from '../const.ts';
import { citiesReducer, initialState } from '../reducers/citiesReducer.ts';

export interface CitiesContextInterface {
  cities: CityInterface[];
  loading: boolean;
  error: boolean;
  currentCity: CityInterface | null;
  getCity: (id: string) => void;
  createCity: (city: CityInterface) => void;
  deleteCity: (city: CityInterface) => void;
}

export const CitiesContext = createContext<CitiesContextInterface>({
  cities: [],
  loading: false,
  error: false,
  currentCity: null,
  getCity: () => {},
  createCity: () => {},
  deleteCity: () => {},
});

export function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(citiesReducer, initialState);
  const { cities, loading, currentCity, error } = state;

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: 'cities/loading', payload: true });
        const res = await fetch('http://localhost:9000/cities');
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (error) {
        dispatch({ type: 'cities/error', payload: error });
        console.error(error);
      }
    }

    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id: string) {
      if (Number(id) === currentCity?.id) return;

      try {
        dispatch({ type: 'city/loading', payload: true });
        const res = await fetch(`http://localhost:9000/cities/${id}`);
        const data = await res.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch (error) {
        dispatch({ type: 'city/error', payload: error });
        console.error(error);
      }
    },
    [currentCity?.id]
  );

  async function createCity(city: CityInterface) {
    try {
      dispatch({ type: 'cities/loading', payload: true });
      const res = await fetch('http://localhost:9000/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });
      const data: CityInterface = await res.json();
      dispatch({ type: 'cities/created', payload: data });
      console.log(data);
    } catch (error: any) {
      dispatch({ type: 'cities/error', payload: error });
    }
  }

  async function deleteCity(city: CityInterface) {
    try {
      dispatch({ type: 'cities/loading', payload: true });
      const res = await fetch(`http://localhost:9000/cities/${city.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });
      const data: CityInterface = await res.json();
      dispatch({ type: 'cities/deleted', payload: city });
      console.log(data);
    } catch (error: any) {
      dispatch({ type: 'cities/error', payload: error });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
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
