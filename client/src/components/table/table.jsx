
import "./table.css"
import { memo, useMemo } from "react";
import { TrashIcon } from '@heroicons/react/20/solid';
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToastNotifications from "../../utils/useToastNotification";


const Table = ({ data = [], accessType="", deleteDataHandler=()=> "", other=null, selectDataToUpdate, sorting, setSorting }) => {

    const array = useMemo(()=>{
       return data?.map((v, i) => {

            return <tr key={v._id} className=" border text-gray-400 tracking-wide ">
            {/* <td style={{minWidth:"max-content"}} className="px-2 py-2 text-sm text-gray-300 text-nowrap">{v._id}</td> */}
            <td style={{minWidth:"max-content"}} className="px-2 py-2 text-sm text-gray-300 text-nowrap text-start">{v.title}</td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300">
                <img src={v.image.url} className="w-10 mx-auto" alt="" />
            </td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300 flex flex-col justify-center gap-y-2">{ 
            accessType === "product" ? v.type_ 
            : 
            v.social.map((social, socialI)=> { return <span key={socialI} className="py-2">{social.link}</span> })}
            </td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300 ">
            <button onClick={()=> selectDataToUpdate({ value : v}) } className="bg-blue-400 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Update</button>
            </td>
            <td style={{minWidth:"max-content"}} className="p-2 text-sm text-gray-300">
            <button
                      key="Delete"
                      onClick={()=> deleteDataHandler({id: v._id})}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 bg-red-500 hover:bg-gray-100"
                    >
                      <TrashIcon className="h-5 w-5 flex-none text-gray-100 hover:text-red-500" aria-hidden="true" />
                    </button>
            </td>
        </tr>
        });
    },[data]);

    const totalButtons = Math.ceil(data.length / 5);

    // const paginationButtons = useMemo(() => {
    //     return Array.from({ length: totalButtons }, (_, i) => {
    //         return <li key={i} onClick={()=> (sorting.activePage !== i+1) && setSorting({...sorting, activePage : i+1 }) } className={` py-1 px-2 rounded-sm ${sorting.activePage === i+1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>{i + 1}</li>
    //     })
    // }, [totalButtons, sorting.activePage])

    useToastNotifications({loading : other.loading, success : other.success, error : other.error, message : other.message})

    return (
        <div className="w-[100vw] flex flex-col md:justify-start items-start p-1 lg:p-4 min-h-[80vh] bg-white" style={{ maxWidth: "100%", overflow: "auto" }}>
           <ToastContainer/>
            <table className="w-full bg-white" >
            <tbody className="w-max" >
                
                <tr className=" border bg-green-600 text-gray-100 text-center font-bold tracking-wide">
                    {/* <td className=" py-2">ID</td> */}
                    <td className=" py-2 px-2 flex items-center gap-x-1">Name
                        {/* <ChevronUpDownIcon onClick={() => (setSorting(sorting=> ({...sorting, name : sorting.name === "" ? "DESC" : sorting.name === "DESC" ? "ASC" : "", email : "", number : "" })))} className="h-5 w-5 text-gray-100 cursor-pointer" /> */}
                    </td>
                    <td className=" px-3">Image</td>
                    <td className="py-2 px-3 flex items-center justify-center gap-x-1">
                        {accessType === "product" ? "Type" : "Social"}
                        {/* <ChevronUpDownIcon onClick={() => (setSorting(sorting=> ({...sorting, number : sorting.number === "" ? "DESC" : sorting.number === "DESC" ? "ASC" : "", name : "", email : "" })))} className="h-5 w-5 text-gray-100 cursor-pointer" /> */}
                    </td>
                    <td colSpan="2" className="">Action</td>
                </tr>
                {/* <tbody className="w-max" > */}
                    {array}
                </tbody>
            </table>
            <ul className="flex gap-x-1 w-full py-2 text-sm text-gray-400 font-semibold pl-1 lg:pl-20" style={{ left: "0", position: "sticky", bottom:"0" }}>
                {/* <li onClick={()=> (sorting.activePage > 1 ) && setSorting({...sorting, activePage : sorting.activePage-1 }) } className={`mr-2 bg-gray-100 py-1 pt-1.5  px-2 rounded-sm text-xs ${sorting.activePage === 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Prev</li>
                {paginationButtons}
               
                <li onClick={()=> (sorting.activePage !== totalButtons ) && setSorting({...sorting, activePage : sorting.activePage+1 }) } className={`ml-2 bg-gray-100 py-1 pt-1.5 px-2 rounded-sm text-xs ${sorting.activePage === totalButtons ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Next</li> */}
            </ul>
        </div>
    )
};

export default memo(Table);