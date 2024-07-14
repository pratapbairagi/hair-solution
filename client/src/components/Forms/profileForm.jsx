
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from "../headig/headig"
import Paragraph from "../paragraph/paragraph"
import Input from "../input/input"
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import orderImg from "../../page/order/images/order_img.jpg"
import { staffUpdate, userUpdate } from '../../Redux/userSlice/userSlice';
import OptionSelect from '../optionSelect/optionSelect';
import useToastNotifications from '../../utils/useToastNotification';

const ProfileForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { success, loading, error, message } = useSelector(state => state.user)
    
    const [profileData, setProfileData] = useState({
        name : "",
        email : "",
        number : "",
        experience : "",
        gender : "",
        specialist : "",
        role : "",
        isVerified : false
    })

    useEffect(()=>{
        if(location.state.value){
            if(location.state.type === "profile"){
            setProfileData({
                name : location.state.value.name,
                email : location.state.value.email,
                number : location.state.value.number,
                gender : location.state.value.gender,
                specialist : location.state.value.specialist,
                experience : location.state.value.experience
            })
        }
        if(location.state.type === "staff"){
            setProfileData({
                role : location.state.value.role,
                isVerified : location.state.value.isVerified
               
            })
        }
        
        }
    },[location.state.value])

    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";
    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        if(name !== "other"){
            setProfileData({
            ...profileData,
            [name]: value.toLowerCase()
        })
    }
    };

    const create_product_handler = async ({value, id, type, action}) => {
       if(type === "profile"){
           dispatch(userUpdate({value, id}))
       }
       if(type === "staff"){
        dispatch(staffUpdate({value, id}))
       }
    }

    useToastNotifications({error, success, message, loading})

    return (
        <>
            <div className="w-full h-max bg-gray-100 min-h-[136vh]">
            <ToastContainer position="bottom-left" />
               
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[102vh] md:min-h-[76vh] left-[5vw] top-[14vh] rounded-md shadow-md py-5">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>


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
                        {location.state && location.state.type === "profile" && <>
                            <Input inputOnchangeFun={formInputHandler} inputName="name" inputType="text" inputDefaultValue={location.state?.value?.name} labelHtmlFor="name" labelText="Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="email" inputType="email" inputDefaultValue={location.state?.value?.email} labelHtmlFor="email" labelText="Email" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="number" inputType="number" inputDefaultValue={location.state?.value?.number} labelHtmlFor="number" labelText="Number" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="experience" inputType="text" inputDefaultValue={location.state?.value?.experience} labelHtmlFor="experience" labelText="Experience" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                            <Input inputOnchangeFun={formInputHandler} inputName="specialist" inputType="text" inputDefaultValue={location.state?.value?.specialist} labelHtmlFor="specialist" labelText="Specialist" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                            <fieldset className="col-span-12 lg:col-span-6 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2 h-full">
                                <span className="w-full text-xs font-semibold text-gray-500 text-start">Gender</span>
                                <label htmlFor="male" className={labelClassName}>Male</label>
                                <input defaultChecked={location.state?.value?.gender === "male"} value="male" onChange={formInputHandler} type="radio" name="gender" id="male" />
                                <label htmlFor="female" className={labelClassName}>Female</label>
                                <input defaultChecked={location.state?.value?.gender === "female"} value="female" onChange={formInputHandler} type="radio" name="gender" id="female" />
                                <label htmlFor="other" className={labelClassName}>Other</label>
                                <input defaultChecked={location.state?.value?.gender === "other"} value="other" onChange={formInputHandler} type="radio" name="gender" id="other" />
                            </fieldset>
                            </>
                            }

                            {location.state && location.state.type === "staff" && <>
                            <OptionSelect fieldsetClassName={fieldsetClassName} labelHtmlFor="role" labelClassName={labelClassName} labelText="Role" inputDefaultValue={location.state?.value?.role} id="role" inputName="role" inputClassName={inputClassName} selectOptionFun={formInputHandler} values={["user", "admin","owner"]}/>
                            <OptionSelect fieldsetClassName={fieldsetClassName+" "+"mb-3"} labelHtmlFor="role" labelClassName={labelClassName} labelText="Verified" inputDefaultValue={location.state?.value?.isVerified ? "Yes" : "No"} id="isVerified" inputName="isVerified" inputClassName={inputClassName} selectOptionFun={formInputHandler} values={["Yes", "No"]}/>
                            </>
                            }

                        <button onClick={() => create_product_handler({value : profileData, action : location.state.action, id : location.state.value._id, type : location.state.type })} className="capitalize w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
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
export default ProfileForm