
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth'

import { FaGoogle } from "react-icons/fa";




const SocialLogin = () => {
    const {googleSignIn} = useAuth();


    const handleGoogleSignIn = () =>{
        googleSignIn()
        toast.success("Successfully Login");
       
    }

    return (
        <>
        
         <div className='flex justify-center'>
         <button onClick={handleGoogleSignIn} className='font-bold custom-background px-8 py-4 button rounded mt-8 flex justify-center gap-2 items-center'> <FaGoogle/> Sign In With Google</button>
         </div>
        </>
    );
};

export default SocialLogin;
