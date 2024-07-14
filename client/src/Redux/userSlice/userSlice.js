import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// axios.defaults.withCredentials = true


const rootUrl = "https://hair-solution.vercel.app/api/app"
// const rootUrl = "http://localhost:8000/api/app"

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        success: false,
        error: false,
        auth: false,
        message: "",
        user: null,
        users: [],
        staffs : []

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
        userLoginFailed: (state, action) => {
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
        userRegisterFailed: (state, action) => {
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
        getUsersRequest : (state) => {
            state.loading = true;
        },
        getUsersSuccess : (state, action) => {
            state.success = true;
            state.message = "";
            state.loading = false;
            state.users = action.payload.users;
        },
        getUsersFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload
        },
        userUpdateRequest : (state) => {
            state.loading = true;
        },
        userUpdateSuccess : (state, action) => {
            state.success = true;
            state.message = action.payload.message;
            state.loading = false;
            state.user = action.payload.user;
        },
        userUpdateFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload
        },
        staffUpdateRequest : (state) => {
            state.loading = true;
        },
        staffUpdateSuccess : (state, action) => {
            state.success = true;
            state.message = action.payload.message;
            state.loading = false;
            state.users = action.payload.users;
        },
        staffUpdateFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
        },
        userDeleteRequest : (state) => {
            state.loading = true;
        },
        userDeleteSuccess : (state, action) => {
            state.success = true;
            state.message = action.payload.message;
            state.loading = false;
            state.users = action.payload.users;
        },
        userDeleteFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
        },
        getPublicStaffsRequest : (state) => {
            state.loading = true;
        },
        getPublicStaffsSuccess : (state, action) => {
            state.success = true;
            state.message = action.payload.message;
            state.loading = false;
            state.staffs = action.payload.staffs;
        },
        getPublicStaffsFailed : (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
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
    userLoginFailed,

    userRegisterRequest,
    userRegisterSuccess,
    userRegisterFailed,

    userLoggedSuccess,

    userLogoutSuccess,

    getUsersRequest,
    getUsersSuccess,
    getUsersFailed,

    userUpdateRequest,
    userUpdateSuccess,
    userUpdateFailed,

    staffUpdateRequest,
    staffUpdateSuccess,
    staffUpdateFailed,

    getPublicStaffsRequest,
    getPublicStaffsSuccess,
    getPublicStaffsFailed,

    userDeleteRequest,
    userDeleteSuccess,
    userDeleteFailed,

    clearSuccess,
    clearError
} = userSlice.actions;

const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

export const userLogin = ({ data }) => async (dispatch) => {

    try {
        dispatch(userLoginRequest());

        const url = `${rootUrl}/login`;

        const response = await axios.post(url, data, config);

        dispatch(userLoginSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(userLoginFailed(error?.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const userRegister = ({ data = "" }) => async (dispatch) => {
    try {
        dispatch(userRegisterRequest());

        const url = `${rootUrl}/register`;

        const response = await axios.post(url, data, config);

        dispatch(userRegisterSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(userRegisterFailed(error?.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const userLogged = () => async (dispatch) => {

    const abortController = new AbortController();

    const url = `${rootUrl}/logged`;
    
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
    }, 3000);

}

export const getUsers = (specialist=null) => async (dispatch) => {
    // let data = { specialist : specialist}
    try {
    const abortController = new AbortController();


        dispatch(getUsersRequest());

        let url;

        if(specialist === null ){
            url = `${rootUrl}/users/""`;
        }
        if(specialist !== null){
            url = `${rootUrl}/contact/public/${specialist}`;
        }

        config.signal = abortController.signal
        
        const response = await axios.get(url, config);

        dispatch(getUsersSuccess(response?.data));

        abortController.abort()

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);

    } catch (error) {
        dispatch(getUsersFailed(error?.response?.data?.message));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const userUpdate = ({value, id}) => async (dispatch) => {
    try {
        dispatch(userUpdateRequest())

        const url = `${rootUrl}/userUpdate/${id}`;

        config.withCredentials = true

        const response = await axios.put(url, value);

        dispatch(userUpdateSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);
    } catch (error) {
        dispatch(userUpdateFailed(error?.response?.data?.message));
       
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const staffUpdate = ({value, id}) => async (dispatch) => {
    try {

        dispatch(staffUpdateRequest())

        const url = `${rootUrl}/admin/staffUpdate/${id}`;

        const response = await axios.post(url, value);

        dispatch(staffUpdateSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearSuccess());
        }, 5000);
    } catch (error) {
        dispatch(staffUpdateFailed(error?.response?.data?.message));
       
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch(userDeleteRequest());

        const url = `${rootUrl}/userDelete/${id}`;
        
        const response = await axios.delete(url);

        dispatch(userDeleteSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);

    } catch (error) {
        dispatch(userDeleteFailed(error?.response?.data?.message));
       
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export const getPublicStaffs = () => async (dispatch) => {
    console.log("calls ")
    try {
        dispatch(getPublicStaffsRequest());

        const url = `${rootUrl}/public/staffs`;
        
        const response = await axios.get(url);

        dispatch(getPublicStaffsSuccess(response?.data));

        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    } catch (error) {
        dispatch(getPublicStaffsFailed(error?.response?.data?.message));
       
        setTimeout(() => {
            dispatch(clearError());
        }, 5000);
    }
}

export default userSlice.reducer


