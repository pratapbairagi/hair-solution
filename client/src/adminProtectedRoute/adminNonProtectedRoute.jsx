import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const AdminNonProtectedRoute = () => {
    const {auth, user} = useSelector(state => state.user);

    return ( auth && (user.role !== "admin" && user.role !== "owner") ? <Outlet/> : <Navigate replace to="/"/> )
}

export default AdminNonProtectedRoute