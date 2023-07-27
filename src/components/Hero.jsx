import React from 'react'
import ButtonPrimary from './ButtonPrimary'


const Hero = () => {
  return (
    <section className='hero'>
      <div className="container w-full relative max-w-[922px] px-[24px] mx-auto">
        <div className="text mb-10 text-white font-poppins text-center">
          <h1 className='mb-4 ss:text-3xl sm:text-4xl md:text-5xl md:leading-normal text-2xl  font-light'>Boost your productivity with our <span className='font-medium'>streamlined note-taking</span> solution</h1>
          <p className='lg:px-40 sm:text-lg font-light leading-[34px] text-base text-slate-400'>Effortlessly access your notes from any device with our convenient cloud-based solution.</p>
        </div>
        <div className="button flex justify-center">
          <ButtonPrimary /> 
        </div>
      </div>
    </section>
  )
}

export default Hero