import React from 'react'

export function Contenedor({ children }) {
  return (
    <div className='mx-auto max-w-screen-lg bg-gray-300 bg-opacity-5 rounded-lg '>
        {children}
    </div>
  )
}

