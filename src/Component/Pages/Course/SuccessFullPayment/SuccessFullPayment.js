import React from 'react';
import { useParams } from 'react-router-dom';

const SuccessFullPayment = () => {
    const {tranId}=useParams()
    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-gray-800
        flex justify-center pt-32'>
            <p className='text-white lg:text-3xl text-xl ml-2 mr-2'>Succsfully Payment <br /> Your TranId: {tranId}</p>
            
        </div>
    );
};

export default SuccessFullPayment;