import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Singin = () => {
    const [error,setError]=useState('')
    const {login}=useContext(AuthContext)

    const location=useLocation()
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || '/'


    const loginhander=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user=result.user;
            toast('Your Log in Successfully')
            form.reset()

            // token
            const currentUser={
              email:user?.email,

            }

            fetch('http://localhost:5000/jwt',{
              method:"POST",
              headers:{
                'content-type' : 'application/json'
              },
              body:JSON.stringify(currentUser)

            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              localStorage.setItem('CoderMaster',data.token)
              navigate(from,{replace:true})
            })
            
              
        })
        .catch(error=>{console.log(error)
            const message=error.message
            setError(message)
        })

    }
    return (
        <div className='flex justify-center pt-10 pb-10 bg-gradient-to-b from-black to-gray-800'>
            <div className=" lg:w-1/3 md:w-2/3 w-full mr-3 ml-3 border  bg-slate-500     border-slate-900 rounded-2xl  ">
 
    
   
 <div className="card flex-shrink-0 lg:w-full md:w-2/3  w-full border     border-slate-900 bg-slate-500 ">
     <h1 className='lg:text-3xl md:text-3xl  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl text-white'>Log In </h1>
    
     
   <div className="card-body">
     
      <form onSubmit={loginhander}>
   
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered  bg-slate-600 text-white" />
     </div>
    

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white ">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered  bg-slate-600 text-white " />
       <label className="label">
         <span className="label-text-alt text-white"> You not singup plese <Link to='/singup' className='text-red-300'>Sing up</Link></span>
       </label>
       <label className="label">
         <span className="label-text-alt text-red-500 ">{error} </span>
       </label>

     </div>
     
     <div className="form-control mt-6">
       <button type='submit' className="btn btn-primary text-white">Log In</button>
       <ToastContainer />
     </div>
     </form>
   </div>
   
   
 </div>
 
</div>
            
        </div>
    );
};

export default Singin;