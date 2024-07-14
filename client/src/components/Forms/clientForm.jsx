import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from "../headig/headig"
import Paragraph from "../paragraph/paragraph"
import Input from "../input/input"
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addClient, clientUpdate } from '../../Redux/clientSlice/clientSlice';
import orderImg from "../../page/order/images/order_img.jpg"
import useClientData from './useClientForm';
import useToastNotifications from '../../utils/useToastNotification';

const ClientForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { success, loading, error, message } = useSelector(state => state.client)


    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";
    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const [clientFormData, setClientFormData] = useClientData(null);

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        if(name !== "other"){
        setClientFormData({
            ...clientFormData,
            [name]: value.toLowerCase()
        })
    }
    };

    useEffect(() => {
        if (location.state && location.state.type === "client" && location.state.action === "update") {
            setClientFormData({
                ...clientFormData,
                name: location.state.value.name,
                age: location.state.value.age,
                gender: location.state.value.gender,
                email: location.state.value.email,
                number: location.state.value.number
            })
        }

    }, [location.state])

    const create_product_handler = async (formType) => {
        if (formType === "update" && location.state.type === "client" && location.state.action === "update") {
            dispatch(clientUpdate({ data: clientFormData, id: location.state?.value?._id, type: formType, state: location.state }))
        }
        if (location.state.type === "client" && location.state.action === "add") {
            dispatch(addClient({ data: clientFormData, id: location.state?.value?._id, type: formType, state: location.state }))
        }
    }

    useToastNotifications({error, success, message, loading})

    return (
        <>
            <div className="w-full h-max bg-gray-100 min-h-[136vh]">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[102vh] md:min-h-[76vh] left-[5vw] top-[14vh] rounded-md shadow-md py-5">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <ToastContainer position="bottom-left" />

                        <Heading
                            headingClassName="capitalize text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText={`${location.state.action}`}
                            headigSpan1Text={`${location.state.type} Details`}
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to New Product or Service !" paragraphTitle="Fill all necessary details related to New Product or Service !"
                        />
                
                            <Input inputOnchangeFun={formInputHandler} inputName="name" inputType="text" inputDefaultValue={clientFormData.name} labelHtmlFor="name" labelText="Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="email" inputType="email" inputDefaultValue={clientFormData.email} labelHtmlFor="email" labelText="Email" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="number" inputType="text" inputDefaultValue={clientFormData.number} labelHtmlFor="number" labelText="Number" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="age" inputType="number" inputDefaultValue={clientFormData.age} labelHtmlFor="age" labelText="Age" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                            <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2 h-full">
                                <span className="w-full text-xs font-semibold text-gray-500 text-start">Gender</span>
                                <label htmlFor="male" className={labelClassName}>Male</label>
                                <input value="male" onChange={formInputHandler} type="radio" name="gender" id="male" />
                                <label htmlFor="female" className={labelClassName}>Female</label>
                                <input value="female" onChange={formInputHandler} type="radio" name="gender" id="female" />
                                <label htmlFor="other" className={labelClassName}>Other</label>
                                <input value="other" onChange={formInputHandler} type="radio" name="gender" id="other" />
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
};
export default ClientForm