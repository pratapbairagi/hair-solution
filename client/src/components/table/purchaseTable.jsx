import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Th from "./th"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearClient, getClient, purchaseDelete, reviewMail } from "../../Redux/clientSlice/clientSlice";
import { useEffect, useMemo, useState } from "react";
import Td from "./td";
import moment from 'moment-timezone';
import useToastNotifications from "../../utils/useToastNotification";



const PurchaseTable = () => {
    const { client, loading, success, error, message } = useSelector(state => state.client)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(getClient({ id }))
        }
    }, [id])

    const deleteDataHandler = ({ _id }) => {
        dispatch(purchaseDelete({ _id, id: client._id }))
    }

    const selectDataToUpdate = ({ value, type, action }) => {
        navigate("/purchase/update", { state: { value: value, type: type, action: action, clientId: client._id } })
    }

    const reviewMail_fun = ({entityId, type}) => {
        dispatch(reviewMail({entityId, clientId : client._id, type}))
    }

    const array = useMemo(() => {
        if (client) {
            return client.productsPurchased?.map((v, i) => {
                return <tr key={i} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <Td header="Product Name" extraClass="max-w-[68%] lg:max-w-[100%]" value={v.productName} />
                    <Td header="Product Amount" value={v.amount} />
                    {/* <Td header="Product ID" value={v.productId} /> */}
                    <Td header="Purchase Date"
                        value={moment(v.purchaseDate).tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss')} />
                    <td className="w-full lg:w-auto flex justify-between p-3 text-gray-800 text-end lg:text-center border border-b  lg:table-cell relative lg:static lg:max-w-[400px]">
                        <span className="lg:hidden top-0 left-0 px-2 py-1 h-full flex justify-center items-center text-xs font-bold uppercase">Other</span>
                        <ul className="max-w-[70%] w-[70%] gap-x-1 gap-y-1 lg:w-[100%] lg:max-w-[100%] flex flex-wrap justify-end lg:justify-center">
                            {v.other.map((vv, vi) => <li key={vi} className="px-2 py-1 bg-red-200 text-center text-white rounded-sm">{vv}</li>)}
                        </ul>
                    </td>
                    <Td header="Mail Sent" value={v.mailSent+" "+"Time/s"} />
                    <Td header="Review" value={v.review ? "Yes" : "No"} />

                    <td className="w-full flex gap-x-2 justify-end items-center flex-row lg:w-auto p-3 text-gray-800 text-end lg:text-center border border-b block lg:table-cell relative lg:static lg:max-w-[260px]">
                        <span className="lg:hidden absolute  top-0 left-0 px-2 py-1 h-full flex justify-center items-center text-xs font-bold uppercase">Action</span>
                        <div className="flex flex-wrap lg:gap-y-1 gap-x-1 justify-center lg:w-full">
                            <button onClick={() => selectDataToUpdate({ value: v, type: "purchase", action: "update" })} className="bg-blue-400 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Update</button>
                            <button onClick={() => deleteDataHandler({ _id: v._id })} className="bg-red-400 lg:ml-3 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Delete</button>
                            <button onClick={() => reviewMail_fun({entityId : v._id, type :"productsPurchased" })} className="bg-green-400 lg:ml-3 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-green-500">Review Mail</button>
                        </div>
                    </td>
                </tr>
            });
        }
    }, [client])

    useToastNotifications({loading, success, error, message})
    
    return (
        <>
            <div className="w-[100vw] flex flex-col md:justify-start items-start p-1 lg:p-4 min-h-[100vh] pt-[15vh] lg:pt-[18vh] bg-white" style={{ maxWidth: "100%", overflow: "auto" }}>
            <ToastContainer 
            position="bottom-left"
            autoClose="4000"
             />
                {/* <!-- component --> */}
                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start w-full mb-5">
                    Purchase
                    <button onClick={() => selectDataToUpdate({ value: null, type: "purchase", action: "add" })} className="bg-orange-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm hover:bg-orange-500 ml-auto">Add</button>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-4">Back</button>
                </h5>
                <table className="border-collapse w-full">
                    <thead>
                        <tr>
                            <Th name="Product Name" />
                            <Th name="Amount" />
                            {/* <Th name="Product ID" /> */}
                            <Th name="Date" />
                            <Th name="Other" />
                            <Th name="Mail Sent" />
                            <Th name="Review" />
                            <Th name="Action" />
                        </tr>

                    </thead>
                    <tbody>
                        {array}
                    </tbody>
                </table>
                <ul className="flex gap-x-1 w-full py-2 text-sm text-gray-400 font-semibold pl-1 lg:pl-20" style={{ left: "0", position: "sticky", bottom: "0" }}>
                    {/* <li onClick={()=> (sorting.activePage > 1 ) && setSorting({...sorting, activePage : sorting.activePage-1 }) } className={`mr-2 bg-gray-100 py-1 pt-1.5  px-2 rounded-sm text-xs ${sorting.activePage === 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Prev</li>
                {paginationButtons}
               
                <li onClick={()=> (sorting.activePage !== totalButtons ) && setSorting({...sorting, activePage : sorting.activePage+1 }) } className={`ml-2 bg-gray-100 py-1 pt-1.5 px-2 rounded-sm text-xs ${sorting.activePage === totalButtons ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Next</li> */}
                </ul>
            </div>
        </>
    )
}

export default PurchaseTable