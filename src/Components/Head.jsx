import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());

  };


  return (
    <div className='grid grid-flow-col pl-3 shadow-lg py-2'>
        <div className='flex col-span-1 p-2'>
            <img onClick={() => toggleMenuhandler()} className='w-9 cursor-pointer ' src='https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg'>
            </img>
            <img className='w-10 h-9 ml-8 ' src='https://pngimg.com/uploads/youtube/youtube_PNG102352.png'>
            </img>
        </div>
        <div className='col-span-10 pl-74 '>
            <input  type='text' placeholder='Search' className='bg-slate-100 rounded-l-full px-60 border-b-slate-500 border-1 p-2 '></input>
            <button className='rounded-r-full border-1  py-2 px-5'>🔍</button>
        </div>
        <div className='pt-2 col-span-1'>
            <img  className='w-10 h-8' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'>
            </img>
        </div>

    </div>
  )
}

export default Head