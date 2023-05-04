import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivetRoute = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
      }
    
    return (
        <div>
            <Navigate to="/login" replace></Navigate>;
        </div>
    );
};

export default PrivetRoute;