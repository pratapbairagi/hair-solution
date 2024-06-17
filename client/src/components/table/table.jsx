
import "./table.css"
import { memo, useMemo } from "react";
import { TrashIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';


const Table = ({ users, deleteUserHandler, selectUserToUpdate, sorting, setSorting }) => {

    const array = useMemo(()=>{
       return users.users?.map((v, i) => {

            return <tr key={v.id} className=" border text-gray-400 tracking-wide ">
            <td style={{minWidth:"max-content"}} className="px-2 py-2 text-sm text-gray-300 text-nowrap">{v.id}</td>
            <td style={{minWidth:"max-content"}} className="px-2 py-2 text-sm text-gray-300 text-nowrap">{v.name}</td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300">{v.email}</td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300">{v.number}</td>
            <td style={{minWidth:"max-content"}} className="px-2 text-sm text-gray-300 ">
            <button onClick={()=> selectUserToUpdate({id : v.id}) } className="bg-blue-400 text-sm font-semibold text-gray-100 px-3 py-1 rounded-sm hover:bg-gray-100 hover:text-blue-400">Update</button>
            </td>
            <td style={{minWidth:"max-content"}} className="p-2 text-sm text-gray-300">
            <button
                      key="Delete"
                      onClick={()=>deleteUserHandler({id: v.id})}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 bg-red-500 hover:bg-gray-100"
                    >
                      <TrashIcon className="h-5 w-5 flex-none text-gray-100 hover:text-red-500" aria-hidden="true" />
                    </button>
            </td>
        </tr>
        });
    },[users.users]);

    const totalButtons = Math.ceil(users.totalUsers / 5);

    const paginationButtons = useMemo(() => {
        return Array.from({ length: totalButtons }, (_, i) => {
            return <li key={i} onClick={()=> (sorting.activePage !== i+1) && setSorting({...sorting, activePage : i+1 }) } className={` py-1 px-2 rounded-sm ${sorting.activePage === i+1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>{i + 1}</li>
        })
    }, [totalButtons, sorting.activePage])

    return (
        <div className="w-max lg:w-6/12 flex flex-col md:justify-between items-center p-2 lg:p-4 min-h-[80vh] bg-white" style={{ maxWidth: "100%", overflow: "auto" }}>
            <table className=" bg-white" style={{ maxWidth: "595px" }}>
                <thead className=" border bg-green-600 text-gray-100 text-center font-bold tracking-wide">
                    <td className=" py-2">ID</td>
                    <td className=" py-2 px-2 flex items-center gap-x-1">Name
                        <ChevronUpDownIcon onClick={() => (setSorting(sorting=> ({...sorting, name : sorting.name === "" ? "DESC" : sorting.name === "DESC" ? "ASC" : "", email : "", number : "" })))} className="h-5 w-5 text-gray-100 cursor-pointer" />
                    </td>
                    <td className=" ">Email</td>
                    <td className="py-2 px-2 flex items-center gap-x-1">
                        Number
                        <ChevronUpDownIcon onClick={() => (setSorting(sorting=> ({...sorting, number : sorting.number === "" ? "DESC" : sorting.number === "DESC" ? "ASC" : "", name : "", email : "" })))} className="h-5 w-5 text-gray-100 cursor-pointer" />
                    </td>
                    <td colSpan="2" className="">Action</td>
                </thead>
                <tbody className="w-max" >
                    {array}
                </tbody>
            </table>
            <ul className="flex gap-x-1 w-full py-2 text-sm text-gray-400 font-semibold pl-1 lg:pl-20" style={{ left: "0", position: "sticky", bottom:"0" }}>
                <li onClick={()=> (sorting.activePage > 1 ) && setSorting({...sorting, activePage : sorting.activePage-1 }) } className={`mr-2 bg-gray-100 py-1 pt-1.5  px-2 rounded-sm text-xs ${sorting.activePage === 1 ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Prev</li>
                {paginationButtons}
               
                <li onClick={()=> (sorting.activePage !== totalButtons ) && setSorting({...sorting, activePage : sorting.activePage+1 }) } className={`ml-2 bg-gray-100 py-1 pt-1.5 px-2 rounded-sm text-xs ${sorting.activePage === totalButtons ? "bg-white shadow-sm text-gray-300" : "bg-gray-100 cursor-pointer"}`}>Next</li>
            </ul>
        </div>
    )
};

export default memo(Table);