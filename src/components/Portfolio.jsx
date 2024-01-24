import React from 'react'
//rafce
import blog from '../assets/portfolio/blog.png'
import crud from '../assets/portfolio/crud.png'
import toDo from '../assets/portfolio/toDo.png'
import invoice from '../assets/portfolio/invoice.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: blog
    },
    {
      id: 2,
      src: crud
    },
    {
      id: 3,
      src: toDo
    },
    {
      id: 4,
      src: invoice
    },
  ];
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
              <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
             
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm-px-0">
                  {portfolios.map(({id, src}) => (
                <div   key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
                </div>  
           
              ))}
                </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolio