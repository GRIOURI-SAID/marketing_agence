import React from 'react'

function Hero() {
  return (
      <div className='min-h-screen p-10 bg-primary grid grid-cols-2 items-center'>
          <div className='h-[500px]'>
              <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_jimqos21.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
              ></lottie-player>
          </div>

          <div>
              <h1 className='text-9xl   font-semibold text-white sm:text-4xl'>We <b className='text-secondary'>work</b> together with our <b className='text-green-500'>clients</b></h1>
          </div>
      </div>
  )
}

export default Hero