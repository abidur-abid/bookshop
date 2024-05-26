import React from 'react';

const Subscription = () => {
    return (
        <div className='flex justify-center items-center gap-5 mb-20'>
           <input type="text" placeholder="Type Your Email" className="input input-bordered input-primary w-full max-w-lg"/>
           <button className="button">Subscribe</button>
        </div>
    );
};

export default Subscription;