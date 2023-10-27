import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ShowCartCoures from './ShowCartCoures/ShowCartCoures';
import { Link } from 'react-router-dom';



const Course = () => {
    
    const {data:allcoures=[]}=useQuery({
        queryKey:['allcoures'],
        queryFn: ()=>fetch('http://localhost:5000/allcoures')
        .then(res=>res.json())
        
    })
    return (
        <div className='bg-gradient-to-b from-black to-gray-800 min-h-screen pb-10 pt-6'>
            <div className='grid grid-cols-12 '>
                <div className='lg:col-span-3 md:col-span-3 col-span-5 bg-slate-600 mt-10 mr-7 '>
                {
                     allcoures.map(course=><div className=''>
                

                       <button className='btn btn-accent mt-8 lg:ml-7 md:ml-7 ml-3 w-24 '> <Link to={`/allcoures/${course.codeid}`} className='text-white'>{course.name}</Link></button>
                     </div>)
                    }


                </div>
                <div className='lg:col-span-9 md:col-span-9 col-span-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mr-0 mr-3'>
                {
                     allcoures.map(course=><ShowCartCoures
                     key={course._id}
                     course={course}
                    
                    
                     >

                     </ShowCartCoures>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Course;