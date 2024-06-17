
import { useEffect } from "react";
import Testimonial_card from "./testimonial_cards/testimonial_card";
// import "./testimonial.css";
// import './testimonialCarousel.css'; // Custom styles

const Testimonial = () => {

    return (
        <div className="col-span-12 h-max flex flex-col py-10 mt-5">

<h5 className="#222222 text-xl font-bold w-full text-center"> Testimonial on our <span className="text-[#fa7436] text-xl font-bold"> Servies </span> </h5>

<p className="text-gray-600 text-md mt-2 min-w-[240px] max-w-[70%] mx-auto">What our clients says and their views </p>

        <div className="h-max w-screen max-w-screen overflow-x-auto py-2 gap-x-2 flex justify-start items-center">
           

            { Array.from({length : 6}, (_,i)=>{
           return <Testimonial_card 
           key={i}
           comment="Landwind is just awesome. It
           contains tons of predesigned components and pages starting from login screen to complex
           dashboard.
           Perfect choice for your next SaaS application."
           
           client="Micheal Gough"
           service_type="New Patch"
           />
             })}

        </div>
        </div>
    );
};

export default Testimonial;
