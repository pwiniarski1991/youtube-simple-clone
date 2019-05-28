import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoChange }) => {
    console.log('videos: ', videos);
    return (
        <ul className="col-md-4 list-group">
            {videos.map(video => (
            <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoChange} />
            ))}
        </ul>
    )
}

export default VideoList;
