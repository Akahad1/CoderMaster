import React, { useContext, useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useReactToPrint } from 'react-to-print';



const SpecificCoures = () => {
    const {name,img,body,price,titel,codeid}=useLoaderData()
    const {user}=useContext(AuthContext)
    console.log(useLoaderData())
    
    const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-gray-800 pt-10 flex justify-center  '>
            <div className="card lg:card-side lg:grid lg:grid-cols-12   shadow-xl pb-10">
                <div className='lg:col-span-6'>
                <figure><img src={img} className='lg:w-96 lg:h-80 
                md:w-96 md:h-80 mt-20 w-80 ' alt="Album"/></figure>

                </div>
  
  <div className=" lg:w-2/3 lg:col-span-6 mt-20 md:mt-20 md:ml-10 md:mr-10 ml-4 mr-3">

   <div ref={componentRef}>
   <h2 className=" text-white text-2xl mb-2">{name}</h2>
    <p className='text-white text-xl mb-2'>{titel}</p>
    <p className='text-white mb-2 text-xl'> Price:  <span className='text-xl' >৳ </span>{price}</p>
    <p className='text-white'>{body}</p>
   </div>
    
    <div className="card-actions justify-end mt-7 md:mt-10">
      <div></div>
      <Link><button onClick={handlePrint} className="btn btn-primary">Print</button></Link>
      <Link to={`/chackout/${codeid}`}><button className="btn md:ml-5 btn-primary">CheckOut</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SpecificCoures;