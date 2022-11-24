import React from 'react'
import Layout from '../../layout/Layout'
import Hero from './Hero'
import MarketingStrategires from './MarketingStrategires'
import WhyMaeketing from './WhyMaeketing'

function Home() {
  return (
    <Layout>
      <Hero />
      <MarketingStrategires />

      <WhyMaeketing  />


    </Layout>
    
  )
}

export default Home