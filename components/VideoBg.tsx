import React from 'react'

import Link from 'next/link';

const VideoBg = () => {
  return (
    <div className='main relative w-full '>
        {/* <div className="overlay"></div> */}
        <Link href={'/auth'} className='absolute top-[50%] left-[50%] -translate-x-[50%] bg-mainColor/50 hover:bg-mainColor transition-all text-white px-4 py-2 rounded-xl font-semibold text-lg  z-[5] -translate-y-[50%] '>
          Advertise with us
        </Link>
        <video src="/E-1.mp4" className='' autoPlay loop muted />
        {/* <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div> */}
    </div>
  )
}

export default VideoBg;