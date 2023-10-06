import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { UserProfile } from './Form/UserProfile';
import { useAuth } from '../hooks/useAuth';
import { selectError } from '../Redux/SliceReducer';
import { refreshUser } from '../Redux/auth/operations';
import { UserMenu } from './Usermenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { RestrictedRoute } from './RestictedRoute';
import LoginPage from '../pages/Login/Login'; 
import RegistrationPage from '../pages/Registration/Registration';
const HomePage = React.lazy(() => import('../components/Home/Home'));

const TasksPage = React.lazy(() => import('../pages/Tasks.jsx/Task'));

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { isLoggedIn, isRefreshing, user } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      {!isLoggedIn && <Navigation />}
      <AuthNav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              {isLoggedIn ? (
                <>
                  <UserProfile />
                  <h2>Contacts</h2>
                  <ContactForm />
                  <Filter />
                  <ContactList />
                  <p>Welcome, {user.name}!</p>
                  <UserMenu /> 
                </>
              ) : (
                <>
            
                </>
              )}
            </React.Suspense>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RestrictedRoute redirectTo='/tasks' component={<RegistrationPage/>}/>} />
        <Route path="/login" element={<RestrictedRoute redirectTo='/tasks' component={<LoginPage/>}/>} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {error && <p>Error: {error}</p>}
      
      
    </div>
  );
}

export default App;
