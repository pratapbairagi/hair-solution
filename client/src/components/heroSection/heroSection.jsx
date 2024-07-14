import hairPatch1 from "./hair_patch-removebg_preview.png";
// import hairPatch2 from "./hair_patch_half_hair.png";
import hairPatch3 from "./hair_patch_half_bald.png";
// import hair1_ from "./patch1_.png";
import hair2_ from "./patch2_.png";
import hair3_ from "./patch3_.png";
import hair4_ from "./patch4_.png";
import svg from "./WhatsApp_Image_2024-07-12_at_03.03.02_657279ac-removebg-preview.png"
import back from "./WhatsApp Image 2024-07-12 at 04.37.12_23a6cc70.jpg"
const HeroSection = () => {
    return (
        <div className=" col-span-12 flex flex-col gap-0 relative lg:bg-gray-100">
            
            <div className="mx-auto max-w-7xl py-0 pt-10  my-0 ">
                <div className="relative isolate overflow-hidden px-6 py-10 lg:py-0 sm:rounded-3xl sm:px-16 grid grid-cols-12 lg:gap-x-24 lg:px-0 lg:pl-10 min-h-[70vh] lg:min-h-none">

                    <img src={hairPatch3} className="block lg:hidden absolute left-0 h-[65vh] bottom-0 z-20 opacity-30" alt="" />

                    <ul className="flex lg:hidden gap-x-2 absolute left-[50%] top-4 z-10" style={{ transform: "translate(-50%, 0)" }}>
                        <li className="w-max border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair2_} className="h-16 aspect-square" alt="" />
                        </li>

                        <li className="w-max border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair3_} className="h-16 aspect-square" alt="" />
                        </li>
                        <li className="w-max border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair4_} className="h-16 aspect-square" alt="" />
                        </li>

                    </ul>


                    <div className="absolute z-10 h-full w-[100%] top-0 block lg:hidden" style={{ borderBottomRightRadius: "200px", boxShadow: "30px 0 #ffa515, 70px 0 #fb8a12, 130px 0 #f47b11, 170px 0 red" }}></div>

                    <div className="mx-auto min-h-[60vh] lg:min-h-none lg:mt-0 order-2 lg:order-1 col-span-12 lg:col-span-5 max-w-md text-center lg:mx-0 flex flex-col justify-center lg:flex-auto lg:py-28 lg:text-left relative z-10 lg:static lg:pl-14">
                        {/* <img src={svg} className="absolute z-0 hidden lg:block h-[60%] opacity-80 right-[50%]" style={{transform:"rotateY(180deg)"}}  alt="" /> */}
                        <h2 className="text-3xl z-10 font-bold tracking-tight text-white sm:text-4xl mt-8 lg:mt-0">
                            <span className="text-orange-500"> NO PAIN </span>
                            <br />
                            <span className="text-gray-900"> HAIR SOLUTION </span>
                        </h2>
                        <p className="mt-6 z-10 text-md lg:text-lg leading-6 lg:leading-7 lg:font-semibold text-gray-400">
                            Step into a New Style with Confidence. Try On Our Wigs and Find Your Perfect Match with Our Premium Hair Wigs. Long-Lasting Beauty You Can Rely On!
                        </p>
                        <div className="mt-10 z-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <button
                                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-700 hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </button>
                            <button className="text-sm font-semibold leading-6 text-red-400">
                                Learn more <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:flex items-center order-1 lg:order-2 justify-end h-full lg:mt-0 col-span-12 lg:col-span-7 overflow-hidden lg:pl-12">
                        <div className="min-w-[300px] min-h-[80%] flex flex-wrap justify-center items-center top-0 left-4 bg-white absolute z-20 rounded-b-full">
                        </div>
                        <h6 className="absolute left-0 top-[12%] py-2 z-20 text-white text-[12px] font-semibold w-[110px] rounded-full bg-orange-400">Custom Hair</h6>
                        <h6 className="absolute left-2 bottom-[19%] py-2 z-20 text-white text-[12px] font-semibold w-[110px] rounded-full bg-orange-400">Hair Maintain</h6>
                        <h6 className="absolute left-[37%] top-[20%] py-2 z-20 text-white text-[12px] font-semibold w-[110px] rounded-full bg-orange-400">Hair Cutting</h6>

                        <img
                            className=" left-0 top-[1%] w-full max-w-none rounded-md ring-1 ring-white/10  relative z-20 mr-10"
                            src={svg}
                            alt="App screenshot"
                        />

                        <div className="w-[30%] aspect-square top-[35%] right-[3%] bg-white rounded-full absolute z-10"></div>

                        <div className="absolute bottom-[6%] lg:bottom-[4%] xl:bottom-[5%] right-[5%] w-[400px] right-[14%] min-h-[8vh] z-20 rounded-md shadow-lg bg-white flex items-center justify-center p-1" >
                            <button className="w-[50%] min-h-[8vh] lg:min-h-[8vh] font-semibold bg-orange-500 text-gray-100 rounded-md">Demo Video</button>
                            <button className="w-[50%] min-h-[8vh] lg:min-h-[8vh] text-orange-500 font-semibold rounded-md">Book Trail</button>
                        </div>


                    </div>
                </div>
            </div>

            <div className="absolute lg:hidden bottom-[-3%] lg:bottom-[5%] right-[5%] min-w-[90%] lg:min-w-[30%] lg:right-[6%] min-h-[8vh] lg:min-h-[10vh] z-10 rounded-md shadow-lg bg-white flex items-center justify-center" >
                <button className="w-[50%] min-h-[8vh] lg:min-h-[10vh] font-semibold bg-orange-500 text-gray-100 rounded-md">Demo Video</button>
                <button className="w-[50%] min-h-[8vh] lg:min-h-[10vh] text-orange-500 font-semibold rounded-md">Book Trail</button>
            </div>

        </div>
    )
};

export default HeroSection;