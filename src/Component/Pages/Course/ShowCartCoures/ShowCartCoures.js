import React, { useState } from 'react';
import './ShowCartCoures.css'
import { Link } from 'react-router-dom';

const ShowCartCoures = ({course}) => {
    const {name,img,titel,codeid,body}=course;
    const [isHovered, setIsHovered] = useState(false);
  

    return (
      <div className="image-card lg:h-72 lg:w-80 md:w-72 md:h-72  w-52 h-52 mt-10 rounded-2xl bg-slate-600">
      <img src={img} alt='' className='' />
      <div className="title-box">
        <p className=' text-2xl'>{name}</p>
        <p className=''>{titel}</p>
        <Link to={`/allcoures/${codeid}`}><button className='btn  mb-2 btn-xs mt-2 btn-primary'> Show Details</button></Link>
        
      </div>
    </div>
    );
};

export default ShowCartCoures;