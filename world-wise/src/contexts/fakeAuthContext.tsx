import { createContext, useContext, useReducer } from 'react';
import { authReducer, initialState } from '../reducers/authReducer.ts';
import { User } from '../const.ts';

export interface AuthContextType {
  isAuthenticated: boolean;
  user?: User;
  loading: boolean;
  error: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: false,
  error: '',
  login: () => {},
  logout: () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { isAuthenticated, user, loading, error = '' } = state;

  function login(email: string, password: string) {
    dispatch({ type: 'login/loading', payload: true });
    try {
      console.log(email, password);
      dispatch({ type: 'login', payload: { email, name: 'John' } });
    } catch (error) {
      dispatch({ type: 'login/error', payload: error });
    }
  }

  function logout() {
    dispatch({ type: 'login/loading', payload: true });
    try {
      dispatch({ type: 'logout', payload: {} });
    } catch (error) {
      dispatch({ type: 'login/error', payload: error });
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  return context;
}
