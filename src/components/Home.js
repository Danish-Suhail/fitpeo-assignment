import React, { useState } from 'react'
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa'
import Dashboard from './Dashboard';
import '../App.css'


const Home = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-center items-center'>
      <button>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-black lg:hidden mt-5">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav ? <div className = 'lg:hidden fixed z-10 top-16 left-0 px-2 bg-[#00004d] md:w-4/12 w-6/12 h-screen'><Dashboard className = ' w-screen' /></div> : ""}
      </button>
        <div className='flex justify-between w-11/12 mt-4 '>
            <span>Hello Shahrukh&nbsp;👋🏻,</span>
            <div className='flex items-center bg-white lg:h-[30px] h-[25px] lg:w-auto w-[100px] rounded'>
            <FaSearch className='bg-white h-[20px] ml-2'/>
            <input className='border-0 h-auto w-full outline-none' placeholder = 'search...' />
            </div>
        </div>
    </div>
  )
}

export default Home