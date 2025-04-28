import { User } from '../const.ts';

export interface AuthReducerState {
  user?: User;
  isAuthenticated: boolean;
  error?: string;
  loading: boolean;
}

export const initialState: AuthReducerState = {
  user: undefined,
  isAuthenticated: false,
  error: '',
  loading: false,
};

export function authReducer(
  state: AuthReducerState,
  action: { type: string; payload: any }
): AuthReducerState {
  switch (action.type) {
    case 'login/loading':
      return { ...state, loading: true };
    case 'login/error':
      return { ...state, error: action.payload, loading: false };
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: undefined, isAuthenticated: false };
    default:
      throw new Error('Unknown action type');
      break;
  }
}
