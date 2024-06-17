import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAILED,
  PRODUCT_CREATE_OR_UPDATE_REQUEST,
  PRODUCT_CREATE_OR_UPDATE_SUCCESS,
  PRODUCT_CREATE_OR_UPDATE_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED
} from '../type/product';

const rootUrl = 'https://hair-solution.vercel.app';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    success: false,
    message: '',
    loading: false,
    products: [],
    product: null,
    error: null
  },
  reducers: {
    productsDetailsRequest: (state) => {
      state.loading = true;
    },
    productsDetailsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
      state.products = action.payload.products;
    },
    productsDetailsFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = true;
    },
    productCreateOrUpdateRequest: (state) => {
      state.loading = true;
    },
    productCreateOrUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
      state.product = action.payload.product;
      state.products = action.payload.products;
    },
    productCreateOrUpdateFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = true;
    },
    productDetailsRequest: (state) => {
      state.loading = true;
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
      state.product = action.payload.product;
    },
    productDetailsFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = true;
    },
    clearSuccess: (state) => {
      state.message = '';
      state.error = false;
    },
    clearError: (state) => {
      state.success = false;
      state.message = '';
    },
  },
});

export const {
  productsDetailsRequest,
  productsDetailsSuccess,
  productsDetailsFailed,
  productCreateOrUpdateRequest,
  productCreateOrUpdateSuccess,
  productCreateOrUpdateFailed,
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFailed,
  clearSuccess,
  clearError,
} = productSlice.actions;

// Thunk for fetching product details
export const fetchProductDetails = () => async (dispatch) => {
  try {
    dispatch(productsDetailsRequest());

    const url = `${rootUrl}/api/app/productDetails`;
    const response = await axios.get(url);

    dispatch(productsDetailsSuccess(response.data));
  } catch (error) {
    dispatch(productsDetailsFailed(error.response.data.message));
  }
};

// Thunk for fetching products details
export const fetchProductsDetails = () => async (dispatch) => {
  try {
    dispatch(productsDetailsRequest());

    const config = {
        headers : {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : rootUrl
        }
    }

    const url = `${rootUrl}/api/app/productsDetails`;
    const response = await axios.get(url, config);

    dispatch(productsDetailsSuccess(response.data));

    // Clear success message after 5 seconds
    setTimeout(() => {
      dispatch(clearSuccess());
    }, 5000);
  } catch (error) {
    dispatch(productsDetailsFailed(error.response.data.message));

    // Clear error message after 5 seconds
    setTimeout(() => {
      dispatch(clearError());
    }, 5000);
  }
};

// Thunk for creating or updating a product
export const createOrUpdateProduct = ({ data, type, id }) => async (dispatch) => {
  try {
    dispatch(productCreateOrUpdateRequest());

    const config = {
        headers : {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : rootUrl
        }
    }

    const url =
      type === 'update'
        ? `${rootUrl}/api/app/productUpdate/${id}`
        : `${rootUrl}/api/app/productCreate`;

    const method = type === 'update' ? 'put' : 'post';
    const response = await axios[method](url, data, config);

    dispatch(productCreateOrUpdateSuccess(response.data));

    // Clear success message after 5 seconds
    setTimeout(() => {
      dispatch(clearSuccess());
    }, 5000);
  } catch (error) {
    dispatch(productCreateOrUpdateFailed(error.response.data.message));

    // Clear error message after 5 seconds
    setTimeout(() => {
      dispatch(clearError());
    }, 5000);
  }
};

export default productSlice.reducer;
