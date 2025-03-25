import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

 const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

 //early return pattern
 if(!isMenuOpen) return null;

  return (
    <div className='w-48 p-5 shadow-xl'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            
        </ul>
        <h1 className='font-bold pt-5 '>Subscription</h1>

        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5 p'>Watch Later</h1>
        <ul className=''>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar;