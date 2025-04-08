import React from 'react';
import Logo from '../assets/RRLOGO.png';

const Navbar = () => {
  return (
    <>
      <div className='w-screen h-[80px] bg-blue-950 flex justify-between items-center text-white font-bold'> 
        <div className='flex justify-start items-center text-2xl'>
          <div className='flex'>
            <img 
              src={Logo} 
              alt="Company Logo" 
              className='w-[100px] h-[80px] object-contain shadow-lg' // Adjusted size and added shadow
            />
          </div>
        </div>
        {/* You can add more navbar items here */}
      </div>
    </>
  );
}

export default Navbar;