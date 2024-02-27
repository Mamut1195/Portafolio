import Link from 'next/link'
import React from 'react'

export function Proyectos() {
  return (
    <div>
        <Link href='https://mampro-web.vercel.app/'>
        
            <div className='sm:text-2xl font-bold flex justify-center py-6 text-orange-500  tracking-wider'>Projects</div>
                <div className='rounded-lg bg-gray-600 bg-opacity-50 mx-10 my-2 p-5'>
                    <h2 className='font-semibold sm:text-xl py-2 pb-4'>MAMPRO BLOG</h2>
                    <ul className='flex gap-2 text-xs sm:text-sm'>
                        <li className='bg-green-700 px-2 py-1 rounded-xl '> Javascript</li>
                        <li className='bg-green-700 px-2 py-1 rounded-xl '> Next </li>
                        <li className='bg-green-700 px-2 py-1 rounded-xl '> HTML</li>
                    
                        <li className='bg-green-700 px-2 py-1 rounded-xl '> Tailwind</li>
                        <li className='bg-green-700 px-2 py-1 rounded-xl '> Git</li>
                    </ul>
                <div className='py-4 sm:text-lg text-justify'>In this project, I created a blog using Next.js. Notion was used as a CMS. The challenge here 
                was to learn how to use Notion as a CMS. A lot of documentation and YouTube videos helped me in this task </div>
            </div>
        </Link>

        <div className='rounded-lg bg-gray-600 bg-opacity-50 mx-10 my-2 p-5'>

            <h2 className='font-semibold sm:text-xl py-2 pb-4' >NEC SPECTRUM</h2>
            <ul className='flex gap-2 text-xs sm:text-sm'>
                <li className='bg-green-700 px-2 py-1 rounded-xl '> Python</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '> Etabs API</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '>Tkinker</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '> Git</li>
            </ul>
            <div className='py-4 sm:text-lg text-justify'>The goal here was to learn the basics of Tkinter.
            I created a user interface that generates the seismic spectrum for Ecuador. </div>
        </div>

        <div className='rounded-lg bg-gray-600 bg-opacity-50 mx-10 my-2 p-5'>
        
            <h2 className='font-semibold sm:text-xl py-2 pb-4'>EXTRACTING DATA FOR STRUCTURAL ANALISYS</h2>
            <ul className='flex gap-2 text-xs sm:text-sm'>
                <li className='bg-green-700 px-2 py-1 rounded-xl '> Python</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '>Etabs API</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '>Tkinter</li>
                <li className='bg-green-700 px-2 py-1 rounded-xl '>Git</li>
            </ul>
            <div className='py-4 sm:text-lg text-justify'>
            A lot of data is generated during a Non-Linear Analysis. Here, I helped a colleague filter 1 million data in order to perform a more advanced analysis. I had to research the API documentation and also ask in a forum. 
            In this project, pandas and matplotlib libraries were used.
            </div>
        </div>

    </div>
  )
}

