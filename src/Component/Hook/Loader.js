import React from 'react';
import './Loder.css'

const Loader = () => {
    return (
        <div className=' min-h-screen bg-gradient-to-b from-black to-gray-800  '>
           <div className='flex justify-center lg:pt-80 pt-72' >
           <span class="loader"></span>
           </div>
            
        </div>
    );
};

export default Loader;