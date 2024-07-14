
// import GalleryCard from "./gallery_card/GalleryCard";
import GalleryCard from "./gallery_card/galleryCard"
import { useSelector } from "react-redux";
import { useMemo } from "react";
import useToastNotifications from "../../utils/useToastNotification";
import { ToastContainer } from "react-toastify";

const Gallery = () => {
    const { galleries, loading, success, error, message } = useSelector(state => state.gallery);

    const gallery = useMemo(() => {
            return galleries.map((v, i) => {
                return <GalleryCard values={v} key={i} />
            })
    }, [galleries])

    useToastNotifications({loading, success, error, message})

    return (
        <>
            <div className="flex flex-col col-span-12 mt-12 bg-gray-100 py-12">
            <ToastContainer position="bottom-left" />

                <h5 className=" text-xl lg:text-[30px] font-bold w-full text-center"> Gallery For <span className="text-orange-500 text-xl lg:text-[30px] font-bold"> Hair Styles </span> </h5>

                <p className="text-gray-600 text-md lg:text-[20px] mt-2.5 lg:mt-3.5 min-w-[240px] max-w-[70%] mx-auto">Our gallery includes images and videdo.</p>


                <div className="grid grid-cols-12 p-3 mt-8">

                    {gallery}

                </div>
            </div>
        </>
    )
};

export default Gallery;