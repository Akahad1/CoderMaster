import React from 'react';
import { useParams } from 'react-router-dom';

const SuccessFullPayment = () => {
    const {tranId}=useParams()
    return (
        <div className='min-h-screen'>
            <p>Succsfully Payment {tranId}</p>
            
        </div>
    );
};

export default SuccessFullPayment;