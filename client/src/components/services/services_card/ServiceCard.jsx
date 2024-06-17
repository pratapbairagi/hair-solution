
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { XCircleIcon, PencilSquareIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ServiceCard = ({ values = {}, onClick_toggle = () => "", id = "", activeDetails = {} }) => {

    const navigate = useNavigate()

    const gender = useMemo(() => {
        return activeDetails.gender?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [activeDetails])

    const size = useMemo(() => {
        return activeDetails.sizes?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [activeDetails])

    const color = useMemo(() => {
        return activeDetails.colors?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [activeDetails])

    const type = useMemo(() => {
        return activeDetails.types?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    }, [activeDetails]);


    //  const [isScrollAvail, setIsScrollAvail] = useState({
    //     left : false,
    //     right : false
    //  });
    //  const scrollContainer = useRef(null);


    //  const updateButtons = () => {
    //  let { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
    //     setIsScrollAvail({ left : scrollLeft > 0, right : scrollWidth - clientWidth - scrollLeft > 0});
    //   };

    //  useEffect(()=>{
    //     if(values.title){
    //     scrollContainer.current.addEventListener('scroll', updateButtons);
    //     }

    //     if(values.title && !isScrollAvail.left && !isScrollAvail.right){
    //         updateButtons()
    //     }
    //  },[values])

    return (
        <>
            <div id={id} className={`col-span-12 lg:col-span-6 p-8 h-max max-h-[75vh] overflow-y-auto shadow-sm hover:shadow-lg my-3 relative rounded-md `} style={{scrollbarWidth:"none"}}>

                <div id={`${id}toggle_btn`} className="w-[100%] h-10 flex flex-row justify-end gap-x-6 px-0 hidden">
                <PencilSquareIcon onClick={()=> navigate("/product/add", {state: activeDetails})} className={`w-8 stroke-orange-500 hover:stroke-orange-600 cursor-pointer `} />

                <XCircleIcon  onClick={() => onClick_toggle({ id: id, values: values })} className={`w-8 stroke-orange-500 hover:stroke-orange-600 cursor-pointer `} />
                </div>

                <div className="service_icon">
                    <img src={values.image.url} className="w-16 aspect-square object-cover" alt="" />
                </div>

                <h6 className="service_title text-orange-500 text-md font-bold text-left mt-4 capitalize">{values.title}</h6>

                <p id={id + "p"} className={`service_details text-xs text-gray-500 text-left mt-2 h-max line-clamp-3`}
                    title={values.description}>
                    {values.description}
                </p>
                {activeDetails.title && <div className="w-full flex flex-col h-max gap-y-1">
                    <span className="flex flex-wrap max-w-[100%] overflow-x-auto gap-x-2 w-full mt-4 gap-y-2 text-nowrap">
                      <span className="text-xs text-gray-400">Gender : </span>  {gender}
                    </span>
                    <span className="flex flex-wrap max-w-[100%] overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap">
                    <span className="text-xs text-gray-400">Size : </span> {size}
                    </span>
                    <span className="flex flex-wrap max-w-[100%] overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap">
                    <span className="text-xs text-gray-400">Color : </span> {color}
                    </span>

                    {/* <span className="w-full flex relative">
                       { isScrollAvail.left && activeDetails.type.length > 0 && <ChevronLeftIcon className="w-5 font-bold fill-orange-500 absolute left-0"/>} */}
                    <span  className="flex flex-wrap max-w-[100%] w-max overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap relative " style={{scrollbarWidth:"none"}}>
                    <span className="text-xs text-gray-400">Type : </span> {type}
                    </span>
                       {/* {isScrollAvail.right && activeDetails.type.length > 0 &&  <ChevronRightIcon className="w-5 font-bold fill-orange-500 top-0.5 absolute right-0"/>}
                    </span> */}
                </div>
                }
                <div className="flex w-full justify-start gap-x-5 mt-5">
                    <button onClick={() => onClick_toggle({ id: id, values: values })} className="text-sm bg-orange-400 hover:bg-white hover:text-orange-400 border-orange-400 border text-white px-3 py-0.5 rounded-sm">{activeDetails.title ? "Close" : "See More"}</button>
                    <button onClick={() => {
                        navigate(`/${activeDetails.type_ === "service" ? "booking" : "order"}`, { state: values })
                    }} className="text-sm border border-orange-300 text-orange-300 px-3 py-0.5 rounded-sm">{values.type_ === "product" ? "Order" : "Book"}</button>
                </div>
            </div>
        </>
    )
};

export default memo(ServiceCard);