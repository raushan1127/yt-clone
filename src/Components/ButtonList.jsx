import React from 'react'
import Button from './Button'

const ButtonList = () => {

const buttonName = ["All","Shark Tank", "Music", "Podcast","Mixes", "Protein", "Calisthenics","News", "Computer Programming","Live","Colleges","Dumbells","Playlist"]


  return (
    <div className='flex'>
        {buttonName.map((b) => { 
            return <Button name = {b} />
})}
    </div>
  )
}

export default ButtonList