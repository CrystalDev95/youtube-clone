import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { abbreviateNumber } from 'js-abbreviation-number'
import { Context } from '../context/contextApi'
import { fetchDataApi } from '../utils/api';
import ReactPlayer from 'react-player'
import SuggestVideoCard from './SuggestVideoCard';


const VideoDetails = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id])

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataApi(`video/details/?id=${id}`)
      .then((res) => {
        setVideo(res);
        setLoading(false);
      })
  }

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataApi(`video/related-contents/?id=${id}`)
      .then((res) => {
        setRelatedVideos(res);
        setLoading(false);
      })
  }

  return (
    <div className='w-screen flex flex-col md:flex-row my-10 mx-5 md:mx-16'>
    <div className="flex flex-col w-[90%] md:w-3/5">
      <div className='w-full'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          hieght="100%"
          style={{ backgroundColor: "#0000000" }}
        />
      </div>
      <div className="mt-5 text-xl">
      {video?.title}
      </div>
      <div className='flex my-3 gap-5 items-center'>
      <div className='w-8 h-8 rounded-full overflow-hidden'>
      <img className='w-full h-full object-cover' src={video?.author.avatar[0].url} alt="" />
      </div>
      <div className='flex flex-col'>
      <span className='text-lg font-semibold'>{video?.author.title}</span>
      <span className='text-zinc-500'>{video?.author.stats.subscribersText}</span>
      </div>
      </div>

      <div className='flex flex-col w-full p-3 my-3 bg-zinc-800 rounded-md'>
      <span>{`${abbreviateNumber(video?.stats.views, 0)}`} views</span>
      <span className='mt-2 line-clamp-4'>{video?.description}</span>
      </div>

    </div>
      <div className='flex flex-col p-5'>
        {
          relatedVideos?.contents?.map((item, i) => 
            <SuggestVideoCard key={i} video={item.video} />
            )
        }
      </div>
    </div>
  )
}

export default VideoDetails