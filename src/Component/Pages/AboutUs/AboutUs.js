import React from 'react';
import { useQuery } from 'react-query';
import ShowInstactor from './ShowInstactor';
import Loader from '../../Hook/Loader';

const AboutUs = () => {
    const {data:instactors=[],isLoading}=useQuery({
        queryKey:['Instructor'],
        queryFn:()=>fetch('https://coder-master-server-b6ai6s7ms-akahad1.vercel.app/instactor')
        .then(res=>res.json())
    })
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='min-h-screen grid bg-gradient-to-b from-black to-gray-800 pt-10 pb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
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