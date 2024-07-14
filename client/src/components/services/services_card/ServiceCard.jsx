
import { XCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCells from "./featureCells";

const ServiceCard = ({ values = {}, toggle_handler = () => "", setToggleCardSize, toggleCardSize }) => {

    const navigate = useNavigate()

    const gender = useMemo(() => {
        return values.gender?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [values])

    const size = useMemo(() => {
        return values.sizes?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [values])

    const color = useMemo(() => {
        return values.colors?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [values])

    const type = useMemo(() => {
        return values.types?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [values]);

    return (
        <>
            <div className={`col-span-12  p-8 h-max  overflow-y-auto shadow-sm hover:shadow-lg my-3 relative rounded-md `} style={{scrollbarWidth:"none"}}>

                <div className="w-[100%] h-10 flex flex-row justify-end gap-x-6 px-0 hidden">
                <PencilSquareIcon onClick={()=> navigate("/product/add", {state: values})} className={`w-8 stroke-orange-500 hover:stroke-orange-600 cursor-pointer `} />

                <XCircleIcon  onClick={() => toggle_handler(values._id)} className={`w-8 stroke-orange-500 hover:stroke-orange-600 cursor-pointer `} />
                </div>

                <div className="service_icon">
                    <img src={values.image.url} className="h-16 lg:h-20 aspect-square object-cover" alt="" />
                </div>

                <h6 className="service_title text-orange-500 text-md lg:text-[20px] font-bold text-left mt-4 capitalize">{values.title}</h6>

                <p className={`service_details text-xs md:text-md lg:text-[16px] md:leading-[18px] lg:leading-[22px] text-gray-500 text-left mt-2 h-max ${toggleCardSize === values._id ? "line-clamp-20" : "line-clamp-3" } `}
                    title={values.description}>
                    {values.description}
                </p>

                 { toggleCardSize === values._id && <div className={`w-full flex flex-col h-max gap-y-1 md:gap-y-1.5 lg:gap-y-2`}>
                    <FeatureCells title="Gender" value={gender}/>
                    <FeatureCells title="Size" value={size}/>
                    <FeatureCells title="Color" value={color}/>
                    <FeatureCells title="Type" value={type}/>
                </div>}
                
                <div className="flex w-full justify-start gap-x-5 mt-5">
                    <button onClick={() => toggle_handler(values._id)} className="text-sm md:text-md lg:text-lg bg-orange-400 hover:bg-white hover:text-orange-400 border-orange-400 border text-white px-3 py-0.5 rounded-sm">{ toggleCardSize === values._id ? "Close" : "See More"}</button>
                    <button onClick={() => {
                        navigate(`/${values.type_ === "service" ? "booking" : "order"}`, { state: values })
                    }} className="text-sm md:text-md lg:text-lg border border-orange-300 text-orange-300 px-3 py-0.5 rounded-sm">{values.type_ === "product" ? "Order" : "Book"}</button>
                </div>
            </div>
        </>
    )
};

export default memo(ServiceCard);