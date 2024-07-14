

import { useEffect } from "react";
// import Table from "../../../components/table/table";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { galleriesDetails, galleryDelete } from "../../../Redux/gallerySlice/gallerySlice";
import Table from "../../../components/table/table"


const GalleryAccess = () => {
    const {galleries, loading, success, message, error} = useSelector(state=> state.gallery);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let x = getGalleryfun()
        if (x === 0) {
            x()
        }
    }, []);

    function getGalleryfun() {
        let x = 0;
        return function () {
            x++
            dispatch(galleriesDetails());
            return x
        }
    }

    const deleteDataHandler = ({id}) => {
        dispatch(galleryDelete({id}))
    }

    const selectDataToUpdate = ({value}) => {
        navigate("/gallery/update", {state : value  })
    }
    return (
        <>
            <div className="w-full px-2 pt-10 lg:p-8 h-max mt-14 border">
                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start">
                    Gallery
                    <NavLink to="/gallery/add" className="bg-orange-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm hover:bg-orange-500 ml-auto">Add</NavLink>
                    <button onClick={()=> navigate(-1) } className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-4">Back</button>
                </h5>
                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div>
                    :
                    <>
                {/* <Suspense fallback={<h6>...</h6>}> */}
                <Table data={galleries} other={{loading, success, message, error}} accessType="gallery" selectDataToUpdate={selectDataToUpdate} deleteDataHandler={deleteDataHandler} />
                {/* </Suspense> */}
                </>
                }
            </div>
        </>
    )
};

export default GalleryAccess;