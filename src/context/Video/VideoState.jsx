import React, { useState } from 'react';
import VideoContext from './VideoContext';

const VideoState = (props) => {
  const [video, setVideo] = useState('wizeline');
  const [videoId, setVideoId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <VideoContext.Provider
      value={{
        video,
        setVideo,
        videoId,
        setVideoId,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoState;
