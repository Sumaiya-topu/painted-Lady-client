import React from 'react';
import './PrivateRoute.css';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default PrivateRoute;