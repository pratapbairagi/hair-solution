import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const rootUrl = "https://hair-solution.vercel.app/api/app";
// const rootUrl = "http://localhost:8000/api/app";

const reviewSlice = createSlice({
    name: "Review",
    initialState: {
        loading: false,
        success: false,
        message: "",
        error: false,
        review: null,
        reviews: [],
        totalReviewsNumber : 0
    },
    reducers: {
        addUpdateReviewRequest: (state) => {
            state.loading = true;
        },
        addUpdateReviewSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.review = action.payload.review;
        },
        addUpdateReviewFailed: (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload?.message
        },
        getReviewsRequest : (state) => {
            state.loading = true;
        },
        getReviewsSuccess : (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.reviews = action.payload.reviews;
            state.totalReviewsNumber = action.payload.totalReviewsNumber;
        },
        getReviewsFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload?.message
        },
        clearSuccess: (state) => {
            state.success = false;
            state.message = "";
        },
        clearError: (state) => {
            state.error = false;
            state.message = "";
        }
    }
});

const {
    addUpdateReviewRequest,
    addUpdateReviewSuccess,
    addUpdateReviewFailed,

    getReviewsRequest,
    getReviewsSuccess,
    getReviewsFailed,

    clearSuccess,
    clearError,
} = reviewSlice.actions;

const config = {
    headers : {
        "Content-Type" : "application/json"
    }
}

export const addUpdatereview = (data) => async (dispatch) => {
    try {
        dispatch(addUpdateReviewRequest());

        const url = `${rootUrl}/addUpdate/review`;

        const response = await axios.post(url, data, config);

        dispatch(addUpdateReviewSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(addUpdateReviewFailed(error.response?.data?.message))
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const getReviews = (data) => async (dispatch) => {
    try {

        const {searchString="", page=1} = data

        dispatch(getReviewsRequest());

        const url = `${rootUrl}/reviews?search=${searchString}&page=${page}`;

        const response = await axios.get(url, config);

        dispatch(getReviewsSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(getReviewsFailed(error.response?.data?.message))
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export default reviewSlice.reducer