import { useForm } from 'react-hook-form';
import login from '../../Images/login.svg'
import SectionTitle from '../../UI Pages/Main Pages/SectionTitle';
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      
    
      
    return (
        <section>
            
                <div className='lg:-mt-20'>
                    <SectionTitle title={"Please Login"}/> 
                </div>
                
                <div className='contactForm mb-20'>
                <div className='mx-auto mb-8'>
                    <img src={login} width={500} alt='' />
                </div>
                <div className='mx-auto'>
                    <form  >
                        <input type="email" name="email" placeholder='YOUR EMAIL' id='email'  className='input' 
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
                        <br />
                        <input type="password" name="password" placeholder='YOUR PASSWORD' id='password' className='input mt-4'
                        {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                        )}
                        <br />
                        <input type="submit" value="submit" className='button mt-4 w-full'/>
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin/>
                    <div className='mt-4 flex justify-center'><Link to={'/registration'} className='link text-center'>If you don't have any account, <br/> please register.</Link></div>
                </div>
                </div>
           
        </section>
    );
};

export default Login;