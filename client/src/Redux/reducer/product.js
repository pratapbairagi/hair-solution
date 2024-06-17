import { CLEAR_ERROR, CLEAR_SUCCESS, PRODUCTS_DETAILS_FAILED, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCT_CREATE_OR_UPDATE_FAILED, PRODUCT_CREATE_OR_UPDATE_SUCCESS } from "../type/product";


const product = (initialState = {
    success: false,
    message: "",
    loading: false,
    products: [],
    product: null,
    error: null
}, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:
            return {
                ...initialState,
                loading : true
            }
        case PRODUCT_CREATE_OR_UPDATE_FAILED :
            return {
                ...initialState,
                loading : true
            }
        case PRODUCTS_DETAILS_SUCCESS :
            return {
                ...initialState,
                loading : false,
                success : true,
                message : action.payload.message,
                products : action.payload.products
            }
        case PRODUCT_CREATE_OR_UPDATE_SUCCESS :
            return {
                ...initialState,
                success : true,
                loading : false,
                message : action.payload.message,
                product : action.payload.product,
                products : action.payload.products
            }
        case PRODUCT_CREATE_OR_UPDATE_FAILED :
            return {
                ...initialState,
                loading : false,
                message : action.payload,
                error : true
            }
        case PRODUCTS_DETAILS_FAILED :
            return {
                ...initialState,
                loading : false,
                message : action.payload,
                error : true
            }
        case CLEAR_SUCCESS :
            return {
                ...initialState,
                message : "",
                error : false
            }
        case CLEAR_ERROR :
            return {
                ...initialState,
                success : false,
                message : ""
            }
        default: return initialState
    }
};

export default product