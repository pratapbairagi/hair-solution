import { useState } from "react";

const useFormDataState = () => {
    const [ orderData, setOrderData ] = useState({
        name : "",
        number : "",
        details : "",
        product : "",
        service : "",
        date : "",
        type : "",
        size : "",
        color : ""
    });

    return [orderData, setOrderData]

};

export default useFormDataState;