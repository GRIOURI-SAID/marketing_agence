import React from 'react'

function MarketingStrategires() {

    const strategies = [
        {
            title: "CONTENT MARKETING",
            description:
                "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
            image: "images/content-marketing.png",
        },
        {
            title: "INBOUND MARKETING",
            description:
                "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
            image: "images/inbound-marketing.png",
        },
        {
            title: "SOCIAL MEDIA",
            description:
                "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
            image: "images/social-media.png",
        },
        {
            title: "SEARCH ENGINE OPTIMIZATION",
            description:
                "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
            image: "images/seo.png",
        },
    ];
  return (
      <div className='px-10'>
          <h1 className='text-4xl text-primary font-semibold '>Want to Boost your business growth ?</h1>
          <h1 className='text-7xl text-primary mt-5' >The <b className='text-secondary'>Solution </b> is here</h1>
          <p className='mt-5 text-gray-600 text-xl '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa fugiat eos vero recusandae asperiores nesciunt numquam quas, nihil neque sint modi nostrum eveniet quisquam ad. Repellat facere veritatis quo.
          </p>

          <div className='grid grid-cols-2 gap-3 mt-10 '>
              {strategies.map((item) => {
                  return (
                      <div className='border border-primary p-5 flex flex-col space-y-10 mt-4 transform hover:scale-95 duration-100'>
                          <h1 className="mx-20 sm:mx-5 text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2">{item.title}</h1>
                          <img className='h-24 w-24 text-center' src={item.image} alt="" />
                          <p className='text-gray-600 text-md'>{ item.description}</p>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default MarketingStrategires