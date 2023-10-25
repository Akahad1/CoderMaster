import React from 'react';

const ShowInstactor = ({instactor}) => {
   
    const{img,name,positon}=instactor
    return (
        <div className=''>
            <div className='border bg-slate-600 border-slate-900  h-72 ml-6 mt-5 flex justify-center mr-6 mb-6 rounded-2xl '>
            <div >
            <div className="avatar  mt-7">
    <div className="w-32 rounded-full ">
      <img src={img} className='w-32 h-20 ' alt=''/>
      
    </div>
  </div>
  <p className=' text-center text-white text-xl mt-3'>{name}</p>
    <p className='text-center text-white'>{positon}</p>
            </div>
            </div>
            
        </div>
    );
};

export default ShowInstactor;