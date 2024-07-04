import { useEffect } from "react";
import logo from "../../page/authForm/images/pixelcut-export.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/userSlice/userSlice";
import axios from "axios";


const Profile = () => {
  const userState = useSelector(state=> state.user);
  const dispatch = useDispatch()

  const logout_handler = async () => {
    // dispatch( userLogout() )
    const rootUrl = "https://hair-solution.vercel.app"
    const url = `${rootUrl}/api/app/user/auth/logout`;
    const response = await axios.get(url);

    console.log("logout success ", response.data)

    if(response.data?.success){
        dispatch(userLogout())
    }
  }

    return (
    <div className="container w-[96%] lg:-w-full mx-auto my-6 mt-[28vh]">
        <div>

            <div className="bg-white relative shadow rounded-lg w-full md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div className="flex justify-center">
                        <img 
                        // src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                        src={logo}
                         alt="" className="rounded-full object-cover bg-blue-200 p-1 mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900 capitalize">{userState?.user?.name}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">{userState?.user?.specialist}</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div className="my-5 px-6">
                        <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">{userState?.user?.email}</span></a>
                    </div>
                    <div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Tabs</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                         
                            <NavLink to="/products/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 flex justify-start">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                Products
                                {/* <span className="text-gray-500 text-xs">49 min ago</span> */}
                            </NavLink>

                            <NavLink to="/members/access" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 flex justify-start">
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

                           { userState.auth && <NavLink onClick={ logout_handler } to="/auth" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                Log Out
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </NavLink>}

                            <NavLink to="/" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden flex justify-start items-center font-bold pt-20">
                                <img src={logo} alt="" className="rounded-full h-16 inline-block mr-2 " />
                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
};

export default Profile;