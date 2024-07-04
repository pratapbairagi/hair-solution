import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// axios.defaults.withCredentials = true


// const rootUrl = "http://localhost:8000"
const rootUrl = "https://hair-solution.vercel.app"

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        success: false,
        error: false,
        auth: false,
        message: "",
        user: null,
        users: []

    },
    reducers: {
        userLoginRequest: (state) => {
            state.loading = true;
        },
        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.user = action.payload.user;
            state.auth = true
        },
        userLoginError: (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload
        },
        userRegisterRequest: (state) => {
            state.loading = true;
        },
        userRegisterSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message
        },
        userRegisterError: (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload
        },
        userLoggedSuccess: (state, action) => {
            state.success = true;
            state.message = "";
            state.auth = true;
            state.user = action.payload.user;
        },
        userLogoutSuccess: (state) => {
            state.success = true;
            state.user = null;
            state.message = "";
            state.auth = false;
        },
        clearSuccess: (state) => {
            state.success = false;
            state.message = ""
        },
        clearError: (state) => {
            state.error = false;
            state.message = "";
        }
    }
});

const {
    userLoginRequest,
    userLoginSuccess,
    userLoginError,
    userRegisterRequest,
    userRegisterSuccess,
    userRegisterError,
    userLoggedSuccess,
    userLogoutSuccess,
    clearSuccess,
    clearError
} = userSlice.actions

export const userLogin = ({ data }) => async (dispatch) => {

    try {
        dispatch(userLoginRequest());

        const url = `${rootUrl}/api/app/login`;

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await axios.post(url, data, config);

        dispatch(userLoginSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(userLoginError(error?.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const userRegister = ({ data = "" }) => async (dispatch) => {
    try {
        dispatch(userRegisterRequest());

        const url = `${rootUrl}/api/app/register`;

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await axios.post(url, data, config);

        dispatch(userRegisterSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        console.log("error ", error)
        dispatch(userRegisterError(error?.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const userLogged = () => async (dispatch) => {

    const abortController = new AbortController();

    const url = `${rootUrl}/api/app/logged`;

    // const config = {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // };
    
    const response = await axios.get(url,{signal :abortController.signal , headers : { "Content-Type" : "application/json" }});

    dispatch(userLoggedSuccess(response?.data));

    abortController.abort()

    setTimeout(() => {
        dispatch(clearSuccess());
    }, 5000);
};

export const userLogout = () => async (dispatch) => {

    dispatch(userLogoutSuccess());

    setTimeout(() => {
        dispatch(clearSuccess());
    }, 5000);

}

export default userSlice.reducer


