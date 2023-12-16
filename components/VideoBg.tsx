import React from 'react'

const VideoBg = () => {
  return (
    <div className='main relative w-full '>
        {/* <div className="overlay"></div> */}
        <video src="/E-1.mp4" className='' autoPlay loop muted />
        {/* <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div> */}
    </div>
  )
}

export default VideoBg;