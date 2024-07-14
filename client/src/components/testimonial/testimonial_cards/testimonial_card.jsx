import { StarIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

const Testimonial_card = ({comment="", client="", service_type="", rating=0}) => {

    const ratingStar = useMemo(() => {
        return Array.from({ length: rating }, (v, i) => {
            return <li key={i} className="w-30px relative">
                <StarIcon className={`star stroke-gray-200 cursor-pointer h-[30px] ${rating >= i + 1 ? "fill-yellow-400 stroke-transparent" : "fill-transparent"} `} />
            </li>
        })
    }, [rating])
    return (
        <>
            <section className=" min-w-[100%] shadow-sm  hover:shadow-md">
                {/* <h5>Testimonial</h5>
                <h6>What our client says about our services</h6> */}

                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-orange-500" viewBox="0 0 24 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"></path>
                        </svg>
                        <blockquote>
                            <p className="text-sm font-medium text-gray-900 lg:text-lg">
                            {comment}
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 capitalize">{client}</div>
                                <div className="pl-3 text-sm font-semibold text-orange-400 capitalize">{service_type}</div>
                            </div>
                        </figcaption>
                        <ul className="w-full flex flex-row justify-center items-center mt-5">
                            <span className="w-[40px] h-[3px] bg-orange-500 mr-3"></span>
                        {ratingStar}
                        <span className="w-[40px] h-[3px] bg-orange-500 ml-3"></span>
                        </ul>
                    </figure>
                </div>
            </section>
        </>
    )
};

export default Testimonial_card;