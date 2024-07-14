import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearClient, clientDelete, getClients } from "../../../Redux/clientSlice/clientSlice";
import { useEffect, useMemo, useState } from "react";
import ClientTable from "../../../components/table/clientTable";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useToastNotifications from "../../../utils/useToastNotification";


const ClientAccess = () => {
    const { clients, totalClientsNumber, loading, success, message, error } = useSelector(state => state.client);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var [search, setSearch] = useState({ searchString: "", pageNo: 1 })

    useEffect(() => {
        let x = getClientsfun()
        if (x === 0) {
            x()
        }
    }, []);

    function getClientsfun() {
        let x = 0;
        return function () {
            x++
            dispatch(getClients({ searchString: search.searchString, page: search.pageNo }));
            return x
        }
    }

    const deleteDataHandler = ({ id }) => {
        dispatch(clientDelete({ id }))
    }

    const selectDataToUpdate = ({ value, type, action }) => {
        if (type === "client" && action === "update") {
            navigate("/client/update", { state: { value, type, action } })
        }
        if (type === "client" && action === "add") {
            navigate("/client/add", { state: { value, type, action } })
        }
    }

    useMemo(() => {
        dispatch(getClients({ searchString: search.searchString, page: search.pageNo }));
    }, [search.pageNo])

    const search_submit_fun = () => {
        dispatch(getClients({ searchString: search.searchString, page: search.pageNo }));
    }

    const searchResultcancel_fun = () => {
        setSearch({ ...search, searchString: "" })
        dispatch(getClients({ searchString: "", page: search.pageNo }));
    }

    const paginationButtons = useMemo(() => {
        if (totalClientsNumber > 0) {
            let totalBtns = Math.ceil(totalClientsNumber / 10)
            return Array.from({ length: totalBtns }, (_, i) => {
                return <li key={i} onClick={() => setSearch({ ...search, pageNo: search.pageNo = i + 1 })} className={` py-1 px-2 rounded-sm ${search.pageNo === i + 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>{i + 1}</li>
            })
        }
    }, [totalClientsNumber])

    useToastNotifications({ loading, success, error, message })


    return (
        <>
            <div className="w-full px-2 pt-10 lg:p-8 h-max mt-14 border">
                <ToastContainer
                    position="bottom-left"
                    autoClose="4000"
                />
                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start">
                    Clients
                    <button onClick={() => selectDataToUpdate({ value: null, type: "client", action: "add" })} className="bg-orange-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm hover:bg-orange-500 ml-auto">Add</button>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-4">Back</button>
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
                        <ClientTable data={clients} other={{ loading, success, message, error }} accessType="client" selectDataToUpdate={selectDataToUpdate} deleteDataHandler={deleteDataHandler} />
                        <ul className="flex gap-x-1 flex items-center w-full py-2 text-sm text-gray-400 font-semibold pl-2 px-3 lg:pl-10" style={{ left: "0", position: "sticky", bottom: "0" }}>
                            {/* //                 <li onClick={()=> (activePageNo > 1 ) && setActivePageNo(activePageNo = activePageNo-1 ) } className={`mr-2 bg-gray-100 py-1 pt-1.5  px-2 rounded-sm text-xs ${activePageNo === 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Prev</li> */}
                            <span className="text-sm text-gray-300 mr-2">Pages :</span>
                            {paginationButtons}
                            <span className="text-sm text-gray-300 ml-auto">Total Clients : {totalClientsNumber}</span>
                            {/* //                 <li onClick={()=> (activePageNo !== (Math.ceil(totalClientsNumber/2)) ) && setActivePageNo(activePageNo = activePageNo+1 ) } className={`ml-2 bg-gray-100 py-1 pt-1.5 px-2 rounded-sm text-xs ${activePageNo === Math.ceil(totalClientsNumber/2) ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Next</li> */}
                        </ul>
                    </>
                }
            </div>
        </>
    )
}

export default ClientAccess