import React from 'react'

function WhyMaeketing() {
  return (
      <div className='mt-10  px-10 '>
          <h1 className='text-7xl text-center font-semibold'>Why <b className=' text-secondary'>Marketing</b></h1>

          <div className='h-[500px]'>
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ecsh092g.json" background="transparent" speed="1"  loop  autoplay></lottie-player>
          </div>
          <p className='text-gray-600 text-md mt-5'>
              Do you know what your customers want? Do you think your customers trust
              your products? When was the last time you saw a customer tweeting about
              your product or service? Was it a complaint or compliment?
          </p>
          <h1 className='mt-10 text-4xl font-semibold text-primary'>The answers to all these questions lie in marketing.</h1>

          <p className='text-gray-600 text-md mt-5'>
              How you market your business determines if the enterprise will be
              successful or not. Marketing is a tool used to create and maintain
              demand, relevance, reputation, competition and more. Without it, your
              business is likely to close down due to lack of sales.
          </p>
    </div>
  )
}

export default WhyMaeketing