import React from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Video } from "@triyanox/react-video";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VideoPage: React.FC = () => {
  const query = useQuery();
  const myurl = query.get('url') ?? '';
  return (
    <div>
        <Analytics />
        <Video src={myurl}/>
    </div>
  );
};

export default VideoPage;