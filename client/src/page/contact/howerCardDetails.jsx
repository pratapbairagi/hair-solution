import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaAward } from "react-icons/fa";


const HoverCardDetails = ({ values={}, id = "", toggleDetails="", setToggleDetails="" }) => {
    const showDetailsToggle = () => {
        toggleDetails === "hidden" ? setToggleDetails("flex") : setToggleDetails("hidden")
    }
    return (
        <>
            <div id={id} className={`absolute z-20 ${toggleDetails} w-full h-full bg-white shadow-md top-0 left-0 flex flex-wrap justify-end p-6 transition-3`} style={{ placeContent: "flex-start" }}>
                <FaAward size="20%" className="text-gray-200 mx-3 ml-auto lg:mx-auto" />
                <button onClick={showDetailsToggle} className="ml-auto absolute w-max aspect-square">
                    <XMarkIcon color="red" className="hover:w-[22px] hover:font-semibold" width="20px" />
                </button>
                <p 
                title={"Name : "+values.name+", Specialist : "+values.specialist+", Experience : "+values.experience+", Email : "+values.email+", Number : "+values.number} 
                className="text-lg text-gray-700 mt-10 lg:mt-8 w-full text-start lg:text-center line-clamp-6">Contact with <strong className="text-orange-500"> {values.gender === "male" ? "Mr." : "Mrs."} <span className="capitalize">{values.name}</span> </strong> , {values.specialist}  at SA Uni Hair with {values.experience}. Email : <strong className="text-orange-500"> {values.email} </strong> and query related number : <strong className="text-orange-500">+91 {values.number}</strong> </p>
            </div>
        </>
    )
};

export default HoverCardDetails;