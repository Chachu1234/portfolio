import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="flex flex-col bg-gray-100  h-64 w-full sm:m-0 mt-10  justify-center items-center">
        <h1 className=" font-bold text-center sm:text-2xl sm:font-bold sm:p-3 p-2 text-lg">
          About
        </h1>
        <div>
          <p className=" text-lg text-gray-700 sm:px-96 px-3 leading-5 ">
            Hi I am chalachew and i am software engineerning student from bahir
            dar institute of technology (BIT). I am passisonated in web and
            mobile app development. i spend most of the time, in practicing
            (expermenting) and reading different source of both web and mobile
            app development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About