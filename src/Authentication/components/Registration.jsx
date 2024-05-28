import { useForm } from 'react-hook-form';
import registration from "../../Images/register.svg"
import SectionTitle from "../../UI Pages/Main Pages/SectionTitle";
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { startTransition } from 'react';
import toast from 'react-hot-toast';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const { createUser, updateUserProfile, } = useAuth();

    const onSubmit = async (data, event) => {
        const { name, email, password, photo } = data;
        try {
          await createUser(email, password);
          toast.success("Successfully created a new user");
          await updateUserProfile({
            displayName: name,
            photoURL: photo,
          });
          
          startTransition(() => {
            refresh();
          });
          
          
        } catch (error) {
          console.log(error);
        }

        const inputName = document.getElementById('name');
        inputName.value ='';
        const inputEmail = document.getElementById('email');
        inputEmail.value ='';
        const inputPassword = document.getElementById('password');
        inputPassword.value ='';
        const inputPhoto = document.getElementById('photo');
        inputPhoto.value ='';
        
        

      };


    return (
        <section >
            
              <div className='lg:-mt-20'>
              <SectionTitle title={'Please Register'}/>
              </div>
               <div className='contactForm mb-20'>
               <div className='mx-auto mb-8'>
                    <img src={registration} width={500} alt='Registration' />
                </div>
                <div className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="text" name="name" placeholder='YOUR NAME' id='name'  className='input'
                            {...register("name", { required: true })}
                            />   
                            {errors.name && (
                            <span className="text-red-500 text-base mt-1">
                                Please enter your name.
                            </span>
                            )}
                        </div>
                        
                        <div>
                            <input type="email" name="email" placeholder='YOUR EMAIL' id='email'  className='input mt-4'
                            {...register("email", {
                                required: true,
                                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                              })}
                            /> 
                            {errors.email && (
                            <span className="text-red-500 text-base mt-1">
                                Please enter a valid email address.
                            </span>
                            )}   
                        </div>
                        <div>
                        <input type="password" name="password" placeholder='YOUR PASSWORD' id='password' className='input mt-4'
                        {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                        )}
                        </div>
                        <input type="submit" value="submit" className='button mt-4 w-full'/>
                    </form>
                    <div className="divider text-slate-700">OR</div>
                    <SocialLogin></SocialLogin>
                    <div className='mt-4 flex justify-center'><Link to={'/login'} className='link text-center'>If you already have an account, <br/> please login.</Link></div>
                </div>
               </div>
           
        </section>
    );
};

export default Registration;