import { useMemo } from "react";

const ProductAndServicePageLayout = ({subheading="", heading="", heroImg="", mainItemsServices=[], productOrService=null,type=""}) => {
    
    const items = useMemo(()=>{
        return mainItemsServices.map((v,i)=>{
            return <li key={i} className={`px-8 py-1.5 rounded-sm lg:text-lg text-white font-semibold ${v.color}`}>{v.value}</li>
        })
    },[mainItemsServices])

    return (
        <>
        <div className="w-full h-max min-h-[100vh] pt-[12vh] grid grid-cols-12 lg:px-20" style={{placeContent:"flex-start"}}>
         
         <div className="col-span-12 h-[50vh] lg:h-[45vh] flex flex-wrap lg:justify-center bg-gray-100" >
            
            <div className="details h-[40%] lg:h-full w-[100%] lg:w-[45%] flex px-7 lg:px-0 lg:justify-center items-center lg:translate-x-[10%]">
                <h5 className="text-2xl lg:text-4xl text-gray-700 font-bold text-start lg:pl-[10%] flex flex-col gap-y-1 lg:gap-y-2">
                    <span className="text-sm lg:text-lg font-semibold text-orange-500 h-max w-[90%] pl-1" >
                    {subheading}
                    </span>
                    <span className="h-max w-max pr-14 border-b-2 pb-2 border-gray-200" >
                        {heading}
                    </span>
                    </h5>
            </div>
            <div className="files_content w-[100%] lg:w-[45%] h-[60%] lg:h-full flex lg:translate-x-[-10%]">
                    <img src={heroImg} className="h-full mx-auto lg:mx-0" alt="showing hiar wig on bald head" />
            </div>
         </div>

         <div className="col-span-12 flex flex-col mt-8 px-6 lg:px-4">
            <h6 className="text-start lg:text-2xl font-bold text-gray-500 capitalize" >Main {type}</h6>
            <ul className="flex mt-2 gap-x-2 max-w-[100%] overflow-x-auto">
              {items}
            </ul>
         </div>

         <div className="col-span-12 grid grid-cols-12 mt-8 px-6 lg:px-4">
        {productOrService}

         </div>

        </div>
        </>
    )
};

export default ProductAndServicePageLayout