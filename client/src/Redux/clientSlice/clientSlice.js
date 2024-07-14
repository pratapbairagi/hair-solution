import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const rootUrl = "https://hair-solution.vercel.app/api/app"
// const rootUrl = "http://localhost:8000/api/app";

export const clientSlice = createSlice({
    name : "clients",
    initialState : {
        loading : false,
        success : false,
        error : false,
        message : "",
        client : null,
        clients : [],
        products : [],
        totalClientsNumber : 0
    },
    reducers : {
        addClientRequest : (state) => {
            state.loading = true;
        },
        addClientSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
            state.clients = action.payload.clients;
        },
        addClientFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        getClientRequest : (state) => {
            state.loading = true;
        },
        getClientSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        getClientFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        getClientsRequest : (state) => {
            state.loading = true;
        },
        getClientsSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.clients = action.payload.clients;
            state.totalClientsNumber = action.payload.totalClientsNumber;
        },
        getClientsFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        takenServiceRequest : (state) => {
            state.loading = true;
        },
        takenServiceSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        takenServiceFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        serviceUpdateRequest : (state) => {
            state.loading = true;
        },
        serviceUpdateSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        serviceUpdateFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        deleteTakenServiceRequest : (state) => {
            state.loading = true;
        },
        deleteTakenServiceSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        deleteTakenServiceFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        
        clientUpdateRequest : (state) => {
            state.loading = true;
        },
        clientUpdateSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        clientUpdateFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        cleintDeleteRequest : (state) => {
            state.loading = true;
        },
        clientDeleteSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.clients = action.payload.clients;
        },
        clientDeleteFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        purchaseUpdateRequest : (state) => {
            state.loading = true;
        },
        purchaseUpdateSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        purchaseUpdateFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        deletePurchaseRequest : (state) => {
            state.loading = true;
        },
        deletePurchaseSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        deletePurchaseFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        purchaseAddRequest : (state) => {
            state.loading = true;
        },
        purchaseAddSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        purchaseAddFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        productsRequest : (state) => {
            state.loading = true;
        },
        productsSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.products = action.payload.products;
        },
        productsFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        clientReviewMailRequest : (state) => {
            state.loading = true;
        },
        clientReviewMailSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.client = action.payload.client;
        },
        clientReviewMailFailed : (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.error = true;
        },
        clearClientSuccess : (state) => {
            state.client = null
        },
        clearSuccess : (state) => {
            state.success = false;
            state.message = "";

        },
        clearError : (state) => {
            state.error = false;
            state.message = "";

        }
    }
})

export const {
    addClientRequest,
    addClientSuccess,
    addClientFailed,
    getClientRequest,
    getClientSuccess,
    getClientFailed,
    getClientsRequest,
    getClientsSuccess,
    getClientsFailed,

    
    clientUpdateRequest,
    clientUpdateSuccess,
    clientUpdateFailed,
    
    cleintDeleteRequest,
    clientDeleteSuccess,
    clientDeleteFailed,
    
    purchaseAddRequest,
    purchaseAddSuccess,
    purchaseAddFailed,

    purchaseUpdateRequest,
    purchaseUpdateSuccess,
    purchaseUpdateFailed,

    deletePurchaseRequest,
    deletePurchaseSuccess,
    deletePurchaseFailed,
    
    takenServiceRequest,
    takenServiceSuccess,
    takenServiceFailed,

    serviceUpdateRequest,
    serviceUpdateSuccess,
    serviceUpdateFailed,

    deleteTakenServiceRequest,
    deleteTakenServiceSuccess,
    deleteTakenServiceFailed,

    productsRequest,
    productsSuccess,
    productsFailed,

    clientReviewMailRequest,
    clientReviewMailSuccess,
    clientReviewMailFailed,

    clearClientSuccess,

    clearSuccess,
    clearError
} = clientSlice.actions;

const config = {
    headers : {
        "Content-Type" : "application/json"
    }
};

export const addClient = ({data, id, type}) => async (dispatch) => {
    try {
        dispatch(addClientRequest());

        const url = `${rootUrl}/add/client`

        const response = await axios.post(url, data, config);

        dispatch(addClientSuccess(response?.data));

    } catch (error) {
        dispatch(addClientFailed(error.response?.data))
    }
}

export const getClient = ({id}) => async (dispatch) => {
    try {
        dispatch(getClientRequest());

        const url = `${rootUrl}/client/${id}`

        const response = await axios.get(url, config);
            dispatch(getClientSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(getClientFailed(clearError(error.response?.data)))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const clearClient = () => async (dispatch) => {
    dispatch(clearClientSuccess())
}

export const getClients = ({searchString, page}) => async (dispatch) => {
    try {
        dispatch(getClientsRequest());

       const url = `${rootUrl}/clients?search=${searchString}&page=${page}`
       
        const response = await axios.get(url, config);

        dispatch(getClientsSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(getClientsFailed(error.response?.data?.message))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const addTakenService = ({id, data}) => async (dispatch) => {
    try {
        dispatch(takenServiceRequest());

        const url = `${rootUrl}/add/takenService/${id}`

        const response = await axios.put(url, data, config);

        dispatch(takenServiceSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {

        dispatch(takenServiceFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const updateTakenService = ({id , data}) => async (dispatch) => {
    try {
        dispatch(serviceUpdateRequest())

        const url = `${rootUrl}/update/takenService/${id}`

        const response = await axios.put(url, data, config);

        dispatch(serviceUpdateSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(serviceUpdateFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const deleteTakenService = ({id, _id }) => async (dispatch) => {
    try {
        dispatch(deleteTakenServiceRequest())

        const url = `${rootUrl}/delete/takenService/${id}`

        const response = await axios.put(url, {_id}, config);

        dispatch(deleteTakenServiceSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(deleteTakenServiceFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const clientUpdate = ({id, data}) => async (dispatch) => {
    try {
        dispatch(clientUpdateRequest());

        const url = `${rootUrl}/update/client/${id}`

        const response = await axios.put(url, data, config);

        dispatch(clientUpdateSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {

        dispatch(clientUpdateFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const purchaseUpdate = ({id , data}) => async (dispatch) => {
    try {
        dispatch(purchaseUpdateRequest())

        const url = `${rootUrl}/update/purchase/${id}`

        const response = await axios.put(url, data, config);

        dispatch(purchaseUpdateSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(purchaseUpdateFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
        
    }
}

export const purchaseDelete = ({id , _id}) => async (dispatch) => {
    try {
        dispatch(deletePurchaseRequest())

        const url = `${rootUrl}/delete/purchase/${id}`

        const response = await axios.put(url, {_id}, config);

        dispatch(deletePurchaseSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(deletePurchaseFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
        
    }
}

export const puchaseAdd = ({data, id}) => async (dispatch) => {
    try {
        dispatch(purchaseAddRequest());

        const url = `${rootUrl}/add/purchase/${id}`

        const response = await axios.put(url, data, config);

        dispatch(purchaseAddSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);
        
    } catch (error) {
        dispatch(purchaseAddFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const getProducts = ({type_}) => async (dispatch) => {
    try {
        dispatch(productsRequest())

        const url = `${rootUrl}/products?type=${type_}`

        const response = await axios.get(url, type_, config);

        dispatch(productsSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(productsFailed(error.response?.data))
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const clientDelete = ({id}) => async (dispatch) => {
    try {
        dispatch(cleintDeleteRequest());

        const url = `${rootUrl}/delete/client/${id}`

        const response = await axios.delete(url, config);

        dispatch(clientDeleteSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {

        dispatch(clientDeleteFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const reviewMail = ({entityId, clientId, type}) => async (dispatch) => {
    try {
        dispatch(clientReviewMailRequest());

        
        const url = `${rootUrl}/client/review/mail/${clientId}`

        const response = await axios.post(url, {entityId, type}, config);

        dispatch(clientReviewMailSuccess(response?.data))

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(clientReviewMailFailed(error.response?.data))

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}
export default clientSlice.reducer;