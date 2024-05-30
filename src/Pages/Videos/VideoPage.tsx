import React from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Video } from "@triyanox/react-video";

interface DetailParams {
  id: string;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VideoPage: React.FC = () => {
  const query = useQuery();
  const url = query.get('url'); // Access the 'url' query parameter
  return (
    <div>
        <Analytics />
        <Video src={url}/>
    </div>
  );
};

export default VideoPage;