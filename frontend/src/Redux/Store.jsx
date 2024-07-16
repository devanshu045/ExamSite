import { configureStore } from '@reduxjs/toolkit';
import UniqueIdReducer from './Slice/UniqueId';

const store = configureStore({
  reducer: {
    Uniqid: UniqueIdReducer,
  },
});

export default store;
