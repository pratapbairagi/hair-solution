import { useEffect } from "react";
import logo from "../../page/authForm/images/pixelcut-export.png"
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/userSlice/userSlice";
import axios from "axios";
import moment from "moment";


const Profile = () => {
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logout_handler = async () => {
        const rootUrl = "https://hair-solution.vercel.app"
        const url = `${rootUrl}/api/app/user/auth/logout`;
        const response = await axios.get(url);

        if (response.data?.success) {
            window.location.reload()
            dispatch(userLogout())
        }
    }

    const selectDataToUpdate = ({ value, type, action }) => {
        navigate("/profile/edit", { state: { value, type, action } })
    }

    return (
        <div className="container w-[96%] lg:-w-full mx-auto my-6 grid grid-cols-12 mt-[100px] h-max">

            <div className="col-span-12 lg:col-span-7 min-h-full h-max lg:px-4">
                <div className="flex justify-center w-full mb-4">
                    <img
                        src={logo}
                        alt="" className="rounded-full object-cover bg-blue-200 p-1 mx-auto w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                <h1 className="font-bold text-center text-3xl text-gray-900 capitalize">{userState?.user?.name}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">{moment(userState?.user?.createdAt).tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss')}</p>
                    <div className="my-5 px-6">
                        <blockquote className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Mail to <span className="font-bold">{userState?.user?.email}</span></blockquote>
                    </div>
                    <div className="flex justify-center items-center my-5 px-6 w-full">
                        <blockquote className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                            {userState?.user?.number}
                        </blockquote>
                        <blockquote className="text-gray-500 flex items-center gap-x-[4px] justify-center hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                            {userState?.user?.gender}
                        </blockquote>
                        <blockquote className="text-gray-500 flex items-center gap-x-[4px] justify-center hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                            {userState?.user?.experience}
                        </blockquote>
                        <blockquote className="text-gray-500 flex items-center gap-x-[4px] justify-center hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                            {userState?.user?.specialist}
                        </blockquote>
                    </div>
                    <NavLink to="/" className="w-full border-t border-gray-100 text-gray-400 py-6 pl-6 pr-3 w-full hidden lg:flex hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start items-center font-bold">
                                <img src={logo} alt="" className="rounded-full h-10 inline-block mr-2 " />
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </NavLink>
            </div>


            <div className="col-span-12 lg:col-span-5 bg-white relative shadow rounded-lg h-max w-full  mx-auto">

                <div className="pt-1 lg:pt-5">
                    {/* <div className="mt-16 border-2 border-orange-500"> */}
                    
                    

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-7 mb-8">Tabs</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">

                            {userState?.auth && (userState?.user.role === "admin" || userState?.user.role === "owner") && <>
                                <NavLink to="/products/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 flex justify-start">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Products
                                    {/* <span className="text-gray-500 text-xs">49 min ago</span> */}
                                </NavLink>

                                <NavLink to="/staff/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 flex justify-start">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Members
                                    {/* <span className="text-gray-500 text-xs">1 day ago</span> */}
                                </NavLink>

                                <NavLink to="/gallery/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Gallery
                                    {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                                </NavLink>
                                <NavLink to="/clients/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Clients
                                    {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                                </NavLink>
                                <NavLink to="/reviews/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Reviews
                                    {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                                </NavLink>
                            {/* </>} */}
                            <button onClick={() => selectDataToUpdate({ value: userState.user, type: "profile", action: "update" })} className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                Edit
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </button>

                            {userState.auth && <NavLink onClick={logout_handler} to="/auth" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                Log Out
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </NavLink>}

                            <NavLink to="/" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full lg:hidden flex hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start items-center font-bold pt-20">
                                <img src={logo} alt="" className="rounded-full h-16 inline-block mr-2 " />
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </NavLink>
                            </>}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Profile;