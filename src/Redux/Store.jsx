import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './SliceReducer';
import { authReducer } from './auth/slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import { persistStore, persistReducer } from 'redux-persist'; 

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store); // Zaktualizuj eksport
