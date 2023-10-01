import React from 'react'

const About = () => {

  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-700 text-white md:relative'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-50'> About </p>
            </div>
            <p className='text-xl mt-20 text-start'>
            Joushua, currently in his fourth term of the Computer Systems Technology (CS) 
            program at the British Columbia Institute of Technology (BCIT), resides in 
            Vancouver, BC, where his enthusiasm for technology thrives. His fervor extends 
            not only to web development and mobile applications but also encompasses a deep-rooted 
            passion for front-end designs and back-end integration.
            innovation.
            </p>
            <br />
            <p className='text-xl text-start'> Furthermore, Joshua is actively 
            expanding his tech horizons by delving into cutting-edge areas like Robotic Process 
            Automation (RPA). This multidimensional approach to technology reflects his commitment 
            to continuous learning and his dedication to staying at the forefront of technological 
            </p>
        </div>
    </div>
  )
}

export default About