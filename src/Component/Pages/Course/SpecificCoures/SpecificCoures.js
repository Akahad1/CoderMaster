import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const SpecificCoures = () => {
    const {name}=useLoaderData()
    const {user}=useContext(AuthContext)
    console.log(name)
    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-gray-800'>
            <h1 className='text-white'>{user.name}</h1>
            {name}
        </div>
    );
};

export default SpecificCoures;