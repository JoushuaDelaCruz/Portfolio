import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-cyan-700 via-cyan-800
    to-cyan-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-baseline justify-center h-full 
      px-4 md:flex-row text-center'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white text-center'>Joushua Dela Cruz</h2>
          <p className='text-gray-50 py-4 text-center font-bold text-center'>
          CS student at BCIT | Aspiring Software Engineer
        </p>
        <div className='flex justify-center'>
          <Link to='portfolio' smooth duration={500} className='group flex text-white w-fit px-6 py-3 my-2 items-center self-center justify-center rounded-md bg-gradient-to-r from-blue-900 to-blue-600'> 
          Portfolio <span className='group-hover:rotate-90 duration-300'>
            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> 
            </span> 
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home