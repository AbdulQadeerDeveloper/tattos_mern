import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ isAdminRoute = false }) => {
    const auth = useSelector((state) => state.authReducer.user);
    
    // Check if user is not logged in
    if (!auth?.token) {
        // Redirect to login page
        return <Navigate to="/login" />;
    }

    // If it's an admin route and the logged-in user is not an admin, redirect them
    if (isAdminRoute && auth.role !== 'admin') {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
