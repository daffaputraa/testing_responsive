import React from 'react'
import {logo} from '../assets'
import { navItem } from '../constants'
import {Button} from '../components'
const Navbar = () => {
  return (
    <nav className='z-10 px-[24px] md:px-[72px] relative sm:flex mb-[72px] items-center justify-between sm:px-16 pt-[42px]'>
      <img src={logo} alt="" srcset="" />
        <div className="w-full ">
            <ul className='hidden md:flex w-full items-center justify-center font-poppins  font-regular gap-[50px] text-base  text-white'>
                {navItem.map((item, index) =>(
                  <li href="" key={item.id}>
                    <a href="" className='text-slate-500 hover:text-white hover:transition-all hover:duration-150'>{item.title}</a>
                  </li>
                ))}
            </ul>            
        </div>
        <div className='md:flex hidden'>
          <Button />
        </div>
    </nav>
  )
}

export default Navbar