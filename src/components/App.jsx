import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Navigation } from './Navigation/Navigation';
import { fetchContactsAsync } from '../Redux/operations'; 
import { useAuth } from '../hooks/useAuth';
import { selectError } from '../Redux/SliceReducer';
import { refreshUser } from '../Redux/auth/operations';
import { AuthNav } from './AuthNav/AuthNav';
import { RestrictedRoute } from './RestictedRoute';
import LoginPage from '../pages/Login/Login';
import RegistrationPage from '../pages/Registration/Registration';
import Home from '../components/Home/Home';
import Contacts from 'pages/Contacts/Contacts';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  console.log(useSelector(state => state))
  const { isLoggedIn, isRefreshing, user } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContactsAsync('contacts')); 
  }, [dispatch]);
  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Phonebook</h1>

      {!isLoggedIn ? <AuthNav /> : <Navigation />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {error && <p>Error: {error}</p>}
      {isLoggedIn && <p>Welcome, {user.name}!</p>}
    </div>
  );
}

export default App;
