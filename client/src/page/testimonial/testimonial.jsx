import { useState } from "react";
import "./testimonial.css"
import wig from "./images/wig_using_smiley_face-removebg-preview.png"
import { Rating } from 'react-simple-star-rating'

const Testimonial = () => {
    const slides = [
        {
            title: "one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus. Illo corporis atque quisquam ut. Praesentium iste perspiciatis minus quod!",
            image: wig
        },
        {
            title: "two",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus. Illo corporis atque quisquam ut. Praesentium iste perspiciatis minus quod!",
            image: wig
        },
        {
            title: "three",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus. Illo corporis atque quisquam ut. Praesentium iste perspiciatis minus quod!",
            image: wig
        },
        {
            title: "four",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, accusamus. Illo corporis atque quisquam ut. Praesentium iste perspiciatis minus quod!",
            image: wig
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
      }
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
                        <li className="relative p-1 pb-[7px] shadow-md rounded-full">
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
                        <div className="flex transition-transform ease-in-out duration-500 transform max-w-[600px] mx-auto">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`w-full px-3 lg:px-10 min-h-[40vh] flex-col justify-center items-center h-max ${index === currentSlide ? 'flex' : 'hidden'
                                        }`}
                                >   
                                <div className="h-[10vh] mx-auto flex items-center flex-col">
                                    <img src={slide.image} alt={slide.title} className="h-[100%] " />
                                    <b className="text-[16px] text-gray-600 mt-1">Hair Wig</b>
                                </div>
                                    <div className=" p-4 text-gray-500 mt-6">
                                        <p className="text-sm">{slide.description}</p>
                                        <ul className="text-xl flex gap-x-2 font-bold">
                                        <Rating onClick={handleRating} className="flex" initialValue={rating} />
                                        </ul>
                                    </div>
                                </div>
                            ))}
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