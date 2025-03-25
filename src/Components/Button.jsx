import React from 'react'

const Button = ({ name }) => {
  return (
    <div className=' bg-gray-200 rounded-lg shadow-lg border-0 mx-1'>
       <button className='px-5 py-1  text-sm'>{name}</button>
    </div>
  )
}

export default Button