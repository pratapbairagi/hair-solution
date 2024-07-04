import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const rootUrl = 'https://hair-solution.vercel.app';
// const rootUrl = 'http://localhost:8000';


export const gallerySlice = createSlice({
name : "gallery",
initialState : {
    success : false,
    loading : false,
    error : null,
    gallery : null,
    galleries : [],
    message : ""
},
reducers : {
    galleryCreateOrUpdateRequest : (state) => {
        state.loading = true;
    },
    galleryCreateOrUpdateSuccess : (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.gallery = action.payload.gallery;
        state.galleries = action.payload.galleries;
    },
    galleryCreateOrUpdateError : (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload?.message;
    },
    galleryDetailsRequest : (state) => {
        state.loading = true;
    },
    galleryDetailsSuccess : (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.gallery = action.payload.gallery;
    },
    galleryDetailsError : (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload?.message;
    },

    galleriesDetailsRequest : (state) => {
        state.loading = true;
    },
    galleriesDetailsSuccess : (state, action) => {
        state.loading = false;
        state.success = true;
        state.galleries = action.payload.galleries;
    },
    galleriesDetailsError : (state, action) => {
        state.loading = false;
        state.message = action.payload?.message;
        state.error = true;
    },
    galleryDeleteRequest : (state) => {
        state.loading = true
    },
    galleryDeleteSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.galleries = action.payload.galleries
    },
    gallerDeleteError : (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload?.message
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
});


const {
    galleryDetailsRequest, 
    galleryDetailsSuccess, 
    galleryDetailsError,
    galleriesDetailsRequest,
    galleriesDetailsSuccess,
    galleriesDetailsError,
    galleryCreateOrUpdateRequest,
    galleryCreateOrUpdateSuccess,
    galleryCreateOrUpdateError,
    galleryDeleteRequest,
    galleryDeleteSuccess,
    gallerDeleteError,
    clearSuccess,
    clearError
} = gallerySlice.actions;

export const fetchGalleryDetails = () => async (dispatch) => {
    try {
        const abortController = new AbortController()
        dispatch(galleryDetailsRequest());

        const url = `${rootUrl}/api/app/galleryDetails`;

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            signal : abortController.signal
        };

        const response = await axios.get(url, config);

        dispatch(galleryDetailsSuccess(response?.data));

        abortController.abort()

        // Clear success message after 5 seconds
    setTimeout(() => {
        dispatch(clearSuccess());
      }, 5000);

    } catch (error) {
        dispatch(galleryDetailsError(error.response?.data));

        setTimeout(() => {
            dispatch(clearError());
          }, 5000);
    }
};

export const galleriesDetails = () => async (dispatch) => {
    try {
        dispatch(galleriesDetailsRequest());

        const url = `${rootUrl}/api/app/galleriesDetails`;

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        };

        const response = await axios.get(url, config);

        dispatch(galleriesDetailsSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
          }, 5000);

    } catch (error) {
        dispatch(galleriesDetailsError(error.response?.data));

        setTimeout(() => {
            dispatch(clearError());
          }, 5000);
    }
}

export const galleryCreateOrUpdate = ({data={}, id="", type="", state={}}) => async (dispatch) => {
    try {
        dispatch(galleryCreateOrUpdateRequest());

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        };
        let url;
        if(type === "add"){
            url = `${rootUrl}/api/app/galleryCreate`;
        }
        if(type === "update"){
            url = `${rootUrl}/api/app/galleryUpdate/${id}`;
        }
        
        const response = await axios[type === "update" ? "put" : "post"](url, data, config)

        dispatch(galleryCreateOrUpdateSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
          }, 5000);

    } catch (error) {
        console.log("error create gallery ", error)

        dispatch(galleryCreateOrUpdateError(error.response?.data));

        setTimeout(() => {
            dispatch(clearError());
          }, 5000);
    }
};

export const galleryDelete = ({id=""}) => async (dispatch) => {
    try {
        dispatch(galleryDeleteRequest());

        const url = `${rootUrl}/api/app/galleryDelete/${id}`;
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const response = await axios.delete(url, config);

        dispatch(galleryDeleteSuccess(response.data));

        setTimeout(() => {
            dispatch(clearSuccess());
          }, 5000);

    } catch (error) {
        dispatch(gallerDeleteError(error.response.data));

        setTimeout(() => {
            dispatch(clearError());
          }, 5000);
    }
}
export default gallerySlice.reducer;
