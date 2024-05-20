import React from 'react'

const NetBg = () => {
    const divsy = [];

    for (let i = 1; i <= 20; i++) {
        divsy.push(<div className="w-full h-full border border-gray-400" key={i}>{i}</div>);
    }

  return (
    <div className='w-full h-screen absolute bg-purple -z-10'>
        <div className='flex w-full justify-between h-full absolute opacity-5'>
            {divsy}
        </div>
        <div className='flex flex-col w-full h-full justify-between absolute opacity-5'>
            {divsy}
        </div>
        <div className='vector1'>
            wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw  wweaw wweaw wweaw wweaw wweaw wweaw wweaw wweaw
        </div>
    </div>
  )
}

export default NetBg;