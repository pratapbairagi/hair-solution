import { useMemo } from "react";
import male from "./maleStaff.png";
import female from "./femaleStaff.png"

const Staffs = ({ staffs }) => {
    const staff = useMemo(()=>{
        if(staffs){
        return staffs.filter(v=> v.isVerified ).map((v,i)=>{ 
        return <div key={i} className="min-w-[86%] md:min-w-[40%] lg:min-w-[28%] h-max h-[380px] md:h-[390px] lg:h-[400px] hover:shadow-md rounded-lg flex flex-col shadow-sm">
        <img src={v.gender === "male" ? male : female} className="h-[70%] lg:h-[75%] object-contain bg-gray-100 rounded-lg" alt={v.name} />
        <h6 className="font-bold text-[22px] text-gray-700 mt-4 uppercase">{v.name}</h6>
        <b className="text-gray-400 text-[14px] mt-1 flex items-center justify-center gap-x-[10px] uppercase">
         <span className="w-[14px] h-[2px] bg-gray-400"></span>
            {v.specialist}
         <span className="w-[16px] h-[2px] bg-gray-400"></span>

        </b>
    </div>
    })
}
    },[staffs])
    return (
        <>
            <div className="col-span-12 h-max flex flex-col py-10 mt-4">

                <h5 className="#222222 text-xl lg:text-[30px] font-bold w-full text-center"> Our Staffs <span className="text-[#fa7436] text-xl lg:text-[30px] font-bold"> And Owner </span> </h5>

                <p className="text-gray-600 text-md lg:text-[20px] mt-2 lg:mt-3 min-w-[240px] max-w-[70%] mx-auto"> List of staffs and owner </p>

                <div className="h-max w-full  max-w-screen lg:max-w-[80%] mx-auto overflow-x-auto py-2 gap-x-4 md:gap-x-6 lg:gap-x-8 flex justify-start items-center mt-12 px-2">
                
                {staff}
                
                </div>
            </div>
        </>
    )
}

export default Staffs;