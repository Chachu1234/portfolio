import React from 'react'

const Home = () => {
  return (
    <div className=" flex  flex-col justify-center items-center w-full sm:m-5 bg-gray-50  h-96">
      <div className="flex justify-center items-center p-5">
        <img
          className=" bg-gray-400 flex justify-center items-center object-cover rounded-full w-36 h-36 border-black sm:float-left"
          src="logo512.png"
          alt=""
        />
      </div>
      <h2 className="sm:px-10 px-3 text-black font-bold text-2xl ">Hi I am Here</h2>
      <h3 className="sm:px-10 px-3 text-gray-700 sm:font-bold sm:text-lg capitalize underline">
        my name is chalachew tsegaye
      </h3>
      <p className="text-gray-500 text-lg sm:px-96 px-3 text-center ">
        I am passisonated in web and mobile app development. most of the time ,
        I passed in dig out in practicing and reading different source of both
        web and mobile app development
      </p>
    </div>
  );
}

export default Home