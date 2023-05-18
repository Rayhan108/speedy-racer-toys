import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivetRoute = ({children}) => {
    const {loader,user} =useContext(AuthContext)
    const location = useLocation();
   
    if(!user){
        Swal.fire({
            title: 'error!',
            text: 'You have to log in first to go view details',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
        if(loader){
            return <div className='flex  justify-center mt-5 mb-5'><progress className="progress w-56"></progress></div>
        }
        
          if (user) {
            return children;
          }
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   
};

export default PrivetRoute;