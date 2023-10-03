
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './SliceReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
