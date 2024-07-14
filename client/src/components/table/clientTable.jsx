
import { useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Td from "./td";
import Th from "./th";
import { useMemo } from "react";

const ClientTable = ({ data = [], accessType = "", deleteDataHandler = () => "", other = null, selectDataToUpdate, sorting, setSorting }) => {

    const navigate = useNavigate();

    const array = useMemo(() => {
        return data?.map((v, i) => {
            return  <tr key={i} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <Td header="Client Name" value={v.name}/>
            <Td header="Client Gender" value={v.gender}/>
            <Td header="Client Age" value={v.age}/>
            <Td header="Client Email" value={v.email}/>
            <Td header="Client Number" value={v.number}/>
            
            <td className="w-full lg:w-auto p-3 text-gray-800 text-end lg:text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 h-full flex justify-center items-center text-xs font-bold uppercase">Purchases</span>
            <span>{v?.totalPurchase}</span>
            <button onClick={()=> navigate(`/purchase/history/${v._id}`) } className=" text-sm font-semibold text-blue-400 px-3 py-1 rounded-sm">View</button>
            </td>

            <td className="w-full lg:w-auto p-3 text-gray-800 text-end lg:text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 h-full flex justify-center items-center text-xs font-bold uppercase">Services</span>
            {v?.totalService}
            <button onClick={()=> navigate(`/service/history/${v._id}`) } className=" text-sm font-semibold text-blue-400 px-3 py-1 rounded-sm">View</button>
            </td>

            <td className="w-full flex gap-x-2 justify-end items-center flex-row lg:w-auto p-3 text-gray-800 text-end lg:text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute  top-0 left-0 px-2 py-1 h-full flex justify-center items-center text-xs font-bold uppercase">Action</span>
            <button onClick={()=> selectDataToUpdate({ value : v, type : "client", action : "update"}) } className="bg-blue-400 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Update</button>
            <button onClick={()=> deleteDataHandler({id: v._id})} className="bg-red-400 lg:ml-3 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Delete</button>
            </td>
        </tr>
        });
    }, [data]);

    return (
        <>
            <div className="w-[100vw] flex flex-col md:justify-start items-start p-1 lg:p-4 min-h-[80vh] bg-white" style={{ maxWidth: "100%", overflow: "auto" }}>
                {/* <!-- component --> */}
                <table className="border-collapse w-full">
                    <thead>
                       
                       <tr>
                            <Th name="Client Name"/>
                            <Th name="Gender"/>
                            <Th name="Age"/>
                            <Th name="Email"/>
                            <Th name="Number"/>
                            <Th name="Purchases"/>
                            <Th name="Services"/>
                            <Th name="Action"/>
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

export default ClientTable