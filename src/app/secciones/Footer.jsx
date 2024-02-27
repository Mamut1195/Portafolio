import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa"

import Link from 'next/link';

export function Footer() {
  return (
    <div className='flex flex-col  items-center gap-5 sm:text-lg  my-5 bg-gray-950  p-3 px-8 opacity-40 '>
    <div> Jonnathan Torres © - 2024 </div>
    <div className='flex space-x-9 text-xl'>
      <Link href= 'https://wa.me/539987890084' className='hover:scale-125 hover:bg-orange-950 bg-opacity-20 p-2 rounded-xl'>
        <BsWhatsapp /> 
      </Link>
      <Link href='mailto:joftv1108@gmail.com' className='hover:scale-125 hover:bg-orange-950 bg-opacity-20 p-2 rounded-xl'>
        <SiGmail />
      </Link>
      <Link href='https://www.instagram.com/mamut1195/' className='hover:scale-125 hover:bg-orange-950 bg-opacity-20 p-2 rounded-xl'>
        <GrInstagram />
      </Link>
      <Link href='https://github.com/Mamut1195' className='hover:scale-125 hover:bg-orange-950 bg-opacity-20 p-2 rounded-xl'>
        <FaGithub />
      </Link>
    </div>
    </div>
  )
}

