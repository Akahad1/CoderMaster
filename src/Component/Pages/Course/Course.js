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
                <div className='col-span-3 bg-slate-600 mt-10 mr-7'>
                {
                     allcoures.map(course=><div className=''>
                

                       <button className='btn btn-accent mt-8 ml-7 w-24 '> <Link to={`/allcoures/${course.id}`} className='text-white'>{course.name}</Link></button>
                     </div>)
                    }


                </div>
                <div className='col-span-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
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