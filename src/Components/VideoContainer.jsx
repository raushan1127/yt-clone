import React, { useEffect, useState } from 'react'
import Video from './Video'

const VideoContainer = () => {

const [videos, setVideos] = useState([])

 useEffect(() => {
        getVideos();
    },[])

    const getVideos = async () => {
    const data = await fetch("YOUTUBE_API_VID")
    const json = await data.json();
    setVideos(json.items)
    }

  return (
    <div>   
        <Video  />
    </div>
  )
}

export default VideoContainer