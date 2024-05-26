
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Dashboard from '../../UI Pages/Layouts/Dashboard';


const PrivateRoute = () => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(user);
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
   
    if(user){
        return <Dashboard></Dashboard>;
    }
    
};

export default PrivateRoute;