
import React, { useState } from 'react';
import writeArticle from '../../Images/writeArticle.svg'

const AddBook = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const id = form.id.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
    
        const data = { id, name, price, description, imageUrl };
        console.log(data);
    
        await fetch("http://localhost:3000/books", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
          });
      };

    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <img src={writeArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
                <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input 
        
                    type="text"
                    name='id'
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder="Book Id" />
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input
        
                    type="text"
                    name='name'
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Book Name"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input
        
                    type="number"
                    name='price'
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Book Price"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input
        
                    type="text"
                    name='imageUrl'
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Book Image Url"/>
                    </label>
                    <textarea 
                    type="text"
                    id="description"
                    name='description'
                    className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base" 
                    placeholder="Book Description"  ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default AddBook;























    