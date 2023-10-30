import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Orders = () => {
    const {name,img,body,price,titel,codeid,_id}=useLoaderData()
    const {user} =useContext(AuthContext)
    const paymentHanlder=()=>{
      const userData={
        userName:user?.displayName,
        userEmail:user?.email,
        OrderID:_id,
        serialId:codeid,
        name,
        price,
        
      }
      fetch('https://coder-master-server-b6ai6s7ms-akahad1.vercel.app/orders',{
          method:"POST",
          headers:{
              "content-type" : 'application/json'
          },
          body: JSON.stringify(userData)
          
      })
      .then(res=>res.json())
      .then(data=>{
        window.location.replace(data.url)
          console.log(data)
          if(data.acknowledged){
            //  toast.success("Successfully Order Add")
             
          
         
          
             
          }
      })
    }
    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-gray-800 pt-10'>
           <div className='min-h-screen bg-gradient-to-b from-black to-gray-800 pt-10 flex justify-center  '>
            <div className="card lg:card-side lg:grid lg:grid-cols-12   shadow-xl pb-10">
                <div className='lg:col-span-6 flex justify-center'>
                    <div className='bg-slate-600 w-2/3 h-96 '>
                    <figure><img src={img} className=' mt-8 w-80 h-80' alt="Album"/></figure>
                    

                    </div>
               

                </div>
  
  <div className=" lg:w-2/3 lg:col-span-6 mt-20 md:mt-20 md:ml-10 md:mr-10 ml-4 mr-3">

   <div >
   <h2 className=" text-white text-2xl mb-2">{name}</h2>
    <p className='text-white text-xl mb-2'>{titel}</p>
    <p className='text-white mb-2 text-xl'> Price:  <span 
    className='text-xl' >৳ </span>{price}</p>
    <p className='text-white mb-2 text-xl'>Your Name: {user?.displayName}</p>
    <p className='text-white mb-2 text-xl'>YourEmail: {user?.email}</p>
    <button onClick={paymentHanlder} className='btn btn-primary mt-10'>Payment</button>
  
   </div>
    
    <div className="card-actions justify-end mt-7 md:mt-10">
      <div></div>
      
    </div>
  </div>
</div>
        </div>
            
        </div>
    );
};

export default Orders;