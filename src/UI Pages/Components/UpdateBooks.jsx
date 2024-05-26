
import React, { useState } from 'react';
import updateArticle from '../../Images/updateArticle.svg'



const UpdateBook = () => {



    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <Image src={updateArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
            <form  action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input 
        
                    type="text"
       
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder="Course Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input 
                    type="text"
       
                    id="topicName"
                    className="grow placeholder-gray-600 " placeholder="Topic Name"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input 
        
                    type="text"
       
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Set Date"/>
                    </label>
                    <textarea 
                    type="text"
                    id="description"
                    className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base" 
                    placeholder="Write Topic Description"  ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default UpdateBook;