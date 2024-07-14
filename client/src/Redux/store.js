import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice/productSlice';
import gallerySlice from './gallerySlice/gallerySlice';
import userSlice from './userSlice/userSlice';
import clientSlice from './clientSlice/clientSlice';
import reviewSlice from './reviewSlice/reviewSlice';
// import productReducer from './reducers/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    gallery : gallerySlice,
    user : userSlice,
    client : clientSlice,
    review : reviewSlice
    // add other reducers here if any
  },
  // Add middleware or enhancers here if needed
});

export default store;