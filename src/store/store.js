import { configureStore } from '@reduxjs/toolkit';
import factsSlice from './facts.slice';

const store = configureStore({
   reducer: {
      facts: factsSlice,
   },
});

export default store;
