import React from 'react'
import Video from '../../assets/Video.mp4'
import './videoPlayer.css'
import VideoJS from './VideoJS'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
//import Control from './Control'

const VideoPlayer = () => {

    const videoJsOptions ={
        controls: true,
        sources: [{
            src: Video,
            type: 'video/mp4'
        }]
    }

    return (
        <div className='home-container'>
            <LeftSidebar />
            <div>
                <VideoJS options={videoJsOptions} />
            </div>
        </div>
    )
}

export default VideoPlayer