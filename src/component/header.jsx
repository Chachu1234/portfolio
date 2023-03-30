import React, { useState } from 'react'
import { Link , animateScroll as scroll} from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [clicked, setClicked]= useState(false)
const changeHandler=(e)=>{
  setClicked(!clicked)
}
   
  return (
    <div
      className={`sm:sticky sm:top-0 sm:left-0 sm:flex-row sm:justify-between sm:items-center sm:text-black sm:bg-gray-100 sm:p-10 sm:h-3 bg-gray-700 text-white ${
        clicked
          ? "flex flex-col items-center justify-between "
          : "flex items-center justify-between "
      }  sticky top-0 left-0 w-full cursor-pointer shadow-md `}
    >
      <div className="sm:flex sm:justify-center sm:items center  flex flex-col justify-center items-center ">
        <h3 className="text-md sm:text-black font-semibold text-2xl sm:text-xl sm:font-bold text-white capitalize">
          <Link onClick={() => scroll.scrollToTop()}>developed by chachu</Link>
        </h3>
      </div>
      <div
        className={`sm:flex sm:justify-center sm:items-center bg-gray-400 sm:bg-gray-100  ${
          clicked ? "flex flex-col justify-center items-center w-full my-1" : "hidden"
        } `}
      >
        <ul className="flex flex-col justify-center items-center text-black  sm:flex-row sm:justify-center sm:items-center sm:gap-5 gap-5 py-2">
          <li>
            <Link onClick={() => scroll.scrollToTop()}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={300}>
              Project
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={300}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="testinomial" smooth={true} duration={300}>
              Testinomial
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={300}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={`sm:hidden text-3xl ${clicked ? 'absolute top-1 right-1' : 'pr-1'}`} onClick={changeHandler}>
        { clicked? <button><AiOutlineClose/></button>  : <button><GiHamburgerMenu /></button> }
      </div>
    </div>
  );
}

export default Header