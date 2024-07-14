import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/userSlice/userSlice";
import ContactCardDetails from "./contactCardDetails";

const Contact = () => {
    const dispatch = useDispatch();
    const { users, user, loading, error, success, message } = useSelector(state => state.user)
    const containerReceptionistClass = "w-[100%] relative z-20 lg:w-[75%] h-max min-h-[45vh] bg-green-100 flex flex-wrap p-7";
    const containerOwnerClass = "w-[100%] relative z-20 lg:w-[48%] flex flex-wrap h-max min-h-[45vh] bg-orange-100 p-6 justify-end gap-x-5";
    const containerStaffClass = "w-[100%] relative z-20 lg:w-[31%] flex flex-wrap h-max min-h-[47vh] lg:min-h-[50vh] bg-blue-100 p-6 justify-end gap-x-5"
    
    useEffect(() => {
        dispatch(getUsers("specialist"))
    }, [])

    const cards = useMemo(() => {
        return users.filter(v => v.isVerified).map((v, i) => {
            return <ContactCardDetails values={v} containerClass={containerStaffClass} key={i} />
        })

    }, [users])

    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex-wrap py-[15vh] px-4 lg:px-16 justify-start gap-y-8" style={{ columnGap: "3%" }}>

                <div className="w-[100%] h-[30vh] lg:h-[40vh] flex flex-col justify-center lg:mb-4">
                    <h6 className="w-[100%] lg:w-[60%] text-start text-[35px] lg:text-[3rem] font-bold text-gray-700">Connect <span className="text-orange-500"> With Us </span> </h6>
                    <p className="w-[100%] lg:w-[60%] text-[18px] lg:text-[26px] font-semibold text-gray-400 text-start mt-2" style={{ lineHeight: "140%" }}>Need support or have a question about our product or service ? Our team is ready to help you.</p>
                </div>

                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div> :
                    <>

                        {users.find(v => v.specialist === "receptionist") && <ContactCardDetails values={users.find(v => v.specialist === "receptionist")} containerClass={containerReceptionistClass} />}
                        {users.find(v => v.specialist === "owner") &&
                            users.filter(v => v.specialist === "owner").map((v, i) => {
                                return <ContactCardDetails key={i} values={v} containerClass={containerOwnerClass} />
                            })
                        }

                        {cards}
                    </>
                }
            </div>
        </>
    )
};

export default Contact;