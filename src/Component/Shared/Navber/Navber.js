import React, { useContext } from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navber = () => {
  const {logOut,user}=useContext(AuthContext)

  const logoutHandler=()=>{
    logOut()
    .then(()=>{})
    .then(error=>console.log(error))

  }
    return (
        <div className=''>
            <div className="navbar bg-slate-800 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-center rounded-box  w-80">
        <div className='flex justify-center'>
        <div>
      <li className='text-white' ><Link to='/'>Home</Link></li>
        <li className='text-white' ><Link to='/coures'>Coures</Link></li>
        <li className='text-white' ><Link to='/Blogs'>Blogs</Link></li>
        <li className='text-white'><Link to='/aboutus'>About Us</Link>
        </li>
        {
          user?.uid?<button onClick={logoutHandler} className='text-white'>
          Log Out
         </button>:<>
         <li className='text-white' ><Link to='/singup'>Register</Link></li>
        <li className='text-white' ><Link to='/login'>Login</Link></li>
         </>
        }
      </div>

        </div>
      
      </ul>
    </div>
    {/* lg: */}
    <a className="btn btn-ghost normal-case text-xl text-white">Coder Master</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-white ' ><Link to='/'>Home</Link></li>
        <li className='text-white' ><Link to='/coures'>Coures</Link></li>
        <li className='text-white' ><Link to='/Blogs'>Blogs</Link></li>
        <li className='text-white'><Link to='/aboutus'>About Us</Link>
        </li>
        
        {
          user?.uid?<button onClick={logoutHandler} className='text-white'>
          Log Out
         </button>:<>
         <li className='text-white' ><Link to='/singup'>Register</Link></li>
        <li className='text-white' ><Link to='/login'>Login</Link></li>
         </>
        }
    </ul>
  </div>
  
  <div className="navbar-end">
    
    
   {
    user?.uid?<> <div className="avatar online">
    <div className="w-16 rounded-full mr-3">
      <img src={user?.photoURL} className='w-12 h-12 ' alt=''/>
    </div>
  </div>
  <p className='text-white'>{user?.displayName}</p>
  </>
  :''
   }
  
  </div>
</div>
        </div>
    );
};

export default Navber;