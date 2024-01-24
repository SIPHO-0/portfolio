import React from 'react'

export const About = () => {
  return (
    <div name="about" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
         With over two years of professional experience as a Web Developer, I bring a diverse skill set and 
         a strong focus on software development and maintenance, particularly within cloud environments. 
         My proficiency extends to working with Restful APIs, .NET Framework 4.8, Typescript, Angular, 
         Capacitor for both Android and Apple platforms, as well as expertise in web technologies such as HTML, CSS, and 
         SQL Server. I am dedicated to delivering high-quality solutions and staying abreast of the latest developments 
         in the field to ensure optimal performance and innovation in my work.
        </p>

        <br/>

        <p className="text-xl ">In addition to my technical capabilities, I am deeply committed to delivering high-quality solutions 
            that meet and exceed client expectations. My dedication to staying abreast of the latest industry 
            developments ensures that I remain at the forefront of technological advancements. 
            This commitment to continuous learning enables me to provide innovative solutions and 
            maintain optimal performance in my work, contributing to the success of every project I undertake.</p>
    </div>
    </div>
  )
}

export default About