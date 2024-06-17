
import { useLocation } from "react-router-dom";
import Heading from "../../components/headig/headig";
import Input from "../../components/input/input";
import Paragraph from "../../components/paragraph/paragraph";
import TextArea from "../../components/textArea/textArea";
import orderImg from "./images/order_img.jpg"
import { useEffect, useRef, useState } from "react";
import useFormDataState from "../../helper/formData/formData";
import OptionSelect from "../../components/optionSelect/optionSelect";

import axios from "axios";
import OrderInvoice from "../../components/orderInvoice/orderInvoice";

import html2Canvas from "html2canvas"
import { toast } from "react-toastify";

const Order = () => {
    const location = useLocation();
    const invoiceId = "orderInvoice"

    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";

    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const [orderData, setOrderData] = useFormDataState({});

    useEffect(() => {
        setOrderData({
            ...orderData,
            product: location.state.title,
            type: "",
            size: "",
            color: ""
        });
    }, []);



    const formInputHandler = (e) => {
        const { name, value } = e.target;

        setOrderData({
            ...orderData,
            [name]: value
        })
    };

    const cancelOrderLink = "https://hair-solution.vercel.app/order/cancel"

    const onSubmit_handler = async () => {

        try {
            const toastId = toast.loading("Please wait...", {
                position: "bottom-left"
            })

            const element = document.getElementById(invoiceId);
            if (!element) {
                return console.log("no element found with given id")
            }


            html2Canvas(element).then((canves) => {
                let image = canves.toDataURL("image/jpeg");

                let a = document.createElement("a");
                a.href = image;
                a.download = "capture.jpeg";
                a.click()

                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

                axios.post(
                    `https://hair-solution.vercel.app/api/app/order`,
                    { image: image }, config
                ).then((res) => {
                    toast.update(toastId, {
                        render: res.data.message,
                        position: "bottom-left",
                        type: "success",
                        isLoading: false,
                        autoClose: "4000"
                    })

                    let a = document.createElement("a");

                    let public_id = res.data.order.public_id;
                    public_id = public_id.replace(/\//g, "pratap")

                    a.href = `https://wa.me/8287889123?text=hello, here is my order. order link : ${res.data.order.secure_url} and delete order link : ${cancelOrderLink}/${public_id}`;
                    a.href = `https://wa.me/${orderData.number}?text=hello, here is my order. order link : ${res.data.order.secure_url} and delete order link : ${cancelOrderLink}/${public_id}`;

                    a.click()

                }).catch((err) => {
                    return toast.update(toastId, {
                        render: err.response.message,
                        position: "bottom-left",
                        type: "error",
                        isLoading: false,
                        autoClose: "4000"
                    })
                })

            }).catch((err) => {
                return toast.error(err.response.data.message)
            })

        } catch (error) {
            return toast.error(error.response.data.message)
        }
    };







    return (
        <>
            <div className="w-full h-max bg-gray-100 h-max min-h-[130vh] py-5 flex flex-col">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[110vh] md:min-h-[86vh] left-[5vw] top-[14vh] rounded-md shadow-md">
                    <div className="absolute bg-orange-400 w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <Heading
                            headingClassName="text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0 capitalize"
                            headingText={location.state.type_}
                            headigSpan1Text="Details"
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to order !" paragraphTitle="Fill all necessary details related to order !"
                        />

                        <Input inputOnchangeFun={formInputHandler} inputName="name" inputType="text" inputDefaultValue="" labelHtmlFor="#name" labelText="Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputOnchangeFun={formInputHandler} inputName="number" inputType="tel" inputDefaultValue="" labelHtmlFor="#number" labelText="Number" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputOnchangeFun={formInputHandler} inputName="product" inputType="text" inputDefaultValue={orderData.product} labelHtmlFor="#product" labelText="Product" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <div className="md:col-span-6"></div>
                        {
                           location.state.type_ === "product" && <>
                                <OptionSelect selectOptionFun={formInputHandler} inputName="type" inputDefaultValue={orderData.type} values={location.state.types} labelHtmlFor="#type" labelText="Type" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                                <OptionSelect selectOptionFun={formInputHandler} inputName="size" inputDefaultValue={orderData.size} values={location.state.sizes} labelHtmlFor="#size" labelText="Size" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                                <OptionSelect selectOptionFun={formInputHandler} inputName="color" inputDefaultValue={orderData.color} values={location.state.colors} labelHtmlFor="#color" labelText="Color" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />
                            </>
                        }
                        <TextArea
                            fieldsetClassName="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1"
                            labelClassName="text-xs text-gray-500 font-semibold block text-start"
                            labelText="Describe your requirement"
                            labelHtmlFor="#details"
                            textareaClassName="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100"
                            textareaName="details"
                            textareaText=""
                            textareaOnchangeFun={formInputHandler}
                        />

                        <button onClick={onSubmit_handler} className="w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
                            Place Order
                        </button>

                    </div>
                    <div className="order-1 md:order-2 h-max min-h-[18vh] md:min-h-[88%] md:w-[27%] w-[78vw] mx-auto md:mx-0 z-10 shadow-md md:mt-0" style={{ boxShadow: "0 0 0 6px white" }}>
                        <img src={orderImg} className="h-[20vh] md:min-h-[70vh] w-[100%] object-cover shadow-md" alt="" />
                    </div>

                </div>

                <div className="w-[90vw] mt-28 bg-white md:px-4 md:py-8 shadow-md mx-auto">
                    <OrderInvoice id={invoiceId} type_={location.state.type_} values={orderData} />
                </div>

            </div>


        </>
    )
};

export default Order;