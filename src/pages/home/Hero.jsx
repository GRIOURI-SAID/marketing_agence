import React from 'react'

function Hero() {
  return (
      <div className=' grid grid-cols-2 h-screen items-center px-10'>
          <div className='flex flex-col items-center space-y-5'>
              <h1 className='text-7xl font-semibold text-primary'>The Best <br /> <b className='text-secondary'>Marketing</b></h1>
              <h1 className='text-4xl font-semibold'>Does't feel like marketing</h1>

              <button className='px-16 py-4 bg-secondary text-white text-xl'>Get Started</button>

             
          </div>

          <div className='p-10'>
              <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_zwn6fmnu.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
    </div>
  )
}

export default Hero