import front_face from "./images/front_face.jpg"
import left_face from "./images/left_face.jpg"
import right_face from "./images/right_face.jpg"

const About = () => {
    return (
        <>
            <div className=" flex flex-col col-span-12 pt-10 py-16 relative overflow-hidden pt-16 " style={{backgroundColor:""}}>
                <div className="w-[70%] lg:w-[45%] aspect-square bg-orange-500 absolute z-10 bottom-[-8%] lg:bottom-[-50%] right-[-16%] rounded-full"></div>
                <div className="w-[50%] lg:w-[28%] aspect-square bg-orange-400 absolute z-0 bottom-[-9%] lg:bottom-[-40%] right-[36%] lg:right-[16%] rounded-full"></div>
                <h5 className=" text-xl lg:text-[30px] font-bold w-full text-center"> About <span className="text-orange-500 text-xl lg:text-[30px] font-bold"> Us </span> </h5>

                <p className="text-gray-600 text-md lg:text-[20px] mt-2.5 lg:mt-3.5 min-w-[240px] max-w-[70%] mx-auto">Short detail about our service.</p>

                <div className="grid grid-cols-12 mt-10 relative">

                    <div className="col-span-12 lg:col-span-6 flex justify-center relative bg-gray-100 py-8">
                        <img src={left_face} className="absolute h-[20vh] lg:h-[30vh] p-2 rounded-full bg-white" style={{ transform: "translateX(-100%)" }} alt="" />
                        <img src={right_face} className="absolute h-[20vh] lg:h-[30vh] top-[37vh] p-2 rounded-full bg-white" style={{ transform: "translateX(100%)" }} alt="" />
                        <img src={front_face} className=" h-[50vh] lg:h-[60vh] p-3 rounded-full" style={{ boxShadow: "0 0 0 2px orange" }} alt="" />
                    </div>

                    <div className="col-span-12 lg:col-span-6 flex flex-col py-8 relative z-10 overflow-hidden">
                <div className="w-[50%] lg:w-[28%] aspect-square bg-orange-300 absolute z-10 top-[-14%] lg:top-[-20%] left-[-18%] lg:left-[-10%] rounded-full"></div>

                        <h5 className="#222222  font-semibold w-full text-center lg:text-start text-lg px-8 relative z-10"> We offer the best hair wig treatment <span className="text-orange-500 text-xl font-bold"> in West Bengal </span> </h5>

                        <p className="text-md text-gray-500 mt-6 px-8 py-4 text-start max-w-[90%] h-max min-h-[56vh] ml-2 relative z-10 shadow-md" style={{ background: "rgba(255, 255, 255, 0.233)" }}>
                            <span className="text-md px-8 py-4 text-start min-w-[100%] left-6 top-6 h-max min-h-[56vh] bg-transparent mx-auto absolute z-10 absolute shadow-md" style={{ background: "rgba(255, 255, 255, 0.533)" }}>
                            Hair Patch is a top molded patch made up of normal hair which is utilized to cover baldness. Hair Patch is the best treatment for male baldness. When hair development isn’t conceivable from medications and a man can’t stand to go for hair transplantation (as it is a surgical method), Hair Patch (Non Surgical Method) is the most secure and least demanding method to hide baldness & to have an awesome hair style. We offer the best hair patch treatment in West Bengal.
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
};

export default About;