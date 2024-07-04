import { memo } from "react";
import { FaHeadset, FaRegUser, FaAward } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import HoverCardDetails from "./howerCardDetails";
// import { LiaSuitcaseSolid } from "react-icons/lia";
// import { PiSuitcaseSimpleLight } from "react-icons/pi";
// import { MdOutlineDesignServices } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex-wrap py-[15vh] px-4 lg:px-16 justify-between gap-y-8">
                
                <div className="w-[100%] h-[30vh] lg:h-[40vh] flex flex-col justify-center lg:mb-4">
                    <h6 className="w-[100%] lg:w-[60%] text-start text-[35px] lg:text-[3rem] font-bold text-gray-700">Connect <span className="text-orange-500"> With Us </span> </h6>
                    <p className="w-[100%] lg:w-[60%] text-[18px] lg:text-[26px] font-semibold text-gray-400 text-start mt-2" style={{ lineHeight: "140%" }}>Need support or have a question about our product or service ? Our team is ready to help you.</p>
                </div>

                <div className="w-[100%] relative z-20 lg:w-[55%] h-max min-h-[45vh] bg-gray-100 flex flex-wrap p-7" style={{ placeContent: "center" }}>
                  
                    <HoverCardDetails name="senior receptionist" designation="Senior Receptionist" experience="3yrs of experience" email="juhiunihair.solution@gmail.com" number="+91 9876543210"/>
                    <div className="w-[100%] min-h-[30%] h-20">
                        <FaHeadset size="70" className="ml-auto text-gray-400" />
                    </div>
                    <h5 className="w-[100%] h-max text-start text-[30px] font-bold text-gray-600">Office Receptionist</h5>
                    <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>Connect with our office receptionist</blockquote>
                    <button className="w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>
                </div>

                <div className="w-[100%] relative z-20 lg:w-[40%] flex flex-wrap h-max min-h-[45vh] bg-gray-100 p-6 justify-end gap-x-5">

                    <HoverCardDetails name="Mr. Amit Dev Burman" designation="Owner" experience="most experience" email="amitunihair.solution@gmail.com" number="+91 9876543210"/>

                    <div className="w-[100%] min-h-[30%] h-20">
                        <FaHeadset size="70" className="ml-auto text-gray-400" />
                    </div>
                    <h5 className="w-[100%] h-max text-start text-[30px] font-bold text-gray-600">Company Owner</h5>
                    <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>Connect with our company owner</blockquote>
                    <button className="w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>

                </div>

                <div className="w-[100%] relative z-20 lg:w-[31%] flex flex-wrap h-max min-h-[50vh] bg-gray-100 p-6 justify-end gap-x-5">

                    <HoverCardDetails name="Mr. Sumit" designation="Owner" experience="second most experience" email="sumitunihair.solution@gmail.com" number="+91 9876543210"/>

                    <div className="w-[100%] min-h-[30%] h-20">
                        <FaHeadset size="70" className="ml-auto text-gray-400" />
                    </div>
                    <h5 className="w-[100%] h-max text-start text-[30px] font-bold text-gray-600">All Rounder</h5>
                    <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>Connect with Office All Rounder</blockquote>
                    <button className="w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>
                
                </div>

                <div className="w-[100%] relative z-20 lg:w-[31%] flex flex-wrap h-max min-h-[45vh] bg-gray-100 p-6 justify-end gap-x-5">
                    <HoverCardDetails name="Mr. Ramu kaka" designation="maintainance person" experience="1yr of experience" email="ramuunihair.solution@gmail.com" number="+91 9876543210"/>

                    <div className="w-[100%] min-h-[30%] h-20">
                        <FaHeadset size="70" className="ml-auto text-gray-400" />
                    </div>
                    <h5 className="w-[100%] h-max text-start text-[30px] font-bold text-gray-600">Hair Maintainer</h5>
                    <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>Connect with our office receptionist</blockquote>
                    <button className="w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>
                
                </div>

                <div className="w-[100%] relative z-20 lg:w-[31%] flex flex-wrap h-max min-h-[50vh] bg-gray-100 p-6 justify-end gap-x-5">
                    <HoverCardDetails name="Mr. Unknown" designation="All  Rounder" experience="3 of experience" email="allrounderunihair.solution@gmail.com" number="+91 9876543210"/>

                    <div className="w-[100%] min-h-[30%] h-20">
                        <FaHeadset size="70" className="ml-auto text-gray-400" />
                    </div>
                    <h5 className="w-[100%] h-max text-start text-[30px] font-bold text-gray-600">Senior Service Man</h5>
                    <blockquote className="text-[20px] w-[100%] text-start font-semibold text-gray-400 mt-2" style={{ lineHeight: "130%" }}>Connect Our with Service Man</blockquote>
                    <button className="w-max text-sm py-1.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-gray-100 mr-auto mt-5 font-semibold h-max">Details</button>
                
                </div>
            </div>
        </>
    )
};

export default memo(Contact);