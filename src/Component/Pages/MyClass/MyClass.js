import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ShowMyClass from './ShowMyClass';
import { Link } from 'react-router-dom';
import Loader from '../../Hook/Loader';

const MyClass = () => {
    const [orders,setoders]=useState([])
    const [loder,setloder]=useState(true)
    const {user,SpecificClass,setSpecificClass,logOut}=useContext(AuthContext)
    console.log(SpecificClass)
    useEffect(()=>{
        fetch(`https://coder-master-server-b6ai6s7ms-akahad1.vercel.app/orders?email=${user?.email}`,{
          headers:{
            authraization:`Bearer ${localStorage.getItem('CoderMaster')}`
          }
        })
        .then(res=>{
          if(res.status === 401 || res.status ===403){
            return logOut()

          }
          return res.json()
         
        })
        .then(data=>{
            console.log(data)
            setoders(data)
            setloder(false)
        })

    },[user?.email,logOut])
    console.log(process.env.REACT_APP_apiKey)

    if(loder){
      return <Loader></Loader>
    }
    return (
        <div className=' min-h-screen bg-gradient-to-b from-black to-gray-800'>
            {
                orders<1? <p className='text-white text-center text pt-32 text-3xl'> YOU HAVE NOT PURCHASED ANY CLASSES. </p>:<div className="overflow-x-auto pt-5">
                <table className="table w-full">
                  
                  <thead>
                    <tr>
                      <th></th>
                     
                      <th className='text-white'>Name</th>
                      <th className='text-white'>Email</th>
                      <th className='text-white'>Price</th>
                      
                      
                      <th className='text-white'>Your Class</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      orders.map((order,i)=><tr>
                      <th className='text-white'>{i+1}</th>
                      
                
                      <td className='text-white'>{order.name}</td>
                      <td className='text-white'>{order.userEmail}</td>
                      <td className='text-white'>{order.price}</td>
                      
                      
                      
                    
                    <td>{
                    order.price && !order.paidStatus && <Link
                     to={`/chackout/${order.serialId}`}>
                    <button className='btn btn-primary btn-xs'>Pay</button>
                    
                    </Link> 
                    }
                    ,{
                      order.price && order.paidStatus && <Link to='/myclass/cart'>
                      <button onClick={()=>setSpecificClass(order?.name)} className='btn lg:btn-sm btn-primary'>My {order?.name} Class</button></Link>
                    }
                    </td>
                    </tr>)
                    }
                      
                    
                    
                    
                    
                  </tbody>
                </table>
              </div>
            }
            
        </div>
    );
};

export default MyClass;