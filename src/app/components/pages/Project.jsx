import React from 'react'
import Image from 'next/image';

import ProjectImg from "/Projects.png";
import zigzag from "/pseudo.png";

//project images
import projectImg1 from "/project-1.jpg";
import projectImg2 from "/project-2.jpg";
import projectImg3 from "/project-3.jpg";

const projectData = [{
  projectImage: projectImg1,
  title: "Marketing",
  subTitle: "Tech Website Solution"
}, {
  projectImage: projectImg2,
  title: "Technology",
  subTitle: "App platform Integration"
}, {
  projectImage: projectImg3,
  title: "Software",
  subTitle: "Software tools development"
}]


const Project = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl py-40 flex-col'>
      <div className='flex justify-center flex-col items-center mx-auto'>
            <div className='flex flex-col gap-3'>
                <Image alt='devolution' src={ProjectImg}/>
            </div>
            <Image alt='zigzag' className='relative -top-20' src={zigzag}/>
            <h2 className='text-white text-3xl relative -top-16 text-center font-bold'>Checkout our Recently Completed Projects</h2>
      </div> 
      <div className='flex gap-3'>
        {projectData.map((project, index) => (
            <div key={index} className='relative w-[33%]'>
              <Image alt='' className='' src={project.projectImage}/>
              <div className='flex flex-col text-white absolute bottom-5 left-5'>
                <div className='bg-blue-700 p-3 flex justify-center w-[50%]'>
                  <p className='text-xs'>{project.title}</p>
                </div>
                <div className='gray-custom-dark-bg p-5 flex justify-center w-[80%]'>
                  <p className=''>{project.subTitle}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project