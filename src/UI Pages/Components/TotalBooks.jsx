import React, { useEffect, useState } from 'react';
import one from '../../Images/one.jpg'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';



const TotalBooks = () => {

    
        const [books, setBooks] = useState([]);
      
        useEffect(() => {
          fetch("http://localhost:3000/books")
            .then((res) => res.json())
            .then((data) => setBooks(data));
        }, []);

        const handleDelete = async (id) => {
            await fetch(`http://localhost:3000/books/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                onDelete(id);
              });
          };

    return (
        <div className='grid grid-cols-3 justify-center items-center gap-5 my-20 mx-10'>
             {
                books.map(singleBook => 
                    <div key={singleBook.id} className="card w-96 h-96 border-4 border-primaryColor shadow-xl">
            <figure className="px-10 pt-10">
                <img src={singleBook.imageUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{singleBook.name}</h2>
                <p>{singleBook.description}</p>
                <div className="card-actions">
                <div className='flex justify-between items-center gap-10 mt-5'>
                <button className="button">View Details</button>
                <div className='flex justify-center items-center gap-3'>
                <Link to={`/dashboard/updatebook/${singleBook.id}`}><button className="text-xl font-bold"><FaRegEdit /></button></Link>
                <button onClick={()=> handleDelete(singleBook.id)} className="text-xl font-bold"><MdDelete /></button>
                </div>
                </div>
                </div>
            </div>
            </div>
                )
             }
        </div>
    );
};

export default TotalBooks;