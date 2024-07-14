
import ServiceCard from "./services_card/ServiceCard";
import "./services.css"
import { memo, useMemo, useState } from "react";
// import { onClick_toggle_handler } from "../../helper/cardToggle_handler";


const Services = ({products, setActiveDetails, activeDetails}) => {
    const [toggleCardSize, setToggleCardSize] = useState(null)

    const toggle_handler = (id) => {
        setToggleCardSize( toggleCardSize === id ? null : id )
    }
    
    const services = useMemo(()=>{
       return products.filter((v)=>{
            return v.type_ === "product"
           }).map((v,i)=>{
                return <ServiceCard
                key={i}
                img={v.image.url}
                title={v.title}
                description={v.description}
                type={v.types}
                gender={v.gender}
                size={v.sizes}
                color={v.colors}
                values={v}
                
                id={v.title+i}
                toggle_handler={toggle_handler}
                toggleCardSize={toggleCardSize}
                setToggleCardSize={setToggleCardSize}
            />
           })
},[products, toggleCardSize])

    const product = useMemo(()=>{
       return products.filter((v)=>{
            return v.type_ === "service"
           }).map((v,i)=>{
                return <ServiceCard
                key={i}
                img={v.image}
                title={v.title}
                description={v.description}
                type={v.type}
                gender={v.gender}
                size={v.size}
                color={v.color}
                values={v}
                
                id={v.title+i}
                toggle_handler={toggle_handler}
                toggleCardSize={toggleCardSize}
                setToggleCardSize={setToggleCardSize}
            />
           })
},[products, toggleCardSize])
    return (
        <>
            <div className=" max-w-[96%] mx-auto flex flex-col col-span-12 px-6 rounded py-6 mt-5 h-max min-h-[80vh] relative overflow-hidden" >
                <div className="w-[70%] lg:w-[45%] aspect-square bg-orange-300 absolute z-10 bottom-[-8%] lg:bottom-[-50%] left-[-16%] rounded-full"></div>
                <div className="w-[50%] lg:w-[28%] aspect-square bg-orange-200 absolute z-0 bottom-[-9%] lg:bottom-[-40%] left-[36%] lg:left-[16%] rounded-full"></div>
                
                <h5 className="#222222 text-xl lg:text-[30px] font-bold w-full text-center">Things You Need <span className="text-[#fa7436] text-xl lg:text-[30px] font-bold"> To Know </span> </h5>

                <p className="text-gray-600 text-md lg:text-[20px] mt-2 lg:mt-3 min-w-[240px] max-w-[70%] mx-auto">We provide other services except hair fixing. click on each servic to know more details.</p>

                <div className="w-full min-w-full max-w-full grid grid-cols-12 gap-x-4 relative z-10" style={{justifyContent:"space-between"}}>

                <h6 className="order-1 lg:order-1 col-span-12 lg:col-span-6 text-gray-600 font-semibold mt-8 border-b-2 border-orange-500 py-2 ml-auto w-[70%] text-start lg:text-[20px]">Our Products</h6>

                <div className={`order-2 lg:order-3 col-span-12 lg:col-span-6 grid grid-cols-12 overflow-x-auto gap-x-4 gap-y-3 mt-6 px-3 relative overflow-hidden`}>
                
                   {services}
                    
                </div>

                <h6 className="order-3 lg:order-2 col-span-12 lg:col-span-6 text-gray-600 font-semibold mt-8 border-b-2 border-orange-500 py-2 ml-auto w-[70%] text-start lg:text-[20px]">Our Services</h6>
                
                <div className={`order-4 lg:order-4  col-span-12 lg:col-span-6 grid grid-cols-12 overflow-x-auto gap-x-4 gap-y-3 mt-6 px-3`} style={{ alignContent:"flex-start"}}>
                   
                {product}

                </div>

                </div>

            </div>
        </>
    )
};

export default Services;