import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div className='border-b border-gray-200 shadow-md shadow-indigo-200 mb-5 rounded-2xl'>
        <div className='flex justify-between items-center max-w-6xl mx-auto py-2 px-4 md:px-0 mt-1 mb-1'>
         <p className=' text-xl hover:scale-135 
               transition-all duration-500 cursor-pointer'><img src={Logo}/></p>
         <div className='flex space-x-5 md:space-x-10 zoom-transition'>
            <a href="#" className='text-gray-600 font-medium hover:text-[#61DBFB] hover:scale-135 
               transition-all duration-500 '>Home</a>
            <a href="#" className='text-gray-600 font-medium hover:text-[#61DBFB] hover:scale-135 
               transition-all duration-500 '>About</a>
            <a href="#" className='text-gray-600 font-medium hover:text-[#61DBFB] hover:scale-135 
               transition-all duration-500 '>Services</a>
            <a href="#" className='text-gray-600 font-medium hover:text-[#61DBFB] hover:scale-135 
               transition-all duration-500 '>Contact</a>
         </div>
         <button className='bg-[#61DBFB] text-white px-4 md:px-8 py-2.5 rounded-lg hover:bg-white border hover:border-[#61DBFB] hover:text-black transition duration-300 cursor-pointer'>
            Sign Up
         </button>
        </div>
    </div>
  )
}

export default Navbar