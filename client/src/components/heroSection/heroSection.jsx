import hairPatch1 from "./hair_patch-removebg_preview.png";
// import hairPatch2 from "./hair_patch_half_hair.png";
import hairPatch3 from "./hair_patch_half_bald.png";
// import hair1_ from "./patch1_.png";
import hair2_ from "./patch2_.png";
import hair3_ from "./patch3_.png";
import hair4_ from "./patch4_.png";

const HeroSection = () => {
    return (
        <div className="bg-white col-span-12 flex flex-col gap-0 ">
            <div className="mx-auto max-w-7xl py-0 pt-10 pb-12  lg:py-10 sm:px-6 lg:px-8 my-0">
                <div className="relative isolate overflow-hidden px-6 py-10 lg:py-8 sm:rounded-3xl sm:px-16 grid grid-cols-12 lg:gap-x-24 lg:px-28 min-h-[70vh] lg:min-h-none shadow-lg">

                    <img src={hairPatch3} className="block lg:hidden absolute left-0 h-[65vh] bottom-0 z-20 opacity-30" alt="" />
                    {/* <img src={hairPatch2} className="block lg:hidden absolute right-0 h-[75vh] bottom-0 z-0 opacity-20" alt="" /> */}

                    <ul className="flex lg:hidden gap-x-2 absolute left-[50%] top-4 z-10" style={{transform:"translate(-50%, 0)"}}>
                        <li className="w-16 border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair2_} className="w-[100%]" alt="" />
                        </li>
                        {/* <li className="w-16">
                            <img src={hair1_} className="w-[100%]" alt="" />
                        </li> */}
                        <li className="w-16 border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair3_} className="w-[100%]" alt="" />
                        </li>
                        <li className="w-16 border border-2 border-orange-500 aspect-square rounded-full overflow-hidden">
                            <img src={hair4_} className="w-[100%]" alt="" />
                        </li>
                        
                    </ul>

                    {/* <div className="absolute -right-10 hidden lg:block rounded-full min-w-[50vw] aspect-square z-10" style={{boxShadow:"-3px 6px white, -30px 3px gray",borderBottomRightRadius:"0", borderTopRightRadius:"0" }}></div> */}
                    {/* <div className="absolute left-[55%] -bottom-10 hidden lg:block roun min-h-[100%] rounded-full aspect-square z-10" style={{boxShadow:" -100px 3px orange", borderBottomRightRadius:"0", borderTopRightRadius:"0", transform:"rotateZ(-12deg)" }}></div> */}
                    <div className="h-[150%] w-20 bg-orange-500 absolute left-[50%] -top-24 hidden lg:block" style={{transform:"rotate(30deg)"}}></div>
                    <div className="h-[150%] w-10 bg-orange-500 absolute left-[60%] -top-24 hidden lg:block" style={{transform:"rotate(30deg)"}}></div>
                    <div className="h-[150%] w-32 bg-orange-500 absolute -left-[16%] -top-16 hidden lg:block" style={{transform:"rotate(30deg)"}}></div>



                    {/* <div className="h-[160%] w-24 bg-orange-500 absolute -right-[58%] -bottom-[32%] block lg:hidden" style={{transform:"rotate(45deg)"}}></div> */}
                    {/* <div className="h-[160%] w-16 bg-orange-500 absolute -left-[28%] -top-[34%] block lg:hidden z-0" style={{transform:"rotate(45deg)"}}></div>
                    <div className="h-[160%] w-4 bg-orange-500 absolute -left-[4%] -top-[30%] block lg:hidden z-0" style={{transform:"rotate(45deg)"}}></div> */}
                    
                    <div className="absolute z-10 h-full w-[100%] top-0 block lg:hidden" style={{borderBottomRightRadius:"200px", boxShadow:"30px 0 #ffa515, 70px 0 #fb8a12, 130px 0 #f47b11, 170px 0 red"}}></div>                   
                    
                    <div className="mx-auto min-h-[60vh] lg:min-h-none lg:mt-0 order-2 lg:order-1 col-span-12 lg:col-span-6 max-w-md text-center lg:mx-0 flex flex-col justify-center lg:flex-auto lg:py-28 lg:text-left relative z-10 lg:static">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-8 lg:mt-0">
                            <span className="text-orange-500"> NO PAIN </span>
                            <br />
                            <span className="text-gray-900"> HAIR SOLUTION </span>
                        </h2>
                        <p className="mt-6 text-md lg:text-lg leading-6 lg:leading-8 text-gray-400">
                        Step into a New Style with Confidence. Try On Our Wigs and Find Your Perfect Match with Our Premium Hair Wigs. Long-Lasting Beauty You Can Rely On!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
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
                    <div className="relative hidden lg:flex items-center order-1 lg:order-2 justify-end mt-1 h-max aspect-square lg:mt-0 col-span-12 lg:col-span-6 overflow-hidden">
                        <img
                            className=" left-0 top-0 h-full max-w-none  rounded-md ring-1 ring-white/10  relative z-20"
                            src={hairPatch1}
                            alt="App screenshot"
                            style={{ aspectRatio: "1/1" }}
                        />
                    </div>
                </div>
            </div>

               <div className="absolute bottom-[6%] lg:bottom-[4%] right-[5%] min-w-[90%] lg:min-w-[30%] lg:right-[6%] min-h-[8vh] lg:min-h-[10vh] z-10 rounded-md shadow-lg bg-white flex items-center justify-center" >
                <button  className="w-[50%] min-h-[8vh] lg:min-h-[10vh] font-semibold bg-orange-500 text-gray-100 rounded-md">Demo Video</button>
                <button  className="w-[50%] min-h-[8vh] lg:min-h-[10vh] text-orange-500 font-semibold rounded-md">Book Trail</button>
               </div>

        </div>
    )
};

export default HeroSection;