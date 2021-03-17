import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import MessageIcon from "@material-ui/icons/Message"
import  FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'


function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ):(
                    <FavoriteBorderIcon fontSize="large"
                    onClick={(e) => setLiked(true)} />
                )}
                <p>{ liked? likes + 1 : likes }</p>
            </div>
            <div className="videoSidebar__button">
                {liked? (
                    <MessageIcon fontSize="large" onClick={(e) => setLiked(false)} />
                    ):(
                        <MessageIcon fontSize="large"
                    onClick={(e) => setLiked(true)} />
                )}
                
                <p>{ liked? shares + 1 : shares }</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{ liked? messages + 1 : messages }</p>
            </div>
        </div>
    )
}

export default VideoSidebar
