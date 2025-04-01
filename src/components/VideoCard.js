import React from 'react';

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    const { viewCount } = statistics;  

  return (
    <div className='p-2 m-2 w-72 cursor-pointer hover:bg-gray-100'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url}/>
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard