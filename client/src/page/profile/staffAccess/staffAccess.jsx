import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { deleteUser, getUsers } from "../../../Redux/userSlice/userSlice";
import StaffCard from "./staffCard";



const StaffAccess = () => {
    const { users, loading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // var [search, setSearch] = useState({ searchString: "", pageNo: 1 })

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const deleteDataHandler = ({ id, staffRole }) => {
        dispatch(deleteUser(id))
    }

    const selectDataToUpdate = (value ) => {
        navigate("/profile/edit", {state : { value, type : "staff", action : "update" } })
    }

    const search_submit_fun = () => {
        // dispatch(getClients({ searchString: search.searchString, page: search.pageNo }));
    }

    const card = useMemo(()=>{
       return users.map((v,i)=>{
            return <StaffCard deleteDataHandler={deleteDataHandler} selectDataToUpdate={selectDataToUpdate} values={v} key={i}/>
        })
    },[users])

   

    return (
        <>
            <div className="w-full px-2 pt-10 lg:p-8 h-max mt-14 border">
                {/* <ToastContainer position="bottom-left" /> */}

                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start">
                    Staffs
                    <button onClick={() => {
                        navigate(-1)
                    }} className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-auto">Back</button>
                </h5>
                
                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div>
                    :
                    <div className="w-full min-h-[70vh] h-max grid grid-cols-12 gap-y-6 gap-x-2 items-center">
                        
                        {card}

                    </div>
                }
            </div>
        </>
    )
}

export default StaffAccess