import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import logo from "../../authForm/images/pixelcut-export.png"
import Li from "./li"
import moment from 'moment-timezone';


const StaffCard = ({ values, selectDataToUpdate = ()=> null, deleteDataHandler = ()=> null }) => {
    return (
        <ul className="col-span-6 lg:col-span-4 xl:col-span-3 shadow-sm h-max flex p-4 flex-wrap relative">
            <button onClick={()=> selectDataToUpdate({staffRole : values.role, isVerified :values.isVerified, _id : values._id  })} className="absolute w-[30px] h-[30px] bg-blue-400 p-1.5 text-white rounded-full top-4 right-3 hover:bg-blue-500">
                <PencilSquareIcon />
            </button>
            <button onClick={()=> deleteDataHandler({staffRole : values.role, id : values._id})} className="absolute w-[30px] h-[30px] bg-orange-400 p-1.5 text-white rounded-full top-14 right-3 hover:bg-orange-500">
                <TrashIcon />
            </button>
            <li className="w-full h-max flex flex-col items-start p-3">
                <img src={logo} className="w-[75px] lg:w-[100px] border-4 border-white aspect-square object-cover p-2 bg-orange-100" alt="" style={{boxShadow:"0 0 2px gray"}} />
                <h6 className="text-[12px] lg:text-[14px] lg:mt-2 font-semibold text-gray-500 bg-white text-start py-1 min-w-[100px] px-1 w-max border-b-2 border-orange-100 capitalize">{values.name}</h6>
            </li>
            <li className="w-full h-max py-2 flex flex-row justify-between w-full">
                <h6 className="col-span-6 text-white text-[12px] w-[59%] bg-orange-200 h-max py-1 capitalize">{values.specialist}</h6>
                <h6 className="col-span-6 text-white text-[12px] w-[39%] bg-orange-200 h-max py-1 capitalize">{values.gender}</h6>
            </li>
            <Li first="Email" value={values.email} />
            <Li first="Number" value={values.number} />
            <Li first="Experience" value={values.experience} />
            <Li first="Verified" value={values.isVerified ? "Yes" : "No"} />
            <Li first="Joined" value={moment(values.createdAt).tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss') } />
        </ul>
    )
}

export default StaffCard