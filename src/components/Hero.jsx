import React, { useRef, useState } from 'react'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null)
  const handleVdClick=()=>{
   setHasClicked(true)
   setCurrentIndex((prevIndex) => prevIndex+1)
  }
  return (
    <div className='w-screen h-dvh relative overflow-x-hidden '>
      <div id='video-frame' className='w-screen relative h-dvh bg-blue-75 rounded-lg overflow-hidden z-10 '>
        <div>
          <div className='mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleVdClick} className='origin-center'>
              MiniVideoPlayer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
