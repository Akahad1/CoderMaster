import React, { useState } from 'react';
import './ShowCartCoures.css'

const ShowCartCoures = ({course}) => {
    const {name,img,titel,id,body}=course;
    const [isHovered, setIsHovered] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    return (
        <div>
             <div
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
     
    >
      <div className="card bg-slate-600   shadow-xl ml-5 mt-10 mr-3">
  <figure><img className='w-80 h-60' src={img} alt="" /></figure>

  <div className={`${isHovered?" box bg-white p-10" :'hidden'}`}>
    <h2 className="card-title ">
    {name}
     
    </h2>
    <p>{titel}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
            
        </div>
    );
};

export default ShowCartCoures;