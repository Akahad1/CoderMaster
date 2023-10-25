import React from 'react';
import { useQuery } from 'react-query';
import ShowInstactor from './ShowInstactor';

const AboutUs = () => {
    const {data:instactors=[]}=useQuery({
        queryKey:['Instructor'],
        queryFn:()=>fetch('http://localhost:5000/instactor')
        .then(res=>res.json())
    })
    return (
        <div className='min-h-screen grid bg-gradient-to-b from-black to-gray-800 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
            {
                instactors.map(instactor=><ShowInstactor
                instactor={instactor}
                key={instactor._id}
                ></ShowInstactor>)
            }

        </div>
    );
};

export default AboutUs;