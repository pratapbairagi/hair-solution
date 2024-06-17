import { useEffect } from "react";
import Heading from "../../components/headig/headig";
import Input from "../../components/input/input";
import OptionSelect from "../../components/optionSelect/optionSelect";
import Paragraph from "../../components/paragraph/paragraph";
import TextArea from "../../components/textArea/textArea";
import orderImg from "../order/images/order_img.jpg"
import useFormDataState from "../../helper/formData/formData";
import { useLocation } from "react-router-dom";




const Booking = () => {
    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";
    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    
    const location = useLocation();

    const [orderData, setOrderData] = useFormDataState({});

    useEffect(()=>{
        setOrderData({
            ...orderData,
            product : location.state.title,
            type : "",
            size : "",
            color : ""
        });
    },[]);

    const formInputHandler = (e) => {

        const {name, value} =  e.target;

        setOrderData({
            ...orderData,
            [name] : value
        })
    }

    return (
        <>
            <div className="w-full h-max min-h-[125vh] md:min-h-[104vh] bg-gray-100">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[82vh] md:min-h-[82vh] left-[5vw] top-[14vh] rounded-md shadow-md  py-6">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[20%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <Heading
                            headingClassName="text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText="Booking"
                            headigSpan1Text="Details"
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to order !" paragraphTitle="Fill all necessary details related to order !"
                        />

                        <Input inputName="name" inputType="text" inputDefaultValue="" labelHtmlFor="#name" labelText="Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputName="number" inputType="tel" inputDefaultValue="" labelHtmlFor="#number" labelText="Number" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputName="date" inputType="date" inputDefaultValue="" labelHtmlFor="#date" labelText="Date" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputName="service" inputType="text" inputDefaultValue="" labelHtmlFor="#service" labelText="Service" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <OptionSelect selectOptionFun={formInputHandler} inputName="type" values={location.state.type} value="" labelHtmlFor="#type" labelText="Type" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <OptionSelect selectOptionFun={formInputHandler} inputName="size" values={location.state.size} value="" labelHtmlFor="#size" labelText="Size" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <OptionSelect selectOptionFun={formInputHandler} inputName="color" values={location.state.color} value="" labelHtmlFor="#color" labelText="Color" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />


                        <TextArea
                            fieldsetClassName="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1"
                            labelClassName="text-xs text-gray-500 font-semibold block text-start"
                            labelText="Describe your requirement"
                            labelHtmlFor="#details"
                            textareaClassName="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100"
                            textareaName="details"
                            textareaText=""
                        />

                        <button className="w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold"> Book </button>

                    </div>
                    <div className="order-1 md:order-2 h-max min-h-[18vh] md:min-h-[88%] md:w-[27%] w-[78vw] mx-auto md:mx-0 z-10 shadow-md" style={{ boxShadow: "0 0 0 6px white" }}>
                        <img src={orderImg} className="h-max md:min-h-[70vh] w-[100%] object-cover shadow-md" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
};
export default Booking;