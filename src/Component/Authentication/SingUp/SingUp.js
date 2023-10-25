import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingUp = () => {
    const {createEamilPassword,loginwithgoogle,updataData}=useContext(AuthContext)
    const [error,setError]=useState("")
   


    const singUpinPassword=(event)=>{
        event.preventDefault()
        const form =event.target
        const name =form.name.value
        const email =form.email.value;
        const photourl=form.photourl.value;
        
        
        const password =form.password.value;
        console.log(name,email,password,photourl)
        createEamilPassword(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      console.log(name,photourl)
      toast("Sing Up Sucessfully");
      profileupdate(name,photourl,)
      form.reset()
      
    })
    .catch(error=>{console.log(error)
        const message =error.message;
        setError(message)
        
      })
    }


    const googleLogInhanle=(event)=>{
      event.preventDefault()
      loginwithgoogle()
      .then(result=>{
        const user=result.user;
        // setCreateUserEmail(user.email)
        toast('You Sing Up Successfully');
        
        console.log(user)
        
        
       
      })
      .catch(error=>{console.log(error)
        const message=error.message;
        setError(message)
        
      })
    }

    const profileupdate=(name,photourl)=>{
      const profile={
        displayName:name,
        photoURL:photourl,
      }
      updataData(profile)
      .then(result=>{
        const user =result.user
        console.log(user)
      })
      .catch(error=>{console.error("error",error)
      const message=error.message;
        setError(message)
    })
    }
    return (
        <div className=' bg-gradient-to-b from-black to-gray-800 '>
           <div className='flex justify-center pt-10 pb-10'>
           <div className=" lg:w-1/3 md:w-2/3 w-full mr-3 ml-3 border  bg-slate-500     border-slate-900 rounded-2xl  ">
     <h1 className='lg:text-3xl md:text-3xl    lg:mt-5  mt-5 text-xl text-white text-center '>SING UP</h1>
    
     
   <div className="card-body">
     {/* 1/ */}
      <form onSubmit={singUpinPassword}>
   <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> Full Name</span>
       </label>
       <input type="name" name='name' placeholder='Full Name' className="input input-bordered text-white bg-slate-600" required />
     </div>
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white "> Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered  bg-slate-600 text-white " required />
     </div>
     {/* 3 */}
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white ">Photo Url</span>
       </label>
       <input type="text" name='photourl' placeholder="photourl" className="input input-bordered  text-white bg-slate-600"  required/>
     </div>
     {/* 4 */}

     
     

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white  ">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered  text-white bg-slate-600" required />
       <label className="label">
         <span className="label-text-alt text-white"> You already singup please <Link to='/login' className='text-red-500'>Log in</Link></span>
       </label>
       <label className="label">
         <span className="label-text-alt text-red-500 ">{error} </span>
       </label>
     </div>
     
     <div className="form-control mt-6">
       <button type='submit' className="btn btn-primary ">Sing Up</button>
       <ToastContainer />
     </div>
     <div className='  mt-8  '>
     <button onClick={googleLogInhanle} className="btn w-full   md:ml btn-primary "><FaGoogle className='inline mr-3  text-xl text-white'/>Continue with Google</button>

     <div className="divider  text-white ">OR</div>
     

     <button   className="btn   btn-primary w-full lg:ml-"><FaFacebook className='inline   text-xl'/>Continue with Facebook </button>
     
       
     </div>
     </form>
   </div>
   
   
 </div>
           </div>
        </div>
    );
};

export default SingUp;