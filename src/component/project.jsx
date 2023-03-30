import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <h2 className="text-black sm:text-2xl text-center text-md pt-5 font-bold">
        Projects
      </h2>
      <div className="sm:grid sm:grid-cols-4 sm:gap-5 sm:m-5 flex flex-col justify-center items-center my-5">
        <div className="flex justify-center items-center rounded-md my-5 sm:rounded-lg bg-gray-300 h-64 w-full">
          <h3 className="text-black text-md sm:text-2xlfont-semibold bg-red-500">
            project 1
          </h3>
        </div>
        <div className="flex justify-center items-center rounded-md my-5 sm:rounded-lg bg-gray-300 h-64 w-full ">
          <h3 className="text-black text-md sm:text-2xlfont-semibold bg-red-500">
            project 2
          </h3>
        </div>
        <div className="flex justify-center items-center rounded-md my-5 sm:rounded-lg bg-gray-300 h-64 w-full">
          <h3 className="text-blacktext-md sm:text-2xl font-semibold bg-red-500">
            project 3
          </h3>
        </div>
        <div className="flex justify-center items-center rounded-md my-5 sm:rounded-lg bg-gray-300 h-64 w-full">
          <h3 className="text-black text-md sm:text-2xl font-semibold bg-red-500">
            project 4
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Project