import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice/productSlice';
import gallerySlice from './gallerySlice/gallerySlice';
import userSlice from './userSlice/userSlice';
// import productReducer from './reducers/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    gallery : gallerySlice,
    user : userSlice
    // add other reducers here if any
  },
  // Add middleware or enhancers here if needed
});

export default store;