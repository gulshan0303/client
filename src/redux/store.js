import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    auth: registrationReducer,
  },
});

export default store;