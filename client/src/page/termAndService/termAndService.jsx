import tncImage from "./images/tnc_big_image.png"
import data from "./data.json"
import { useMemo } from "react";

const TermAndService = () => {
//     const productTNC = useMemo(()=> {
//            return data.filter((v,i)=>{
//                return v.title === "product"
//             }).map((product,productI)=>{
//                return product.points.map((pro, proI)=>{
//                     return <li key={proI}>{pro.heading}</li>
//                 })
//             })
//     },[data])
const product = useMemo(()=>{
   return data.filter((v,i)=>{
        return v.type === "product"
     }).map((v,i)=>{
        return v.points.map((vv,ii)=>{
             return <li className=" text-start capitalization font-semibold flex flex-col">
                <span className="text-[16px] text-orange-500 w-max py-1 border-b-2 border-orange-500 mb-2 mt-3"> {vv.heading} </span>
                 {vv.more.map((vvv,iii)=>{
                     return <span className="text-[14px] mt-1.5 text-gray-600">{iii+1+"."+" "}{" "+vvv}</span>
                 })}
                 </li>
         })
     })
     
},[data])

const service = useMemo(()=>{
   return data.filter((v,i)=>{
        return v.type === "service"
     }).map((v,i)=>{
        return v.points.map((vv,ii)=>{
             return <li className=" text-end capitalization font-semibold flex flex-col">
                <span className="text-[16px] ml-auto text-orange-500 w-max py-1 border-b-2 border-orange-500 mb-2 mt-3"> {vv.heading} </span>
                 {vv.more.map((vvv,iii)=>{
                     return <span className="text-[14px] mt-1.5 text-gray-600">{iii+1+"."+" "}{" "+vvv}</span>
                 })}
                 </li>
         })
     })
},[data])
    return(
        <div className="w-full my-[10vh] lg:my-0 h-max min-h-[82vh] flex flex-wrap">
            <div className=" order-2 lg:order-1   flex flex-col justify-center items-end w-[190%] lg:w-[50%] min-h-[45vh] lg:min-h-[100vh] pt-8 lg:pt-14">
                <h5 className="text-[2rem] font-extrabold text-gray-700 w-[90%] text-center mx-auto lg:ml-auto lg:mx-0 lg:text-start">TERMS AND</h5>
                <h5 className="text-[4rem] font-extrabold text-orange-500 w-[90%] -mt-6 text-center mx-auto lg:ml-auto lg:mx-0 lg:text-start">SERVICES</h5>

                <p className="w-[90%] text-center lg:text-start mx-auto lg:ml-auto lg:mx-0 text-wrap mt-5 text-[20px] text-gray-500 font-semibold">All the term and services are related to products and services are clearly written point wise below this paragraph. Please read carefully before take service and book order.</p>
            
            <div className="w-[90%] mx-auto lg:mx-0 flex flex-row justify-center lg:justify-start mt-8">
            <button className="text-[24px] font-normal bg-blue-500 px-6 py-1 text-white rounded-full hover:bg-blue-600">Read More   </button>
            </div>
            
            </div>

            <div className=" order-1 lg:order-2  flex flex-col w-[100%] lg:w-[50%] min-h-[40vh] lg:min-h-[100vh] pt-4 lg:pt-14 flex items-center justify-center">
                <img src={tncImage} className="h-[90%] lg:h-[80%] w-auto object-contain" alt={tncImage} />
            </div>

            <div className=" order-3 w-[100%] h-max min-h-[80vh] relative overflow-hidden flex flex-col py-14 px-8 lg:px-16">
                <div className="absolute z-10 w-[25%] aspect-square bg-gray-100 opacity-70 rounded-full -top-[20%] -left-[5%]"></div>
                <div className="absolute z-10 w-[18%] aspect-square bg-gray-100 opacity-30 rounded-full -top-[9%] left-[8%]"></div>

                <h5 className="w-[90%] text-start text-orange-500 text-[28px] font-semibold py-2 relative z-20">Products</h5>

                <ul className="w-[90%] lg:w-[60%] flex flex-col mr-auto relative z-20">
                {product}
                </ul>


                <h5 className="w-[90%] lg:w-[60%] text-end ml-auto text-orange-500 text-[28px] font-semibold py-2 relative z-20 mt-10">Service</h5>
                <ul className="w-[90%] lg:w-[60%] flex flex-col ml-auto relative z-20">
                { service }
                </ul>

            </div>

        </div>
)
};

export default TermAndService;