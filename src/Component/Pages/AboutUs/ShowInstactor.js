import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram ,AiFillLinkedin} from 'react-icons/ai';

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
    <div className='flex justify-center mt-2'>
                <BsFacebook className='inline text-white w-5  h-5'/>
                <AiOutlineInstagram className='inline ml-2 mr-2 text-white w-5 h-5'/>
                <AiFillLinkedin className='inline text-white w-5 h-5'/>

            </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default ShowInstactor;