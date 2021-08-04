import { useState } from 'react';
import axios from 'axios';

export const youtubeClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
});

const useYoutubeApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const resp = await youtubeClient(
        `/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyC8toCuN-oEin0T2SyAC4tIhUZ3xwasUk0`
      );
      console.log(query);
      setData(resp.data.items);
      console.log(resp.data.items);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchVideos,
  };
};

export default useYoutubeApi;
