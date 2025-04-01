import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);  
    useEffect(() => { 
        getVideos();
    }, [])

    const getVideos = async () => {
        const res = await fetch(YOUTUBE_VIDEOS_API);
        const data = await res.json();
        setVideos(data.items);
    }

    return (
        <div className='flex flex-wrap'>
            {videos?.map(video => <Link to={"/watch?v=" + video.id}  key={video?.id}><VideoCard info={video}/></Link>)}
        </div>
    )
}

export default VideoContainer