
import { useMemo } from "react";
import Testimonial_card from "./testimonial_cards/testimonial_card";

const Testimonial = ({ reviews }) => {

    const review = useMemo(() => {
        return reviews.map((v, i) => {
            return <Testimonial_card
                key={v._id}
                comment={v.reviewText}
                client={v.clientName}
                service_type={v.entityName}
                rating={v.rating}
            />
        })
    }, [reviews])
    return (
        <div className="col-span-12 h-max flex flex-col py-10 mt-5">

            <h5 className="#222222 text-xl lg:text-[30px] font-bold w-full text-center"> Testimonial on our <span className="text-[#fa7436] text-xl lg:text-[30px] font-bold"> Servies </span> </h5>

            <p className="text-gray-600 text-md lg:text-[20px] mt-2 lg:mt-3 min-w-[240px] max-w-[70%] mx-auto">What our clients says and their views </p>

            <div className="h-max w-screen max-w-screen overflow-x-auto py-2 gap-x-2 flex justify-start items-center">


                {review}

            </div>
        </div>
    );
};

export default Testimonial;
