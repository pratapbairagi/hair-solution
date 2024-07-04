
// import GalleryCard from "./gallery_card/GalleryCard";
import GalleryCard from "./gallery_card/galleryCard"
import { useSelector } from "react-redux";
import { memo, useMemo } from "react";

const Gallery = () => {
    const { galleries, loading, success, error, message } = useSelector(state => state.gallery);

    const gallery = useMemo(() => {
        // if (success) {
            return galleries.map((v, i) => {
                return <GalleryCard values={v} key={i} />
            })
        // }
    }, [galleries])

    return (
        <>
            <div className="flex flex-col col-span-12 mt-12">
                <h5 className=" text-xl font-bold w-full text-center"> Gallery For <span className="text-orange-500 text-xl font-bold"> Hair Styles </span> </h5>

                <p className="text-gray-600 text-md mt-2.5 min-w-[240px] max-w-[70%] mx-auto">Our gallery includes images and videdo.</p>


                <div className="grid grid-cols-12 p-3 mt-8">

                    {gallery}

                </div>
            </div>
        </>
    )
};

export default Gallery;