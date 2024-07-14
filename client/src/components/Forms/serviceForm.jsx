import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Heading from "../headig/headig";
import Paragraph from "../paragraph/paragraph";
import useClientData from "./useClientForm";
import { addTakenService, getProducts, updateTakenService } from "../../Redux/clientSlice/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Input from "../input/input";
import orderImg from "../../page/order/images/order_img.jpg"
import OptionSelect from "../optionSelect/optionSelect";
import useToastNotifications from "../../utils/useToastNotification"



const ServiceForm = () => {
    const {products, loading, success, message, error} = useSelector(state=> state.client)
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [clientFormData, setClientFormData] = useClientData(null);


    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";
    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const create_product_handler = async (formType) => {
        if (location.state.action === "update" && location.state.type === "service") {
            dispatch(updateTakenService({ data: clientFormData.servicesTaken, id: location.state?.clientId, type: formType, state: location.state }))
        }
        if (location.state.action === "add" && location.state.type === "service") {
            dispatch(addTakenService({ data: clientFormData.servicesTaken, id: location.state?.clientId, type: formType, state: location.state }))
        }
    }

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        if(name !== "other"){
        setClientFormData({
            ...clientFormData,
            servicesTaken : {
                ...clientFormData.servicesTaken,
                [name] : value.toLowerCase()
            }
        })
    }
    };

    useEffect(() => {
        dispatch(getProducts({type_ : "service"}))
        if(clientFormData === null){
            setClientFormData(
                {
                    ...clientFormData,
                    servicesTaken : {
                        ...clientFormData.servicesTaken,
                        other : []
                    }
                }
            )
        }

        if (location.state && location.state.type === "service" && location.state.action === "update") {
            setClientFormData({
                ...clientFormData,
                servicesTaken: location.state.value
            })
        }

    }, [location.state])

    
    useToastNotifications({loading, success, error, message})

    return (
        <>
        <div className="w-full h-max bg-gray-100 min-h-[136vh]">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[102vh] md:min-h-[76vh] left-[5vw] top-[14vh] rounded-md shadow-md py-5">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <ToastContainer position="bottom-left" />

                        <Heading
                            headingClassName="capitalize text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText={location.state.action}
                            headigSpan1Text={`${location.state.type} Details`}
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to New Product or Service !" paragraphTitle="Fill all necessary details related to New Product or Service !"
                        />
                            {/* <Input inputOnchangeFun={formInputHandler} inputName="productName" inputType="text" inputDefaultValue={clientFormData.productsPurchased.productName} labelHtmlFor="productName" labelText="Product Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} /> */}
                            <OptionSelect fieldsetClassName={fieldsetClassName} labelHtmlFor="serviceName" labelClassName={labelClassName} labelText="Service Name" inputDefaultValue="" id="serviceName" inputName="serviceName" inputClassName={inputClassName} selectOptionFun={formInputHandler} values ={products || []} />
                            <Input inputOnchangeFun={formInputHandler} inputName="amount" inputType="number" inputDefaultValue={clientFormData.servicesTaken.amount} labelHtmlFor="Amount" labelText="Amount" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-1">
                                <span className="w-full text-xs font-semibold text-gray-500 text-start mb-1">Other</span>
                                <input defaultValue="" onChange={(e) => formInputHandler(e)} type="text" id="other" name="other" className="h-6 w-[80%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                                <button onClick={() => {
                                    let newString = document.getElementById("other").value.toLowerCase()
                                    setClientFormData({
                                        ...clientFormData,
                                        servicesTaken: {
                                            ...clientFormData.servicesTaken,
                                            other: [...clientFormData.servicesTaken.other, newString ]
                                        }
                                    });

                                    // document.getElementById("other").value = ""
                                }
                                } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">Add</button>
                                <span className="w-full flex flex-wrap gap-x-1.5 gap-y-1 mt-2">
                                    {clientFormData.servicesTaken?.other?.map((v, i) => {
                                        return <span
                                            onClick={() => {
                                                document.getElementById("other").value = v;
                                                setClientFormData({ ...clientFormData, servicesTaken: { ...clientFormData.servicesTaken, other: clientFormData.servicesTaken.other.filter((f, fi) => f !== v) } })
                                            }
                                            }
                                            className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v}</span>
                                    })}
                                </span>
                            </fieldset>

                            <button onClick={() => create_product_handler(location.state ? "update" : "add")} className="capitalize w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
                            {location.state.action}
                        </button>

                    </div>

                    <div className="order-1 md:order-2 h-max min-h-[18vh] md:min-h-[88%] md:w-[27%] w-[78vw] mx-auto md:mx-0 z-10 shadow-md md:mt-0" style={{ boxShadow: "0 0 0 6px white" }}>
                        <img src={orderImg} className="min-h-[20vh] md:min-h-[75vh] h-[100%] w-[100%] object-cover shadow-md" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceForm