import { Provider } from 'react-redux';
import { store } from '../store/store';
import { PropsChildren } from '../definitions/definitions';

const StoreProvider = ({ children }: PropsChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
