import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from './VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'


const SuggestVideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className='flex mb-8'>
      <div className='relative h-32 md:h-28 md:rounded-xl overflow-hidden'>
        <img
          className='h-full w-full object-cover'
          src={video?.thumbnails?.[0]?.url}
          alt="" />
        {video?.lengthSeconds && (
          <VideoLength time={video?.lengthSeconds} />
        )}
      </div>
        <div className='flex flex-col px-3 text-sm w-[80%] md:w-60'>
          <span className='line-clamp-2 mb-1'>{video?.title}</span>
          <span className='text-zinc-500'>{video?.author.title}</span>
          <span className='text-zinc-500'>{`${abbreviateNumber(video?.stats.views, 0)}`} views | {video?.publishedTimeText}</span>
        </div>
      </div>
  </Link>
  )
}

export default SuggestVideoCard