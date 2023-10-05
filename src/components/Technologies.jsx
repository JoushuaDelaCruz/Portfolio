import React from 'react'
import bootstrap from '../assets/bootstrap-logo.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import mysql from '../assets/mysql.png'
import java from '../assets/java.png'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import tailwind from '../assets/Tailwind.png'
import Uipath from '../assets/UiPath_Logo.png'

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 12,
            src: Uipath,
            title: "Uipath RPA",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            src: java,
            title: "JAVA",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 7,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: python,
            title: "Python",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: node,
            title: "Node JS",
            style: "shadow-green-500"
        },
        {
            id: 3,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-600"
        },
        {
            id: 6,
            src: mongodb,
            title: "Mongo DB",
            style: "shadow-green-500"
        },
        {
            id: 10,
            src: react,
            title: "React JS",
            style: "shadow-indigo-500"
        },
        {
            id: 5,
            src: js,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 11,
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-indigo-500"
        },
        
    ] 
  return (
    <div name="technologies" className='w-full min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-900 to-cyan-700 text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-center'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-50 p-2 inline'> Technologies </p>
                <p className='py-6'> Technologies he has worked with </p>
            </div>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-gray-50'>
                {technologies.map(({id, src, title, style}) => {
                    return <div id={id} className={'flex flex-col items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 py-4 rounded-lg ' + style}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default Technologies