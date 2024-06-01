import React from 'react'

//pages
import Introduction from './pages/Introduction';
import Features from './pages/Features';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Seo from './pages/Seo';


const Container = () => {
  return (
    <div className='bg-purple '>
      <Introduction />
      <Features />
      <About />
      <Services />
      <Project />
      <Seo />
    </div>
  )
}

export default Container