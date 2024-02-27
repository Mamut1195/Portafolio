import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';

export function Footer() {
  return (
    <div className='flex flex-col  items-center gap-5 sm:text-lg  my-5 bg-gray-950  p-3 px-8 opacity-40 '>
    <div> Jonnathan Torres © - 2024</div>
    <div className='flex space-x-9'>
      <Link href= 'https://wa.me/539987890084'>
        <BsWhatsapp /> 
      </Link>
      <Link href='mailto:joftv1108@gmail.com'>
        <SiGmail />
      </Link>
      <Link href='https://www.instagram.com/mamut1195/'>
        <GrInstagram />
      </Link>
    </div>
    </div>
  )
}

