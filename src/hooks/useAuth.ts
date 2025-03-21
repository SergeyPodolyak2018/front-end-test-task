import { useAppSelector } from '../store/store';

export const useAuth = () => {
  const isAuthenticated: boolean = useAppSelector(
    (state: any) => state.auth.isAuthenticated
  );

  return { isAuthenticated };
};
