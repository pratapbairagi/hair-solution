
import { useMemo } from "react";
import heroSectionImage from "./images/gallry_heor_section (1).jpg";
import { useDispatch, useSelector } from "react-redux";
import { galleriesDetails } from "../../Redux/gallerySlice/gallerySlice";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Gallery = () => {
    const { galleries } = useSelector(state => state.gallery);
    const dispatch = useDispatch();

    useMemo(() => {
        dispatch(galleriesDetails())
    }, []);

    const imageGalley = useMemo(()=>{
       return galleries.map((v, i) => {
            return <div key={i} className="col-span-6 lg:shadow-sm md:col-span-4 lg:col-span-3 h-max min-h-full min-full flex flex-wrap p-4">
                <img src={v.image.url} className="h-[60%]" alt={v.url} />
                <blockquote className="w-full text-wrap text-left text-[12px] lg:text-[18px] font-semibold mt-2 text-gray-500 capitalize mb-6" style={{ lineHeight: "135%" }}>{v.title}</blockquote>

                <b className="w-max max-w-[40%] text-wrap text-[10px] lg:text-[16px] text-start capitalize text-orange-500" style={{ lineHeight: "130%" }}>{v.branch}</b>
                <ul className="w-[60%] max-w-[60%] flex flex-wrap justify-end  ml-auto">
                    {v.social.map((s, si) => {
                        return <li key={si} className="">
                            {
                                s.name.toLowerCase() === "whatsapp" ? <a href={s.link} className=""><FaWhatsapp size="25" /></a>
                                    :
                                    s.name.toLowerCase() === "facebook" ? <a href={s.link}> <FaFacebook /> </a>
                                        :
                                        s.name.toLowerCase() === "instagram" ? <a href={s.link}> <FaInstagram /> </a>
                                            : ""
                            }
                        </li>
                    })
                    }
                </ul>
            </div>
        })
    },[galleries])

    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex flex-col">
                <div className="w-full h-[30vh] lg:h-[35vh] mt-[11vh] flex flex-col justify-center px-3 lg:px-16 items-center pt-6 relative z-10" style={{ placeContent: "flex-start" }}>
                    <img src={heroSectionImage} className="absolute left-0 right-0 top-0 h-full w-full object-cover opacity-80" alt={heroSectionImage} />
                    <h5 className="text-[30px] lg:text-[36px] font-bold text-gray-100 w-full relative z-20">Gallery</h5>
                    <blockquote className="w-full text-center text-gray-200 text-[]18px lg:text-[20px] font-semibold text-center mx-auto max-w-[100%] lg:max-w-[70%] z-20">Gallery for our different hair styles and wigs/patch for different face structures. Explore all hair styles colors and size.</blockquote>
                </div>

                <div className="w-full grid-cols-12 h-max">

                    <div className="col-span-12 py-8 lg:py-10 flex flex-col px-4 lg:px-16">
                        <h6 className="text-[24px] w-max mr-auto font-semibold text-gray-700">Our Photo <span className="text-orange-500 py-2 border-b-2 border-orange-500 pr-12"> Gallery </span> </h6>

                        <div className="w-full h-max grid grid-cols-12 mt-10">
                            {imageGalley}
                        </div>

                        <h6 className="text-[24px] w-max mr-auto font-semibold text-gray-700 mt-16">Our Videos <span className="text-orange-500 py-2 border-b-2 border-orange-500 pr-12"> Gallery </span> </h6>

                        <div className="col-span-12 flex flex-wrap py-4 gap-y-8 lg:gap-y-10 px-2 shadow-sm mt-7 h-max">
                            <iframe className="min-w-[50%] lg:min-w-[100%] min-h-[30vh] lg:min-h-[70vh]"
                                src="https://www.youtube.com/embed/QbQ8RY6JwpA?si=ThpyZziMMwgLtOhe?controls=0?autoplay=1&controls=1">
                            </iframe>

                            <iframe className="min-w-[50%] lg:min-w-[100%] min-h-[30vh] lg:min-h-[70vh]"
                                src="https://www.youtube.com/embed/-wnCWPLINlw?si=Bm6p5djYQ1NK3p04?controls=0?autoplay=1&controls=1">
                            </iframe>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
};
export default Gallery;