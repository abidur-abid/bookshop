import React from 'react';
import about from '../../Images/books.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section>
            <div className='lg:flex justify-center gap-32 items-center'>
                <div className=''>
                < img src={about} className='w-72 mb-8 h-auto mx-auto lg:mx-0 rounded border-4 border-headerFooterColor'/>
                </div>
                <div className='w-1/2 mx-auto lg:mx-0'>
                <h1 className='text-2xl font-semibold '>Hey, We are from Book Shop! Book Shop is the number one trusted website for buying books.</h1> <br />
                <p className='lg:text-justify mb-4'>Nestled in the heart of downtown, The Book Nook is a charming, independent bookstore that offers a haven for book lovers of all ages. With its cozy, welcoming atmosphere, the shop features floor-to-ceiling shelves filled with a carefully curated selection of new releases, classic literature, and unique finds. The knowledgeable staff are passionate about books and always ready to offer personalized recommendations. The Book Nook also hosts regular events, including author readings, book signings, and children's story hours, fostering a vibrant community of readers. Whether you're looking for the latest bestseller or a rare gem, The Book Nook is the perfect place to explore and discover your next great read.</p>
                <div className='flex justify-center lg:justify-start'>
                 <Link to={'/contact'}><button className='button animate-pulse mx-auto lg:ml-0'>Email Us</button></Link>
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutUs;