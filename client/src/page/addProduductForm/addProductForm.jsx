// import Heading from "../../"
import { Textarea } from "@headlessui/react";
import Heading from "../../components/headig/headig";
import Input from "../../components/input/input";
import Paragraph from "../../components/paragraph/paragraph";
import useFormData from "../../helper/newCreateProductForm/newCreateProductForm";
import orderImg from "../order/images/order_img.jpg"
import TextArea from "../../components/textArea/textArea";
import { PhotoIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { product_postORupdate } from "../../Redux/action/product";
import { createOrUpdateProduct } from "../../Redux/productSlice/productSlice";



const AddProductForm = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const { success, loading, error, products, product, message } = useSelector(state => state.products)

    const fieldsetClassName = "col-span-12 md:col-span-7 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";

    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const [createForm, setCreateForm] = useFormData(null);

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        if (name !== "types" && name !== "sizes" && name !== "colors" && name !== "branch" && name !== "file" && name !== "gender") {

            setCreateForm({
                ...createForm,
                [name]: value.toLowerCase()
            })
        }
        if (name === "image") {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === FileReader.DONE) {
                    setCreateForm({ ...createForm, image: reader.result })
                }
            };
            reader.readAsDataURL(file)
        }

        if (name === "gender") {
            setCreateForm({
                ...createForm,
                gender: e.target.checked ? [...createForm.gender, e.target.value] : createForm.gender.filter(v => v !== e.target.value)
            })
        }

    };

    useEffect(() => {
        let toastId = null;

        if (loading) {
            toastId = toast.loading("Please wait...", {
                position: "bottom-left"
            });

        }

        if (success && message) {
            toast.update(toastId, {
                render: message,
                position: "bottom-left",
                type: "success",
                isLoading: false,
                autoClose: "4000"
            })
        }

        if (error && message) {
            toast.update(toastId, {
                render: message,
                position: "bottom-left",
                type: "error",
                isLoading: false,
                autoClose: "4000"
            })
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };

    }, [error, success, message, loading])

    const create_product_handler = async (formType) => {

        if(location.state){
        // dispatch(product_postORupdate({ data: createForm, id: location.state._id, type: formType, state: location.state }))
        dispatch(createOrUpdateProduct({ data: createForm, id: location.state._id, type: formType, state: location.state }))
        }
        else{
        dispatch(createOrUpdateProduct({ data: createForm, type: formType }))

        }
    }



    useEffect(() => {
        let timeoutId = null;
        if (location.state) {
             timeoutId = setTimeout(()=>{
            let obj = {}
            for (const key in location.state) {
                if (key === "image") {
                    obj[key] = location.state[key]?.url
                }
                if (key !== "_id" && key !== "createdAt" && key !== "__v" && key !== "image") {
                    obj[key] = location.state[key]
                }
            }
            setCreateForm(obj)

        },1000)

        }

        return () => {
            if(timeoutId){
                clearTimeout(timeoutId)
            }
        }
    }, [location.state]);

    // for optimization
    const types = useMemo(() => {
        return createForm.types.map((v, i) => {
            return <span onClick={() => {
                document.getElementById("types").value = v;
                setCreateForm({ ...createForm, types: createForm.colors.filter((f, fi) => f !== v) })
            }
            } className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v}</span>
        })
    }, [createForm])

    const colors = useMemo(() => {
        return createForm.colors.map((v, i) => {
            return <span onClick={() => {
                document.getElementById("colors").value = v;
                setCreateForm({ ...createForm, colors: createForm.colors.filter((f, fi) => f !== v) })
            }
            } className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v}</span>
        })
    }, [createForm]);

    const sizes = useMemo(() => {
        return createForm.sizes.map((v, i) => {
            return <span onClick={() => {
                document.getElementById("sizes").value = v;
                setCreateForm({ ...createForm, sizes: createForm.sizes.filter((f, fi) => f !== v) })
            }
            } className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v}</span>
        })
    }, [createForm]);

    const branch = useMemo(() => {
        return createForm.branch.map((v, i) => {
            return <span onClick={() => {
                document.getElementById("branch").value = v;
                setCreateForm({ ...createForm, branch: createForm.branch.filter((f, fi) => f !== v) })
            }
            } className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v}</span>
        })
    }, [createForm])

    return (
        <>
            <div className="w-full h-max bg-gray-100 min-h-[186vh]">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[132vh] md:min-h-[106vh] left-[5vw] top-[14vh] rounded-md shadow-md py-5">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <ToastContainer position="bottom-left" />

                        <Heading
                            headingClassName="text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText="Add"
                            headigSpan1Text="Product / Service"
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to New Product or Service !" paragraphTitle="Fill all necessary details related to New Product or Service !"
                        />

                        <Input inputOnchangeFun={formInputHandler} inputName="title" inputType="text" inputDefaultValue={createForm.title} labelHtmlFor="title" labelText="Title" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <fieldset className="col-span-7 lg:col-span-4 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2 h-full">
                            <span className="w-full text-xs font-semibold text-gray-500 text-start">Type</span>
                            <label htmlFor="product" className={labelClassName}>Product</label>
                            <input value="product" onChange={(e) => formInputHandler(e)} type="radio" name="type_" id="product" />
                            <label htmlFor="service" className={labelClassName}>Service</label>
                            <input value="service" onChange={(e) => formInputHandler(e)} type="radio" name="type_" id="service" />
                        </fieldset>

                        <fieldset className="col-span-5 lg:col-span-4 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2">
                            <label htmlFor="image" className="w-full text-xs font-semibold text-gray-500 text-start mb-1 flex gap-x-2">Image <span className="text-sm text-red-600"> * </span></label>
                            <span className="relative w-[12] border">
                                <input type="file" onChange={(e) => formInputHandler(e)} accept="image/*" className="absolute z-0 opacity-0 h-full w-full" name="image" id="image" />
                                <PhotoIcon className="w-10 h-10" />
                            </span>
                            <img src={createForm.image} className="h-10" alt="" />
                        </fieldset>

                        <fieldset className="col-span-6 lg:col-span-4 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2">
                            <span className="w-full text-xs font-semibold text-gray-500 text-start mb-2 gap-x-2">Gender <span className="text-sm text-red-600"> * </span></span>
                            <label htmlFor="male" className={labelClassName}>Male</label>
                            <input value="male" onChange={(e) => formInputHandler(e)} type="checkbox" name="gender" id="male" className={{}} />
                            <label htmlFor="female" className={labelClassName}>Female</label>
                            <input value="female" onChange={(e) => formInputHandler(e)} type="checkbox" name="gender" id="female" className={{}} />
                        </fieldset>

                        {createForm.type_ === "product" && <>
                            <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-1">
                                <span className="w-full text-xs font-semibold text-gray-500 text-start mb-1">Add Types</span>
                                <input onChange={(e) => formInputHandler(e)} type="text" id="types" name="types" className="h-6 w-[80%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                                <button onClick={() => {
                                    setCreateForm({
                                        ...createForm,
                                        types: [...createForm.types, document.getElementById("types").value.toLowerCase()]
                                    });
                                    document.getElementById("types").value = ""
                                }
                                } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">Add</button>
                                <span className="w-full flex flex-wrap gap-x-1.5 gap-y-1 mt-2">
                                    {types}
                                </span>
                            </fieldset>

                            <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-1">
                                <span className="w-full text-xs font-semibold text-gray-500 text-start mb-1">Add Sizes</span>
                                <input onChange={(e) => formInputHandler(e)} type="text" id="sizes" name="sizes" className="h-6 w-[80%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                                <button onClick={() => {
                                    setCreateForm({
                                        ...createForm,
                                        sizes: [...createForm.sizes, document.getElementById("sizes").value.toLowerCase()]
                                    });
                                    document.getElementById("sizes").value = ""
                                }
                                } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">Add</button>
                                <span className="w-full flex flex-wrap gap-x-1.5 mt-2 gap-y-1">
                                    {sizes}
                                </span>
                            </fieldset>
                        </>
                        }

                        <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-1">
                            <span className="w-full text-xs font-semibold text-gray-500 text-start mb-1">Add Colors</span>
                            <input onChange={(e) => formInputHandler(e)} type="text" id="colors" name="colors" className="h-6 w-[80%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                            <button onClick={() => {
                                setCreateForm({
                                    ...createForm,
                                    colors: [...createForm.colors, document.getElementById("colors").value.toLowerCase()]
                                });
                                document.getElementById("colors").value = ""
                            }
                            } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">Add</button>
                            <span className="w-full flex flex-wrap gap-x-1.5 mt-2 gap-y-1">
                                {colors}
                            </span>
                        </fieldset>


                        <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-1">
                            <span className="w-full text-xs font-semibold text-gray-500 text-start flex mb-1 gap-x-2">Add Branch <span className="text-sm text-red-600"> * </span></span>
                            <input onChange={(e) => formInputHandler(e)} type="text" id="branch" name="branch" className="h-6 w-[80%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                            <button onClick={() => {
                                setCreateForm({
                                    ...createForm,
                                    branch: [...createForm.branch, document.getElementById("branch").value]
                                });
                                document.getElementById("branch").value = ""
                            }
                            } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">Add</button>
                            <span className="w-full flex flex-wrap gap-x-1.5 mt-2 gap-y-1">
                                {branch}
                            </span>
                        </fieldset>



                        <TextArea
                            fieldsetClassName="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1"
                            labelClassName="text-xs text-gray-500 font-semibold block text-start"
                            labelText="Describe your requirement *"
                            labelHtmlFor="description"
                            textareaClassName="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100"
                            textareaName="description"
                            textareaText=""
                            textareaDefaultValue={createForm?.description}
                            textareaOnchangeFun={(e) => formInputHandler(e)}
                        />

                        <button onClick={() => create_product_handler(location.state ? "update" : "add")} className="w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
                            {location.state ? "update" : "Add"}
                        </button>

                    </div>

                    <div className="order-1 md:order-2 h-max min-h-[18vh] md:min-h-[88%] md:w-[27%] w-[78vw] mx-auto md:mx-0 z-10 shadow-md md:mt-0" style={{ boxShadow: "0 0 0 6px white" }}>
                        <img src={orderImg} className="min-h-[20vh] md:min-h-[105vh] h-[100%] w-[100%] object-cover shadow-md" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddProductForm;