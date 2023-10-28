import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../Component/Hook/Loader';



const PrivetRoute = ({children}) => {
    const location=useLocation()
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <div>
        <Loader></Loader>
         </div>
    }
    if(user){
        return children
    }
    return (
        <Navigate to="/singup"  state={{from:location}} replace>

        </Navigate>
    );
};

export default PrivetRoute;