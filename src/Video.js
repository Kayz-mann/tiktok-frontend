import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url,channel, description, song, likes, shares, messages }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div  className="video">
            <video ref={videoRef} onClick={handleVideoPress}
            loop className="video__player" src={url}></video>
         
         
         <VideoFooter channel={channel} description={description} song={song}  />
         <VideoSidebar likes={likes} shares={shares} messages={messages} />
            
        </div>
    )
}

export default Video


// https://www.w3docs.com/build/videos/arcnet.io(7-sec).mp4