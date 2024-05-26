import { useForm } from 'react-hook-form';
import registration from "../../Images/register.svg"
import SectionTitle from "../../UI Pages/Main Pages/SectionTitle";
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


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
                    <form >
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