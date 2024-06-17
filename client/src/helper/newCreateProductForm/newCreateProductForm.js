const { useState } = require("react")



const useFormData = () => {
    const [createForm, setCreateForm] = useState({
        title : "",
        type_ : "",
        description : "",
        image : "",
        gender : [],
        types : [],
        sizes : [],
        colors : [],
        branch : []
    });

    return [createForm, setCreateForm]
};

export default useFormData;