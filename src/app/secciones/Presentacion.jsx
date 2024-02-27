import React from 'react'
import Link from 'next/link'

export function Presentacion() {
  return (
    <>
    <div className='flex align-middle justify-between sm:text-2xl  my-5 bg-gray-400 bg-opacity-40 p-3 px-8 rounded-md '>
    <div>Jonnathan Torres</div>
    <div>Portafolio</div>
    </div>


    <div className='mx-12 text-justify my-5 sm:text-lg font-medium opacity-90'>
        Hi, I am Jonnathan Torres. Civil Enginner who has learned coding.<br/>
        Why did I decide to learn coding? Well, I find it an exciting industry. I mean, you can contribute to the AEC industry, making it more 
        competitive and productive. Coding helps us to create plugins, scripts, and more that assist the industry in expanding.

        
    </div>

    <Link href='https://mampro-web.vercel.app/'>
        <div className='rounded-lg bg-gray-400 bg-opacity-30 mx-12 my-5 p-5 text-justify'>
            <div className='text-orange-500 font-bold sm:text-xl mb-4'>
            How did I learned coding ?
            </div>
            <div className='text-justify sm:text-lg'>
            It started because I liked the idea of automation. So, I learned Python. Being curious, I watched a lot of videos on YouTube. I used to hear about JavaScript, Node.js, React, C sharp, Next.js. I did not understand what those were; it was new terminology for me. So, I started researching them. I took courses on C sharp, HTML, CSS, JavaScript, React, C++, and web development. These courses gave me a better understanding of programming. New concepts
            came to me, such as object-oriented programming, functional programming, declarative programming, and imperative programmin<br/>

            <br/>
            Now, I am looking for an opportunity to solve real-world problems. I consider myself a problem solver, and I also have the ability for self-learning.
            </div>
        </div>
    </Link>

   
    </>

    )
}

