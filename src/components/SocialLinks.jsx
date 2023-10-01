import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {BsFillPersonLinesFill, BsPersonCircle, BsBriefcase} from 'react-icons/bs'
import {PiBooksLight} from 'react-icons/pi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {IoHomeOutline} from 'react-icons/io5'
import {Link} from 'react-scroll';


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkendIn <FaLinkedin size={30}/>
                </>
            ),
            link: "https://www.linkedin.com/in/joushua-dela-cruz-69922a252/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            link: "https://github.com/JoushuaDelaCruz",
        },
        {
            id: 3,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            link: "./resume.pdf",
            style: "rounded-br-md",
            download: true
        },
    ]

    const navigation = [
        {
            id: 0,
            child: (
                <>
                <IoHomeOutline size={30}/>
                </>
            ),
            link: 'home'
        },
        {
            id: 1,
            child: (
                <>
                <BsPersonCircle size={30}/>
                </>
            ),
            link: 'about'
        },
        {
            id: 2,
            child: (
                <>
                <BsBriefcase size={30}/>
                </>
            ),
            link: 'portfolio'
        },
        {
            id: 3,
            child: (
                <>
                <PiBooksLight size={30}/>
                </>
            ),
            link: 'technologies'
        },
        {
            id: 4,
            child: (
                <>
                <BiMessageRoundedDots size={30}/>
                </>
            ),
            link: 'contact'
        }
    ]

  return (
    <>
    <div className='hidden lg:flex col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, link, style, download}) => {
                return <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-blue-700 hover:ml-[-10px] hover:rounded-md duration-300 " + style}> 
                   <a href={link} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer"> 
                   {child}
                   </a> 
               </li>
            })}
        </ul>
    </div>
    <div className='hidden lg:flex top-[10%] right-1 fixed h-full'>
        <ul className='lg:flex flex-col justify-around items-center'>
            {navigation.map(({id, child, link}) => {
                return <Link to={link} smooth duration={500}> <li id={id} className="flex cursor-pointer justify-around flex-col items-center w-40 h-14 px-4 mr-[-30px] hover:mr-[-15px] hover:rounded-md duration-300 text-white"> 
                     {child}
                    <p className='capitalize'> {link} </p>
                    </li> 
            </Link>
            })};
        </ul>
    </div>
    </>
  )
}

export default SocialLinks