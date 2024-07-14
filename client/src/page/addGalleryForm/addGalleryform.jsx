import { useEffect, useMemo, useState } from "react";
import Heading from "../../components/headig/headig";
import Input from "../../components/input/input";
import Paragraph from "../../components/paragraph/paragraph";
import orderImg from "../order/images/order_img.jpg"
import TextArea from "../../components/textArea/textArea";
import { useLocation } from "react-router-dom";
import OptionSelect from "../../components/optionSelect/optionSelect";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { galleryCreateOrUpdate } from "../../Redux/gallerySlice/gallerySlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToastNotifications from "../../utils/useToastNotification";




const AddGalleryForm = () => {
    const { success, loading, error, message } = useSelector(state => state.gallery)

    const location = useLocation();
    const dispatch = useDispatch();

    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";
    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const [galleryFormData, setGalleryFormData] = useState({
        title: "",
        details: "",
        image: "",
        branch: "",
        social: [
            {
                link: "https://wa.me/enter your number ",
                name: "Whatsapp"
            }
        ]
    })

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        if (name !== "image" && name !== "social_link" && name !== "social_name") {

            setGalleryFormData({
                ...galleryFormData,
                [name]: value.toLowerCase()
            })
        }
        if (name === "image") {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === FileReader.DONE) {
                    setGalleryFormData({ ...galleryFormData, image: reader.result })
                }
            };
            reader.readAsDataURL(file)
        }
    };

    const create_product_handler = async (formType) => {
            dispatch(galleryCreateOrUpdate({ data: galleryFormData, id: location.state?._id, type: formType, state: location.state }))
    }

    useToastNotifications({error, success, message, loading})

    // update default values when click on update button
    useEffect(() => {
        if (location.state) {
            setGalleryFormData({
                ...galleryFormData,
                title: location.state.title,
                details: location.state.details,
                branch: location.state.branch,
                social: location.state.social,
                image: location.state.image.url
            })
        }
    }, [location.state])

    const social = useMemo(() => {
        return galleryFormData.social.map((v, i) => {
            return v.link && <span onClick={() => {
                let link = document.getElementById("social_link").value = v.link;
                setGalleryFormData({ ...galleryFormData, social: galleryFormData.social.filter((v, i) => v.link !== link) })
            }
            } className="w-max text-nowrap px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100" key={i}>{v.link}</span>
        })
    }, [galleryFormData]);

    console.log(galleryFormData)
    return (
        <>
            <div className="w-full h-max bg-gray-100 min-h-[136vh]">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[102vh] md:min-h-[76vh] left-[5vw] top-[14vh] rounded-md shadow-md py-5">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[16%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <ToastContainer position="bottom-left" />

                        <Heading
                            headingClassName="text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText="Add"
                            headigSpan1Text="Gallery Details"
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to New Product or Service !" paragraphTitle="Fill all necessary details related to New Product or Service !"
                        />

                        <Input inputOnchangeFun={formInputHandler} inputName="title" inputType="text" inputDefaultValue={galleryFormData.title} labelHtmlFor="title" labelText="Title" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                        <Input inputOnchangeFun={formInputHandler} inputName="branch" inputType="text" inputDefaultValue={galleryFormData.branch} labelHtmlFor="branch" labelText="Branch" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <fieldset className="col-span-12 lg:col-span-8 flex flex-wrap gap-x-1 md:gap-x-2 items-center px-2 py-1 my-1">
                            <span className="w-full text-xs font-semibold text-gray-500 text-start flex gap-x-2"> Add Social <span className="text-sm text-red-600"> * </span></span>
                            <input onChange={(e) => formInputHandler(e)} type="text" id="social_link" name="social_link" className="h-6 w-[50%] md:min-w-[60%] bg-gray-100 text-xs py-0.5 px-2 text-gray-400 font-semibold" />
                            <OptionSelect selectOptionFun={(e) => formInputHandler(e)} inputName="social_name" id="social_name" values={["Facebook", "Instagram", "Whatsapp"]} value="" labelHtmlFor="#type" labelText="Type" fieldsetClassName={"w-[20%] min-w-[80px] md:min-w-[120px] border"} labelClassName={"hidden"} inputClassName={"text-xs font-semibold text-gray-500 outline-none pb-1 h-full"} />

                            <button onClick={() => {
                                setGalleryFormData({
                                    ...galleryFormData,
                                    social: [...galleryFormData.social, { name: document.getElementById("social_name").value, link: document.getElementById("social_link").value }]
                                });
                                document.getElementById("social_link").value = ""
                            }
                            } className="text-xs font-semibold text-gray-500 py-1 px-2 bg-gray-100">
                                Add
                            </button>
                            <span className="w-full flex flex-wrap gap-x-1.5 mt-2 gap-y-1">
                                {social}
                            </span>
                        </fieldset>

                        <fieldset className="col-span-5 lg:col-span-4 flex flex-wrap gap-x-2 items-center px-2 py-1 my-2">
                            <label htmlFor="image" className="w-full text-xs font-semibold text-gray-500 text-start mb-1 flex gap-x-2">Image <span className="text-sm text-red-600"> * </span></label>
                            <span className="relative w-[12] border">
                                <input type="file" onChange={(e) => formInputHandler(e)} accept="image/*" className="absolute z-0 opacity-0 h-full w-full" name="image" id="image" />
                                <PhotoIcon className="w-10 h-10" />
                            </span>
                            <img src={galleryFormData.image} className="h-10" alt="" />
                        </fieldset>


                        <TextArea
                            fieldsetClassName="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1"
                            labelClassName="text-xs text-gray-500 font-semibold block text-start"
                            labelText="Describe your requirement *"
                            labelHtmlFor="details"
                            textareaClassName="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100"
                            textareaName="details"
                            textareaText=""
                            textareaDefaultValue={galleryFormData?.details}
                            textareaOnchangeFun={(e) => formInputHandler(e)}
                        />



                        <button onClick={() => create_product_handler(location.state ? "update" : "add")} className="w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
                            {location.state ? "Update" : "Add"}
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

export default AddGalleryForm;