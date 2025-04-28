import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/fakeAuthContext.tsx';
import { useEffect } from 'react';

export interface ProtectedRouteProps {
  children: React.ReactNode;
}
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return children;
}
