import React, { useContext } from 'react';
import SideAnimation from './SideAnimation/SideAnimation';
import './Home.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Home = () => {
  const {user}=useContext(AuthContext)
  console.log(user)
     
   return (
        <div>
          <div className='bg-gradient-to-b from-black to-gray-800 lg:flex lg:justify-between md:flex md:justify-between '>
            <div className='h-96 lg:mt-48 md:mt-44 pt-12  lg:ml-10 md:ml-10 ml-3 mr-2 align-middle '>
                <p className='text-white text-3xl  '>Expand your career opportunities  <br /> with <span className='text-white'><span style={{ color: 'white', fontWeight: '' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Python',"Java","JavaScript","C","C++",'Web',"Ruby","C#"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                </span>
               
                </p>
                
                <p className='text-white mt-10 '>Take one of CoderMaster’s range courses and learn how to code using this incredibly <br /> useful language. 
Its simple syntax and readability make it perfect for Flask, Django, <br /> data science, and machine learning. <span className='lg:inline  hidden'> You’ll learn how to build everything from games <br /> to sites to apps. Choose from a range of courses that will appeal to.</span> </p>
                

            </div>
            <div className='flex justify-center md:mt-24 lg:mt-5 mt-5 pb-14'>
            <SideAnimation></SideAnimation>
            </div>
            
          </div>
            
        </div>
    );
};

export default Home;