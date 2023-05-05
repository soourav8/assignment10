import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { Spinner } from 'react-bootstrap';



const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        <p className='text-center mt-2'><Spinner animation="border" variant="info" /></p>
    }

    if(user){
        return children;
    }


    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
    
};

export default PrivetRoute;