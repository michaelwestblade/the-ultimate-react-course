import { CityInterface } from '../const.ts';

export interface CitiesReducerState {
  cities: CityInterface[];
  loading: boolean;
  currentCity: CityInterface | null;
  error: boolean;
}

export const initialState: CitiesReducerState = {
  cities: [],
  loading: false,
  currentCity: null,
  error: false,
};

export function citiesReducer(
  state: CitiesReducerState,
  action: { type: string; payload: any }
): CitiesReducerState {
  switch (action.type) {
    case 'cities/loading':
    case 'city/loading':
      return { ...state, loading: action.payload, error: false };
    case 'cities/loaded':
      return { ...state, cities: action.payload, loading: false, error: false };
    case 'city/loaded':
      return {
        ...state,
        currentCity: action.payload,
        loading: false,
        error: false,
      };
    case 'cities/created':
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        error: false,
        loading: false,
      };
    case 'cities/deleted':
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload.id),
        loading: false,
        error: false,
        currentCity: null,
      };
    case 'cities/error':
    case 'city/error':
      return { ...state, error: true, loading: false };
    default:
      throw new Error('Unknown action type');
      break;
  }
}
