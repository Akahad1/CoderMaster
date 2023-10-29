import React from 'react';

const SpecificMyClass = ({classData}) => {
    const {name,video}=classData;
    return (
        <div>
            <p className='text-white pt-10 text-2xl text-center'>MY Class {name}</p>

            <div className='pt-12 flex justify-center '>
            

            <iframe className='lg:h-96 md:w-2/3 lg:w-1/3 w-80 h-52 md:h-72' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>

            
        </div>
    );
};

export default SpecificMyClass;