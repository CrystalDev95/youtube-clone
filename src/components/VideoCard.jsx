import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from './VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-56 md:rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video?.thumbnails?.[0]?.url}
            alt="" />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className='flex mt-3 gap-3'>
          <div className='flex w-8 h-8 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={video?.author.avatar[0].url} alt="" />
          </div>
          <div className='flex flex-col w-80'>
            <span className='text-base line-clamp-2'>{video?.title}</span>
            <span className='text-zinc-500'>{video?.author.title}</span>
            <span className='text-zinc-500'>{`${abbreviateNumber(video?.stats.views, 0)}`} views | {video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard