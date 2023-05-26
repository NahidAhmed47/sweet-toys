import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to="/user/login"></Navigate>
    );
};

export default PrivateRoute;