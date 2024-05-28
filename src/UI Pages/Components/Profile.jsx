import { CgProfile } from "react-icons/cg";
import useAuth from "../../Authentication/Hooks/useAuth";
import toast from "react-hot-toast";



const Profile = () => {

    const {user, logOut} = useAuth();
    const { displayName, photoURL } = user || {};

    

    const handleLogout = () => {
         logOut();
         toast.success("Successfully Logout");
      };

    return (
        <section className='mb-8'>
            <div >
            {
            user ? <img src={photoURL} width={160} height={160} className='rounded-full mx-auto border-slate-300 text-secondaryColor border-4'/>
            : <CgProfile className='w-40 h-40 rounded-full mx-auto border-slate-300 text-secondaryColor border-4'/>
           }
           
           
            </div>
            <h1 className='text-xl text-center  mt-4'></h1>
            <div className='flex justify-center'>
                <h2 className='text-3xl text-center  mt-2 rounded font-bold uppercase'>{displayName}</h2>
            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={handleLogout}  className='button'>Logout</button>
            </div>
        </section>
    );
};

export default Profile;