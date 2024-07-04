import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const NonProtectedRoute = () => {
    const {auth} = useSelector(state=> state.user);

    return( !auth ? <Outlet/> : <Navigate replace to="/profile"/> )
};

export default NonProtectedRoute;