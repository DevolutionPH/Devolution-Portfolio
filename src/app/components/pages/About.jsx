import React from 'react';
import Image from 'next/image';
import zigzag from '../../../images/pseudo.png';
import who from '../../../images/who.png';
import aboutImg from '../../../images/about-us.png';
import checkIcon from '../../../images/check.png';

const services = ["Tech Solutions", "IT Consulting", "Web Solutions", "Business Growth", "Product Design"];

const About = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto max-w-7xl py-40'>
      <div className='w-1/2'>
        <div className='flex justify-center flex-col items-center'>
          <div className='flex flex-col gap-3'>
            <Image alt='zigzag' src={zigzag} />
            <Image alt='devolution' src={who} />
          </div>
          <h2 className='text-white text-3xl relative -top-10 font-bold'>We&apos;re Awards Winning Modern Business Solutions Agency</h2>
          <p className='text-gray-400 text-sm leading-loose'>
            Our forward-thinking strategies and client-centric approach, our award-winning modern business solutions agency consistently delivers transformative results that propel our clients towards success in today&apos;s dynamic market landscape.
          </p>
          <div className='flex gap-2 flex-wrap py-5'>
            {services.map((service, index) => (
              <div key={index} className='flex items-center gap-2 gray-custom-bg p-2 rounded-md'>
                <Image src={checkIcon} alt='check' />
                <p className='text-white text-xs'>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
        <Image src={aboutImg} alt='about us' className='w-[70%]' />
      </div>
    </div>
  );
};

export default About;
