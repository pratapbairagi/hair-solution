import { useMemo, useState } from "react";
import "./testimonial.css"
import { StarIcon } from "@heroicons/react/24/outline";
import moment from "moment-timezone"

const Testimonial = ({ reviews }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + reviews.length) % reviews.length);
    };

    const testimonialCard = useMemo(() => {
        return reviews.map((slide, index) => {
            return <div
                key={index}
                className={`w-full px-3 lg:px-10 min-h-[50vh] flex-col justify-center items-center h-max ${index === currentSlide ? 'flex' : 'hidden'
                    }`}
            >
                <div className="h-[30vh] mr-auto px-4 flex items-center flex-col w-full">
                    <b className="text-[20px] text-gray-400 mt-1 capitalize text-start mr-auto border-b-2 border-orange-500 pr-12">{slide.entityName}</b>
                    <img src={slide.entityImage} className="h-[50%] mt-4 mr-auto border" alt={"product or service image"} />
                    <b className="text-[15px] text-gray-600 w-full flex justify-between items-end mt-2 capitalize">
                        <span className="text-start">{slide.clientName}</span>
                        <span className="text-[12px] text-orange-300 text-end" >{moment(slide.createdAt).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")}</span>
                    </b>
                </div>
                <div className=" p-4 text-gray-500 mt-6 border-t w-full">
                    {slide.reviewText?.length > 0 ? <p className="text-sm min-h-[24vh] text-justify flex items-center flex-wrap justify-center">{slide.reviewText}</p>
                        :
                        <p className="text-sm min-h-[24vh] flex justify-center items-center text-[26px]">No Comment</p>
                    }
                    <ul className="text-xl flex gap-x-2 mt-4 font-bold w-full flex flex-row justify-center items-center">
                        {Array.from({ length: slide.rating }, (v, i) => {
                            return <li key={i} className="w-[30px] relative">
                                <StarIcon className={`star stroke-gray-200 cursor-pointer h-[25px] ${slide.rating >= i + 1 ? "fill-yellow-400 stroke-transparent" : "fill-transparent"} `} />
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        })
    }, [reviews, currentSlide])

    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex-col">

                <div className="w-full flex flex-col mt-16 h-max min-h-[55vh] justify-center items-center px-2 lg:px-3">
                    <h6 className="text-[32px] font-bold text-gray-700">What Clients Says</h6>
                    <p className="text-[20px] font-semibold text-gray-500 lg:max-w-[500px] mt-2">What our clients say about our service and products. Clietns are men and women both.</p>

                    <ul className="flex justify-center items-center gap-x-2 lg:gap-x-4 mt-6">
                        <li >
                            <span className="p-1 shadow-md rounded-full aspect-square bg-gray-100 text-[24px] lg:text-[32px]">&#128557;</span>
                        </li>
                        <li>
                            <span className="p-1 shadow-md rounded-full aspect-square bg-gray-100 text-[36px] lg:text-[42px]">&#128542;</span>
                        </li>
                        <li className="relative p-1 pb-[2px] shadow-md rounded-full">
                            <span className="p-1 bg-green-500  rounded-full aspect-square bg-gray-100 text-[48px] lg:text-[54px]">&#128529;</span>
                            <span className="absolute text-xs font-semibold text-gray-100 px-2 py-1 rounded-full -bottom-[20px] bg-gray-800 w-[76px]" style={{ left: "calc( ( 100% - 76px ) / 2)" }}>Medium</span>
                        </li>
                        <li>
                            <span className="p-1 shadow-md rounded-full aspect-square bg-gray-100 text-[36px] lg:text-[42px]">&#128522;</span>
                        </li>
                        <li>
                            <span className="p-1 shadow-md rounded-full aspect-square bg-gray-100 text-[24px] lg:text-[32px]">&#129392;</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full grid grid-cols-12 min-w-[100%] justify-between p-3 mt-6 lg:mt-10 max-w-[100%] h-max min-h-[40vh]">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[20vh] h-full px-3">
                        <h6 className="text-[18px] lg:text-[24px] text-gray-700 font-semibold">On Our Services</h6>
                        <p className="text-[12px] lg:text-[16px] mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos consequatur amet, odio laboriosam perferendis temporibus deleniti quaerat doloremque quod!</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[20vh] h-full px-3">
                        <h6 className="text-[18px] lg:text-[24px] text-gray-700 font-semibold">On Our Products</h6>
                        <p className="text-[12px] lg:text-[16px] mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos consequatur amet, odio laboriosam perferendis temporibus deleniti quaerat doloremque quod!</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[20vh] h-full px-3">
                        <h6 className="text-[18px] lg:text-[24px] text-gray-700 font-semibold">On Other Things</h6>
                        <p className="text-[12px] lg:text-[16px] mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos consequatur amet, odio laboriosam perferendis temporibus deleniti quaerat doloremque quod!</p>
                    </div>
                </div>

                <div className="w-full mx-auto lg:max-w-[800px] h-max min-h-[50vh] py-10">

                    <div className="relative overflow-hidden w-full max-w-screen-lg mx-auto">
                        <div className="flex transition-transform ease-in-out duration-500 transform max-w-[600px] mx-auto min-h-[60vh]">
                            {testimonialCard}
                        </div>
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-500 text-2xl px-4 py-2 rounded-l-md z-10"
                            onClick={prevSlide}
                        >
                            &#10094;
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-500 text-2xl px-4 py-2 rounded-r-md z-10"
                            onClick={nextSlide}
                        >
                            &#10095;
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
};

export default Testimonial;