import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import SpecificMyClass from './SpecificMyClass';

const ShowMyClass = () => {
    const {SpecificClass}=useContext(AuthContext)
    console.log(SpecificClass)

    const [classDatas,setClassData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/class?myclass=${SpecificClass}`)
        .then(res=>res.json())
        .then(data=>setClassData(data))
    },[SpecificClass])
    console.log(classDatas)
    
    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-gray-800'>
          

           

           

            

            {
                classDatas.map(classData=><SpecificMyClass
                classData={classData}
                ></SpecificMyClass>)
            }
            
            
        </div>
    );
};

export default ShowMyClass;