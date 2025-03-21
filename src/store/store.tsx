import { configureStore } from '@reduxjs/toolkit';
import { catsApi } from '../services/catsService';
import authReducer from './slices/authSlice';
import filterReduser from './slices/filtrSlice';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
const customMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  return result;
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReduser,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([catsApi.middleware, customMiddleware])
      .concat(catsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export { store };
