import React from 'react';
import one from '../../Images/one.jpg'
import two from '../../Images/two.jpg'
import three from '../../Images/three.jpg'

const Books = () => {
    return (
        <div className='flex justify-center items-center gap-5'>
            <div className="card w-96 h-96 border-4 border-primaryColor shadow-xl">
            <figure className="px-10 pt-10">
                <img src={one} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">BFA</h2>
                <p>Best Seller Book In 2020</p>
                <div className="card-actions">
                <button className="button">View Details</button>
                </div>
            </div>
            </div>
            <div className="card w-96 h-96  border-4 border-primaryColor shadow-xl">
            <figure className="px-10 pt-10">
                <img src={two} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">PS</h2>
                <p>Best Seller Book In 2017</p>
                <div className="card-actions">
                <button className="button">View Details</button>
                </div>
            </div>
            </div>
            <div className="card w-96 h-96  border-4 border-primaryColor shadow-xl">
            <figure className="px-10 pt-10">
                <img src={three} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">GGO</h2>
                <p>Best Seller Book In 2023</p>
                <div className="card-actions">
                <button className="button">View Details</button>
                </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default Books;