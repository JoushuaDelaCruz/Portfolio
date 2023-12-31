import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen my-auto bg-gradient-to-b from-cyan-700 via-cyan-900 to-cyan-900 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-50'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with him</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/9b8be4f6-1180-447f-8472-7767c1a06312" className='flex flex-col w-full md:w-1/2'method='POST'>
                    <input type="text" name='name' placeholder="Enter your name" 
                    className='p-2 bg-transparent border-2 rounded-md text-gray-50 focus:outline-none' />
                    <input type="text" name="email" placeholder="Enter your email" 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-r from-blue-900 to-blue-600
                    px-6 py-3 mx-auto my-3 flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact