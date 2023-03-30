import React from 'react'
// import {Route, Routes } from 'react-router-dom'
import About from './component/about'
import Contact from './component/contact'
import Header from './component/header'
import Home from './component/home'
import Project from './component/project'
import Skill from './component/skill'
import Testinomial from './component/testinomial'

const App = () => {
  return (
    <div className=" bg-gray-50 m-5 scroll-smooth">
      <Header />
      <Home />
      <About />
      <Project />
      <Skill />\
      <Testinomial />
      <Contact />
      {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/skill" element={<Skill />} />
          <Route exact path="/testinomial" element={<Testinomial />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes> */}
    </div>
  );
}

export default App