
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from 'react';
import photo from '../../Images/books.png'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className='my-20 lg:my-0 '>
     <>
      <div className='lg:flex justify-center gap-32 items-center'>
        
        <div className="mb-8">
          <h1 className='text-4xl my-2 lg:text-left sm:text-center md:text-center text-center font-bold uppercase'>Book Shop </h1>
          <p className='text-2xl my-2 lg:text-left sm:text-center md:text-center text-center bg-headerFooterColor rounded  font-bold px-10 py-2 mx-auto uppercase'>Number One Trusted Shop</p>
          <h2 className='text-md my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Trishal, Mymensingh</h2>
          <h2 className='text-md my-2 lg:text-left sm:text-center md:text-center text-center font-extrabold'>Phone: 01568441078</h2>
          <h2 className='text-md my-2 lg:text-left sm:text-center md:text-center text-center font-extrabold'>Email:  bookshop@gmail.com</h2>
          
          
          
          <ul className='socialLink my-4'>
                    <Link to={'/'} ><FaLinkedin/></Link>
                    <Link to={'/'} ><FaInstagramSquare /></Link>
                    <Link to={'/'} ><FaTwitter /></Link>
                    <Link to={'/'} ><FaFacebook /></Link>     
          </ul>
          
        </div>
        <div >
            <img src={photo} className='w-80 h-80 mx-auto' alt="logo" />
        </div>
      </div>
      </>
    </section>
  );
};

export default Hero;
