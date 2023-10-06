import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'; 
import App from './components/App'; 
import './index.css';
import {persistor,store} from './Redux/Store'; 
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

