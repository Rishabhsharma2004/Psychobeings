import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import ImageSection from '../components/ImageSection'

const Home = () => {
  return (
    <>
    <div className='text-lg'>
      <Hero/>
      <WhatWeDo/>
      <ImageSection/>
      <Testimonials/>
      <FAQ/>
    </div>
    </>
  )
}

export default Home
