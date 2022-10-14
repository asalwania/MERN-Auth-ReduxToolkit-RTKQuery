import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken);
    const loaction = useLocation();
    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: loaction }} replace />
    );
};

export default RequireAuth;
