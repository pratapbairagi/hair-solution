import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice/productSlice';
// import productReducer from './reducers/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    // add other reducers here if any
  },
  // Add middleware or enhancers here if needed
});

export default store;