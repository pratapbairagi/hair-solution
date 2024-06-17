import axios from "axios";
import { CLEAR_ERROR, CLEAR_SUCCESS, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCT_CREATE_OR_UPDATE_FAILED, PRODUCT_CREATE_OR_UPDATE_REQUEST, PRODUCT_CREATE_OR_UPDATE_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../type/product"

const rootUrl = "https://no-pain-hair-solution.vercel.app";
// const config = {
//     headers : {
//         "Content-Type" : "application/json"
//     }
// }
export const product_details = () => async (dispatch) => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "https://no-pain-hair-solution.vercel.app"
            }
        }

        dispatch({
            type : PRODUCT_DETAILS_REQUEST
        });
        const url = `${rootUrl}/api/app/productDetails`;

        const {data} = await axios.get(url, config);

        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : data
        })

        
    } catch (error) {
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : error.response.data.message
        })
    }
};

export const products_details = () => async (dispatch) => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "https://no-pain-hair-solution.vercel.app"
            }
        }
        dispatch({
            type : PRODUCTS_DETAILS_REQUEST
        });

        const url = `${rootUrl}/api/app/productsDetails`;

        const {data} = await axios.get(url, config);

        dispatch({
            type : PRODUCTS_DETAILS_SUCCESS,
            payload : data
        })

        let timeoutId = setTimeout(()=>{
            dispatch({
                type : CLEAR_SUCCESS
            });

            return clearTimeout(timeoutId)
        },5000);

    } catch (error) {
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : error.response.data.message
        })
        console.log("data", error)

        let timeoutId = setTimeout(()=>{
            dispatch({
                type : CLEAR_ERROR
            });

            return clearTimeout(timeoutId)
        },5000)

    }
};

export const product_postORupdate = ({data = "", type = "", id = "", state = ""}) => async (dispatch) => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin" : "https://no-pain-hair-solution.vercel.app"
            }
        }
        dispatch({
            type : PRODUCT_CREATE_OR_UPDATE_REQUEST
        });
        if(data){
        const url = type === "update"  ? `${rootUrl}/api/app/productUpdate/${id}` : `${rootUrl}/api/app/productCreate`
        
        const {data} = await axios[type === "update" ? "put" : "post"](url, data, config);

        dispatch({
            type : PRODUCT_CREATE_OR_UPDATE_SUCCESS,
            payload : data
        })

        let timeoutId = setTimeout(()=>{
            dispatch({
                type : CLEAR_SUCCESS
            });

            return clearTimeout(timeoutId)
        },5000);
    }

    } catch (error) {

        dispatch({
            type : PRODUCT_CREATE_OR_UPDATE_FAILED,
            payload : error.response.data.message
        })

        console.log("data", error)

        let timeoutId = setTimeout(()=>{
            dispatch({
                type : CLEAR_ERROR
            });

            return clearTimeout(timeoutId)
        },5000)
    }
}