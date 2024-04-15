import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export function ProtectedRoute({ children, userRole }) {
  const { auth } = useContext(AuthContext);

  if (auth === null || auth.user.role !== userRole) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
