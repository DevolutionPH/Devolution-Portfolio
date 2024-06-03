import React from 'react';
import Image from 'next/image';
import factImg  from '../../../images/fact.png';
import zigzag from "../../../images/pseudo.png";
import playIcon from "../../../images/play.png";
import handShake from "../../../images/handshake.png";
import formal from "../../../images/formal.png";
import groupofPeople from "../../../images/group-people.png";
import simpleBox from "../../../images/box-awang.png"

const achievementData = [{
    icon: handShake,
    numbers: "150+",
    title: "Project Completed"
}, {
    icon: formal,
    numbers: "250+",
    title: "Satisfied Clients"
}, {
    icon: groupofPeople,
    numbers: "50+",
    title: "Expert Teams"
}]

const Achievement = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl py-40 flex-col'>
        <div className='flex items-center justify-between'>
            <div className='flex justify-center flex-col mx-auto px-10 w-1/2'>
                <div className='flex flex-col gap-3'>
                    <Image alt='devolution' src={factImg} className='w-1/2'/>
                </div>
                <Image alt='zigzag' className='relative -top-16 left-5' src={zigzag}/>
                <h2 className='text-white text-2xl relative -top-12 left-5 font-bold'>Manage Business SEO<br /> Optimization Easily</h2>
                <p className='text-gray-400 text-sm mb-5'>Our relentless pursuit of excellence and our ability to thrive in challenging market conditions.</p>
            </div>
            <div className='relative w-1/2 
                    before:w-[200px] before:h-[200px] before:bg-[#35475f0c] before:block before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full 
                    after:w-[60px] after:h-[60px] after:bg-gray-200 after:block after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full'>
                <Image alt='play-icon' className='absolute top-1/2 left-[50.5%] transform -translate-x-1/2 -translate-y-1/2 z-10' src={playIcon}/>
            </div>
        </div>
        <div className='flex gap-10 p-5'>
            {achievementData.map((data, index) => (
                <div key={index} className='relative flex'>
                    <Image alt='box' src={simpleBox} className=''/>
                    <div className='flex flex-col justify-center items-center z-10 absolute h-full gap-3'>
                        <Image alt='icon-handshake' src={data.icon} className='w-[15%]' />
                        <h3 className='text-white font-semibold'>{data.numbers}</h3>
                        <p className='text-white'>{data.title}</p>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Achievement