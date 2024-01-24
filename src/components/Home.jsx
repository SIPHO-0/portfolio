import React from 'react'
import SiphoImg from '../assets/SiphoImg.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    
    <div name="home" className="h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Full Stack Developer</h2>
                <p className="text-gray-500 py-4 max-w-md ">
                    I have 2+ years of experience in web development. Currently leading a team of developers, 
                    who are building what we call a hubspot for entrepruneurs using Angular, bootstrap, primeng, C# and SQLServer.
                    I am currently learning ReactJs, I am using React to build this portfolio.
                </p>
            <div>

            <Link to="portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                Portfolio
                <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
                
            </Link>
        </div>
        </div>
        <div>
            <img src={SiphoImg} alt="my profile" className="rounded-2xl mx-auto w-2/3 h-50 md:w-full"/>
        </div>
        </div>
    </div>
  )
}

export default Home