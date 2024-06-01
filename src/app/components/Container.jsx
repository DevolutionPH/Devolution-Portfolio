import React from 'react'

//pages
import Introduction from './pages/Introduction';
import Features from './pages/Features';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Seo from './pages/Seo';
import Achievement from './pages/Achievement';
import Client from './pages/Client';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


const Container = () => {
  return (
    <div className='bg-purple '>
      <Introduction />
      <Features />
      <About />
      <Services />
      <Project />
      <Seo />
      <Achievement />
      <Client />
      <Contact />
      <Footer />
    </div>
  )
}

export default Container