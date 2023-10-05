import React from 'react'

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          title: 'Neartuit - Mobile App',
          description: 'A flutter app demonstration of ODEN to display public art data from around the world',
          link: 'https://github.com/OpendataDeveloperNetwork/ODEN-DEMO-APP-Public-Art'
        },
        {
          id: 2,
          title: 'LinkMorpher - Web App',
          description: 'JS app to create texts and images links while also providing a url shortener',
          link: 'https://github.com/JoushuaDelaCruz/COMP4921_Project1_Group9_Joushua_Prince'
        },
        {
          id: 3,
          title: 'PDF Summarizer - Python Script',
          description: 'A python script that summarizes pdf files using the ChatGPT API',
          link: 'https://github.com/JoushuaDelaCruz/PythonPersonalProjects/tree/main/pdf_summarizer'
        },
        {
          id: 4,
          title: 'Interview - Web App',
          description: 'A web app to practice your interview skills with ChatGPT API',
          link: 'https://github.com/JoushuaDelaCruz/Drinking-Wine---Hackathon'
        },
        {
          id: 5,
          title: 'Sustainably - Web App',
          description: 'A web app to reward users for their sustainable actions',
          link: 'https://github.com/ebauss/2800-202210-DTC15'
        },
        {
          id: 6,
          title: 'Rainbow - Terminal App',
          description: 'A text-adventure game in the terminal using python',
          link: 'https://github.com/BCIT-CST-DTC-Chris/assignment-4-JoushuaDelaCruz'
        },
      ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-cyan-700 via-cyan-900 to-cyan-900 w-full text-white min-h-screen'>
        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 max-w-screen text-center'>
                <h1 className='text-4xl font-bold inline border-b-4 border-gray-50'>Portfolio</h1>
                <p className='py-6'>Check out some of his work</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id, title, description, link}) => {
                        return (
                                <div key={id} className='py-6 px-4 shadow-md shadow-gray-400 border-2 border-gray-500 rounded-lg'>
                                    <h2 className='font-semibold mb-4 text-lg'> {title} </h2>
                                    <p className='font-base mb-4'> {description} </p>
                                    <div className='flex items-center justify-end'>
                                        <a href={link} className='px-6 py-3 m-4 border-2 rounded-md duration-200 hover:scale-105 hover:bg-white hover:text-black'> Code </a>
                                    </div>
                                </div>
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio