import { useAppDispatch, useAppSelector } from '../store/store';
import {
  loginEnd,
  loginFailure,
  loginStart,
  loginSuccess,
} from '../store/slices/authSlice';
import { toast } from 'react-toastify';

import { chechUserData } from '../utils/utils';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);
  const status = useAppSelector((state) => state.auth.status);

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    dispatch(loginStart());

    await new Promise((r) => setTimeout(r, 1000));

    if (email && password) {
      if (chechUserData(email, password)) {
        dispatch(
          loginSuccess({
            email: email,
            name: email.split('@')[0],
            id: Math.random(),
            role: 'user',
          })
        );
        toast('Login success!', { type: 'success' });
      } else {
        dispatch(loginEnd());
        toast('User not found', { type: 'error' });
      }
    } else {
      dispatch(loginFailure('Please fill all fields'));
    }
  }

  return { login, error, status };
};
