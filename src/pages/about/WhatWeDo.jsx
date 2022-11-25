import React from 'react'

function WhatWeDo() {
    const items = [
        {
            title: "Web Development",
            icon: "images/web.png",
            description:
                "Web development is the work involved in developing a website for the Internet or an intranet.",
        },
        {
            title: "Mobile Development",
            icon: "images/mobile.png",
            description:
                "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
        },
        {
            title: "Digital Marketing",
            icon: "images/digital-marketing.png",
            description:
                "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
        },

        {
            title: "Graphic Design",
            icon: "images/graphicdesign.png",
            description:
                "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
        },
    ];
  return (
      <div className='mt-10'>
          <h1 className='text-5xl  text-center text-secondary font-semibold'>What We Do</h1>
           
          <div className='bg-primary h-96 w-full mt-10 '>
              
          </div>

          <div className='grid grid-cols-4  gap-10 mx-3  -mt-48'>
              {items.map((item) =>(
                  <div className=' p-5 border shadow bg-white flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:selection:w-full'>
                      <img className='h-20 w-20'  src={item.icon} alt="" />
                      <h1 className='text-2xl'>{item.title}</h1>
                      <p className='text-gray-600 text-md'>{ item.description}</p>
                  </div>
              ))}
            
          </div>
        
     </div>
  )
}

export default WhatWeDo