import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'technologies',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]
  return (
    <div className='flex justify-end items-center w-full h-20 text-white fixed bg-transparent px-4'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-50 md:hidden'>
            {nav ? <FaTimes size={30} className='text-3xl'/> : <FaBars size={30} className='text-3xl'/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full 
            h-screen bg-gradient-to-b from-cyan-900 via-cyan-900 to-cyan-500 text-gray-50'>
                {links.map(({id, link}) => {
                    return <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'
                    >
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>  
                })} 
            </ul>
        )}
    </div>
  )
}

export default NavBar