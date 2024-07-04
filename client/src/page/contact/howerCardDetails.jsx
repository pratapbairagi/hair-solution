import { FaAward } from "react-icons/fa";


const HoverCardDetails = ({name="", experience="", email="", number="", designation=""}) => {
    return (
        <>
        <div className="absolute z-20 w-full h-full bg-white shadow-md top-0 left-0 flex flex-wrap justify-end p-6 opacity-0 hover:opacity-100 transition-3" style={{ placeContent: "flex-start" }}>
                        <FaAward size="20%" className="text-gray-200 mx-3 lg:mx-auto" />
                        <p className="text-lg text-gray-700 mt-10 lg:mt-8 w-full text-start lg:text-center">Contact with <strong className="text-orange-500"> {name} </strong> , {designation}  at SA Uni Hair with {experience}. Email : <strong className="text-orange-500"> juhiunihair.solution@gmail.com </strong> and query related number : <strong className="text-orange-500">+91 8287889123</strong> </p>
                    </div>
        </>
    )
};

export default HoverCardDetails;