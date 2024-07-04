import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const ProtecedRoute = () => {
    const {auth} = useSelector(state=> state.user);

    return ( auth ? <Outlet/> : <Navigate replace to="/auth"/>)
}

export default ProtecedRoute;