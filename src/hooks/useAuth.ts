import { useAppSelector } from '../store/store';

export const useAuth = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return { isAuthenticated };
};
