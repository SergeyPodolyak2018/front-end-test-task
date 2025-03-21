import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { PropsProtectedRoute } from '../definitions/definitions';

const ProtectedRoute = ({ children, inversion }: PropsProtectedRoute) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated && !inversion) {
    return <Navigate to="/sign-in" />;
  }
  if (isAuthenticated && inversion) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
