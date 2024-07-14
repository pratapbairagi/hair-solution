import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const AdminProtectedRoute = () => {
    const {auth, user} = useSelector(state => state.user);

    return ( auth && (user.role === "admin" || user.role === "owner") ? <Outlet/> : <Navigate replace to="/"/> )
}

export default AdminProtectedRoute