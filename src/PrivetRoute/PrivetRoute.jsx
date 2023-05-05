import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';



const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

    if(user){
        return children;
    }


    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
    
};

export default PrivetRoute;