import React from 'react'
import {ImageHeader} from '../assets'

const HeaderImage = () => {
  return (
    <section className='heroImage w-full'>
      <div className='absolute left-1/2 top-3/4 rounded-full w-[500px] h-[500px] blur-[300px] bg-blue-500'></div>
      <div className="fit relative bg-white bg-opacity-5 backdrop-blur outline-[2px] rounded outline-white w-fit pt-[64px] pb-[34px] px-8 mx-auto">
        <input type="text"  className='text-white bg-black'/>
        <div className='flex justify-center'>
          <img src={ImageHeader} className='max-w-[946px] w-full ' alt="" srcset="" />
        </div>
      </div>
    </section>
  )
}

export default HeaderImage