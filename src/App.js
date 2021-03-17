import { useState, useEffect } from "react";
import axios from './axios';
import './App.css';
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;

    }

    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      {/* app container  */}
      {/* list of videos */}

      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        ))}
        {/* <Video url="http://html5videocreator.github.io/data/images/happyfit2.mp4"
        channel="Kayzmann"
        description="another banger"
        song="omo iya mi -- mp4"
        likes={224}
        messages={444}
        shares={56}
         /> */}
      
      </div>
      
    </div>
  );
}

export default App;
