//rafce  
import React from 'react'
import angular from '../assets/experience/angular.png'
import bootstrap from '../assets/experience/bootstrap.png'
import css from '../assets/experience/css-3.png'
import hashtag from '../assets/experience/hashtag.png'
import html from '../assets/experience/html-5.png'
import primeng from '../assets/experience/primeng.png'
import sql from '../assets/experience/sql-server.png'
import tailwind from '../assets/experience/tailwind.png'
import react from '../assets/experience/react.png'
const Experience = () => {

    const experience = [
        {
            id: 1,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-500'
        },
        {
            id: 2,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: hashtag,
            title: 'C#',
            style: 'shadow-gray-500'
        },
        {
            id: 5,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: primeng,
            title: 'Primeng',
            style: 'shadow-red-500'

        },
        {
            id: 7,
            src: sql,
            title: 'SQL Sever',
            style: 'shadow-white'
        },
        {
            id: 8,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
    ];
    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    

            <div >
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I have worked with</p>
            </div>

            <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
               
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        experience.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                        ))
                    }
                  
                </div>
                </div>
            </div>
        </div>
    )
}

export default Experience