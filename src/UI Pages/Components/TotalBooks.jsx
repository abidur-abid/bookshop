import React from 'react';
import one from '../../Images/one.jpg'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";



const TotalBooks = () => {
    return (
        <div>
             <div className="card w-96 h-96 border-4 border-primaryColor shadow-xl">
            <figure className="px-10 pt-10">
                <img src={one} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">BFA</h2>
                <p>Best Seller Book In 2020</p>
                <div className="card-actions">
                <div className='flex justify-between items-center gap-10 mt-5'>
                <button className="button">View Details</button>
                <div className='flex justify-center items-center gap-3'>
                <button className="text-xl font-bold"><FaRegEdit /></button>
                <button className="text-xl font-bold"><MdDelete /></button>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TotalBooks;