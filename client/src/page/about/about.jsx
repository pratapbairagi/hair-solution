// import logo from "../../page/authForm/images/pixelcut-export.png";
import logo from "../../components/header/images/logo1.png"
import heroImage from "../../page/gallery/images/gallry_heor_section (1).jpg"
import hairPatches from "./images/hair_patches.jpg";
import hairMaintainance from "./images/about_page_image2.jpg";
import data from "./data.json";
import { useMemo } from "react";



const About = () => {
    
    const aboutProduct = data.about;

    const aboutService = useMemo(() => {
        return data.service.map((v, i) => {
            return <li className="" key={i}>{i + 1 + " " + "." + " "}{v}</li>
        })
    })
    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex-col pt-[12vh]">

                <div className="w-full min-h-[40vh] lg:min-h-[40vh] lg:min-h-[40vh] flex flex-col justify-center items-start relative px-8 lg:px-16">
                    {/* <img src={heroImage} className="absolute left-0 top-0 right-0 h-full w-full object-cover" alt={heroImage} /> */}
                    <h6 className="text-[26px] lg:text-[24px] font-bold relative z-10 text-gray-800 text-start px-1">About Us  </h6>
                    <h6 className="text-[26px] lg:text-[36px] font-bold relative z-10 text-orange-500 text-start -mt-2 border-b-2 border-orange-500 pr-12" > And Our Service </h6>
                    <p className="text-gray-400 font-semibold relative z-10 px-1 mt-6 lg:max-w-[60%] text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur amet obcaecati sapiente soluta quibusdam.</p>
                </div>


                <div className="w-full ml-auto grid grid-cols-12 h-max gap-y-4 lg:gap-y-8 py-10 px-8 lg:px-16">

                    <div className="col-span-12 order-1 lg:col-span-7 h-full lg:min-h-[35vh] flex items-center justify-center lg:px-3">
                        <img src={hairPatches} className="h-full w-full object-cover" alt="" />
                    </div>

                    <div className="flex flex-col order-2 justify-center h-full min-h-[30vh] col-span-12 lg:col-span-5 px-8 py-8 bg-gray-100">
                        <blockquote className="text-[14px] lg:text-[28px] font-bold text-gray-500 text-start border-b-2 border-orange-500 w-max mx-auto pr-8 pb-1 lg:pb-2 h-max"> About <span className="text-orange-500">Us</span>  </blockquote>
                        <p className=" text-[10px] lg:text-[20px] text-justify mx-auto font-normal text-gray-400 mt-3 h-max">
                            {aboutProduct}
                        </p>
                    </div>

                    <div className="col-span-12 order-4 lg:order-3 flex flex-col justify-center h-full min-h-[30vh] px-8 py-8 bg-gray-100">
                        <blockquote className="text-[14px] hidden lg:block lg:text-[28px] font-bold text-gray-500 text-start border-b-2 border-orange-500 w-max mx-auto pr-8 pb-1 lg:pb-2 h-max"> About Our <span className="text-orange-500">Services</span>  </blockquote>
                        <ul className=" text-[10px] lg:text-[20px] text-justify mx-auto font-normal text-gray-400 mt-3 h-max">
                            {aboutService}
                        </ul>
                    </div>

                    <div className="col-span-12 order-3  lg:order-4 h-full lg:min-h-[35vh] flex flex-col items-center justify-center">
                        <blockquote className="text-[14px] lg:hidden lg:text-[28px] font-bold text-gray-500 text-start border-b-2 border-orange-500 w-max mx-auto pr-8 pb-1 lg:pb-2 h-max"> About Our <span className="text-orange-500">Services</span>  </blockquote>

                        <img src={hairMaintainance} className="h-full w-full object-cover" alt="" />
                    </div>


                </div>


            </div>
        </>
    )
};

export default About;