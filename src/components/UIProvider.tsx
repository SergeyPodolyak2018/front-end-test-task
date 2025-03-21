import { useEffect } from 'react';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useLocation } from 'react-router';
import { PropsChildren } from '../definitions/definitions';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const UIProvider = ({ children }: PropsChildren) => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return children;
};

export default UIProvider;
