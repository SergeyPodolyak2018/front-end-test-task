import { BrowserRouter, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import HomePage from './app/home';
import StoreProvider from './components/StoreProvider';
import UIProvider from './components/UIProvider';
import SignInPage from './app/signIn';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                </PageWrapper>
              }
            />
            <Route
              path="/sign-in"
              element={
                <PageWrapper>
                  <ProtectedRoute inversion={true}>
                    <SignInPage />
                  </ProtectedRoute>
                </PageWrapper>
              }
            />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
      <ToastContainer theme="colored" />
    </>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <UIProvider>{children}</UIProvider>;
};

export default App;
