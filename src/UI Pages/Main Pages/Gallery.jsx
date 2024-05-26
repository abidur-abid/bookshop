
import React from 'react';
import g1 from '../../Images/one.jpg'
import g2 from '../../Images/two.jpg'
import g3 from '../../Images/three.jpg'
import g4 from '../../Images/four.jpg'
import g5 from '../../Images/five.jpg'
import g6 from '../../Images/six.jpg'
import g7 from '../../Images/seven.jpg'
import g8 from '../../Images/eight.jpg'
import g9 from '../../Images/nine.jpg'
import g10 from '../../Images/ten.jpg'

const Gallery = () => {
    return (
       <section className='mb-20 flex justify-center'>
         <div className='grid grid-cols-5 justify-center items-center gap-5'>
            <img src={g1} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g2} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g3} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g4} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g5} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g6} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g7} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g8} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g9} className='hover:scale-105 hover:duration-1000 rounded'/>
            <img src={g10} className='hover:scale-105 hover:duration-1000 rounded'/>
           
         </div>
       </section>
    );
};

export default Gallery;
