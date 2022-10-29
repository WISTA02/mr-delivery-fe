import { configureStore } from '@reduxjs/toolkit';

import addToCartSlice from '../addToCart';

export const store = configureStore({
  reducer: {
    addToCartSlice: addToCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
