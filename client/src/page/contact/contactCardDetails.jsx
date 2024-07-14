import { FaHeadset } from "react-icons/fa"
import HoverCardDetails from "./howerCardDetails"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";



const ContactCardDetails = ({ containerClass, values }) => {

    const [toggleDetails, setToggleDetails] = useState("hidden");

    const showDetailsToggle = () => {
        toggleDetails === "hidden" ? setToggleDetails("flex") : setToggleDetails("hidden")
    }
    return (
        <>
            <div className={containerClass}>
                <HoverCardDetails toggleDetails={toggleDetails} setToggleDetails={setToggleDetails} values={values} />
                <div className="w-[100%] min-h-[30%] h-20">
                    <FaHeadset size="70" className="ml-auto text-gray-400" />
                </div>
                <h5 className="w-[100%] h-max text-start text-[20px] lg:text-[24px] font-bold text-gray-600 line-clamp-1 capitalize">
                    <span className="text-12px lg:text-[14px] text-gray-400">{values.specialist} : </span>
                    
                    <span title={values.name} className="">{values.name}</span>
                </h5>
                <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>To Connect him/her see all available details below.</blockquote>
                <button onClick={showDetailsToggle} className="cursor-pointer w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>
            </div>
        </>
    )
}

export default ContactCardDetails