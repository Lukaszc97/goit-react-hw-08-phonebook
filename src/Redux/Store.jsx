
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './SliceReducer';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  auth: authReducer
});

export default store;
