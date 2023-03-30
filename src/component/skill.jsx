import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";

const Skill = () => {
  return (
    <div id='skill' className='my-5'>
        <h1 className='text-center text-2xl font-bold text-black'> My Skills</h1>
        <div className="text-black text-lg grid grid-cols-2 justify-evenly items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:h-40 my-5 bg-gray-100 w-full">
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center my-5">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        React js
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Next js
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Node js
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Express js
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Java
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Spring Boot
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        Tailwindcss
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        JavaScript
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
       Flutter
      </div>
      <div className=" rounded-md w-28 h-24 bg-gray-50 flex justify-evenly items-center">
        
        <span className="text-2xl text-green-600">
          <BsFillCheckCircleFill />
        </span>
        FireBase
      </div>
    </div>
    </div>
    
  );
}

export default Skill
