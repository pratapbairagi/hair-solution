import { StarIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment-timezone';
import { useDispatch, useSelector } from "react-redux";
import { addUpdatereview } from "../../Redux/reviewSlice/reviewSlice";




const WriteReview = () => {
    const dispatch = useDispatch();
    const { loading, success} = useSelector(state => state.review)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const clientId = queryParams.get('clientId');
    const entityId = queryParams.get('entityId');
    const entityType = queryParams.get('entityType');

    const entityName = queryParams.get('entityName');
    const entityImage = queryParams.get('entityImage');
    const entityTakenDate = queryParams.get('entityTakenDate');
    const entityAmount = queryParams.get('entityAmount');
    const entityOther = queryParams.get('entityOther');
    const clientName = queryParams.get('clientName');

    const [clientReview, setClientReview] = useState({
        rating: 0,
        review: ""
    })

    const reviewHandler = (e) => {
        const { name, value } = e.target;

        if (name === "rating") {
            if (e.target.checked) {
                setClientReview({
                    ...clientReview,
                    rating: value
                })
            }
            else {
                setClientReview({
                    ...clientReview,
                    rating: value
                })
            }
        }
        if(name !== "rating") {
            setClientReview({
                ...clientReview,
                [name]: value
            })
        }
    }

    const ratingStar = useMemo(() => {
        return Array.from({ length: 5 }, (v, i) => {
            return <li key={i} className="w-30px relative">
                <StarIcon className={`star stroke-gray-200 cursor-pointer h-[30px] ${clientReview.rating >= i + 1 ? "fill-yellow-400 stroke-transparent" : "fill-transparent"} `} />
                <input value={i + 1} onChange={reviewHandler} type="checkbox" className="cursor-pointer absolute z-10 w-[30px] h-[30px] opacity-0 top-0 left-0" name="rating" />
            </li>
        })
    }, [clientReview.rating])

    const submitReview_fun = () => {
        dispatch(addUpdatereview({...clientReview, clientId, entityType, entityId, entityName}));
        setClientReview({
            rating : 0,
            review : ""
        })
    }

    return (
        <>
            <div className="min-h-[100vh] h-max w-full flex flex-wrap justify-center items-center pt-[16vh] px-4" style={{ placeContent: "start" }}>
                <h1 className="text-gray-600 w-full h-max text-[24px] font-bold text-start">Hello, <span className="text-orange-500 border-b-2 border-orange-500 pr-6 pb-1"> {clientName} </span></h1>
                <p className="w-full text-start mb-6 text-gray-400 mt-3">Please share your opinion with us.</p>
                <div className="w-full lg:w-[50%] min-h-[50vh] h-full p-6 bg-gray-100">
                    <div className="review-container w-full h-full rounded-md flex flex-col lg:flex-row">
                        <img src={entityImage} className="h-[45vh] w-auto" alt="product or service image" />
                        <div className="flex flex-col">
                            <h5 className="text-[22px] font-bold text-start lg:px-4 text-gray-500 capitalize mt-3 lg:mt-0">{entityName}</h5>
                            <b className="text-[18px] font-bold text-start lg:px-4 text-orange-500 capitalize mt-5"> <span className="text-[14px] text-gray-400"> INR </span> : {entityAmount}</b>
                            <b className="text-[18px] font-bold text-start lg:px-4 text-orange-500 capitalize mt-1 flex gap-y-1.5 gap-x-1.5 flex-wrap items-center">
                                <span className="text-[14px] text-gray-400"> Other </span>
                                :
                                {entityOther?.split(",").map((v, i) => {
                                    return <span key={i} className="text-[10px] font-normal mt-0 px-3 h-[18px] rounded-sm bg-white shadow-sm" style={{ lineHeight: "18px" }}>{v}</span>
                                })}
                            </b>
                            <b className="text-[14px] font-bold text-start lg:px-4 text-blue-300 capitalize mt-2 flex gap-y-1 gap-x-1.5 flex-wrap">
                                <span className="text-[14px] text-gray-400"> Date : </span>
                                {moment(entityTakenDate).tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss')}
                            </b>
                        </div>
                    </div>

                </div>

                <div className="w-full lg:w-[50%] min-h-[50vh] h-max flex flex-col p-0 lg:p-6 mt-5 lg:mt-0">

                    <div className="review-container w-full h-full border rounded-md">
                        <ul className="w-full flex border-b p-3">
                            {ratingStar}
                        </ul>
                        <fieldset>
                            <textarea value={clientReview.review} onChange={reviewHandler} placeholder="Write your opinion here..." name="review" className="border-b w-full p-4 text-gray-400 outline-0" id="" rows="6"></textarea>
                        </fieldset>
                        <div className="w-full px-5 py-3 h-max flex flex-row justify-end">

                            <button onClick={submitReview_fun} className="px-6 py-1.5 text-gray-100 font-semibold bg-blue-500 rounded-sm hover:bg-blue-400">{loading ? "Sending..." : success ? "Done" : "Submit"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WriteReview