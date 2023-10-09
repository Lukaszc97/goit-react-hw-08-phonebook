import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Navigation } from './Navigation/Navigation';
import { fetchContactsAsync } from '../Redux/PhonebookReducer/operations';
import { useAuth } from '../hooks/useAuth';
import { selectError } from '../Redux/PhonebookReducer/SliceReducer';
import { refreshUser } from '../Redux/auth/operations'; 
import { AuthNav } from './AuthNav/AuthNav';
import { RestrictedRoute } from './RestictedRoute';
import { PrivateRoute } from './PrivateRoute';
import LoginPage from '../pages/Login/Login';
import RegistrationPage from '../pages/Registration/Registration';
import Home from '../components/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import { UserProfile } from './Form/UserProfile/UserProfile';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const { isLoggedIn, isRefreshing } = useAuth();

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

      {!isLoggedIn ? (
        <AuthNav />
      ) : (
        <div>
          <Navigation />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/login"
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
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/userProfile"
            element={
              <PrivateRoute redirectTo="/login" component={<UserProfile />} />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
