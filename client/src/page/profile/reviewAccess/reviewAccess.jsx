import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getReviews } from "../../../Redux/reviewSlice/reviewSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import ReviewTable from "../../../components/table/reviewTable";
import useToastNotifications from "../../../utils/useToastNotification";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ReviewAccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { reviews, totalReviewsNumber, loading, success, error, message } = useSelector(state=> state.review)
    var [search, setSearch] = useState({ searchString: "", pageNo: 1 })

    useEffect(()=>{
        dispatch(getReviews({ searchString: search.searchString, page: search.pageNo }))
    },[])

    const search_submit_fun = () => {
        dispatch(getReviews({ searchString: search.searchString, page: search.pageNo }));
    }

    const searchResultcancel_fun = () => {
        setSearch({ ...search, searchString: "" })
        dispatch(getReviews({ searchString: "", page: search.pageNo }));
    }

    const deleteDataHandler = ({ id, staffRole }) => {
        // dispatch(clientDelete({ id }))
    }

    const selectDataToUpdate = (value ) => {
        // navigate("/profile/edit", {state : { value, type : "staff", action : "update" } })
    }

    const paginationButtons = useMemo(() => {
        if (totalReviewsNumber > 0) {
            let totalBtns = Math.ceil(totalReviewsNumber / 10)
            return Array.from({ length: totalBtns }, (_, i) => {
                return <li key={i} onClick={() => setSearch({ ...search, pageNo: search.pageNo = i + 1 })} className={` py-1 px-2 rounded-sm ${search.pageNo === i + 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>{i + 1}</li>
            })
        }
    }, [totalReviewsNumber])

    useToastNotifications({ loading, success, error, message })

    return (
        <>
            <div className="w-full px-2 pt-10 lg:p-8 h-max mt-14 border">
                <ToastContainer
                    position="bottom-left"
                    autoClose="4000"
                />
                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start">
                    Reviews
                    {/* <button onClick={() => selectDataToUpdate({ value: null, type: "client", action: "add" })} className="bg-orange-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm hover:bg-orange-500 ml-auto">Add</button> */}
                    <button onClick={() => {
                        navigate(-1)
                    }} className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-auto">Back</button>
                </h5>
                <div className="w-full h-max flex flex-row justify-start lg:justify-end py-3 px-2 lg:px-4" >
                    <fieldset className="min-w-[200px] flex flex-row w-[100%] max-w-[360px] h-[5.2vh] lg:h-[5.7vh] shadow-sm">

                        <input value={search.searchString} onChange={(e) => setSearch({ ...search, searchString: e.target.value })} type="text" placeholder="Enter name or number..." className="px-2 text-sm text-gray-500 h-[100%] w-full outline-0" name="" id="search" />
                        <button onClick={searchResultcancel_fun} className="text-sm text-blue-400 ml-auto font-semibold lg:text-md h-[100%] aspect-square">
                            <XMarkIcon className="h-[60%]" />
                        </button>
                        <button onClick={() => search_submit_fun()} className="text-sm text-white ml-auto font-semibold lg:text-md bg-blue-400 h-[100%] w-[100px]">Search</button>
                    </fieldset>
                </div>
                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div>
                    :
                    <>
                <ReviewTable data={reviews} other={{ loading, success, message, error }} accessType="review" selectDataToUpdate={selectDataToUpdate} deleteDataHandler={deleteDataHandler}/>
                        <ul className="flex gap-x-1 flex items-center w-full py-2 text-sm text-gray-400 font-semibold pl-2 px-3 lg:pl-10" style={{ left: "0", position: "sticky", bottom: "0" }}>
                            <span className="text-sm text-gray-300 mr-2">Pages :</span>
                            {paginationButtons}
                            <span className="text-sm text-gray-300 ml-auto">Total Clients : {totalReviewsNumber}</span>
                        </ul>
                    </>
                }
            </div>
        </>
    )
}

export default ReviewAccess