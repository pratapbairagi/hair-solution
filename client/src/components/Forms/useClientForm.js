import { useState } from "react";


const useClientData = () => {
    const [clientFormData, setClientFormData] = useState({
        name: "",
        age: "",
        number: "",
        email: "",
        gender: "",
        productsPurchased: {
            productId: "",
            productName: "",
            amount: "",
            other : []
        },
        servicesTaken: {
            serviceId: "",
            serviceName: "",
            amount: "",
            other : []
        }

    });

    return [clientFormData, setClientFormData]
}

export default useClientData