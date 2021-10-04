import { useEffect } from 'react';
import type { NextPage } from 'next';
import { auth } from '../lib/firebase';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, logout, selectUser } from '../features/userSlice';
import LoginPage from './login';
import HomePage from './home';

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            name: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  return user.uid !== '' ? <HomePage /> : <LoginPage />;
};

export default IndexPage;
