import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from './VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'

const SearchResultVideoCard = ({ video }) => {
  return (
<Link to={`/video/${video?.videoId}`}>
<div className='flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4'>
  <div className='relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 ld:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden'>
    <img
      className='h-full w-full object-cover'
      src={video?.thumbnails?.[0]?.url}
      alt="" />
    {video?.lengthSeconds && (
      <VideoLength time={video?.lengthSeconds} />
    )}
  </div>
  <div className='flex flex-col gap-3 mx-5'>
      <span className='text-lg line-clamp-2'>{video?.title}</span>

<div className='flex'>
      <div className='flex w-6 h-6 rounded-full overflow-hidden'>
      <img className='w-full h-full object-cover' src={video?.author.avatar[0].url} alt="" />
    </div>
    <span className='text-zinc-400 text-sm mx-2'>{video?.author.title}</span>
    </div>
      <span className='text-zinc-400 text-xs'>{`${abbreviateNumber(video?.stats.views, 0)}`} views | {video?.publishedTimeText}</span>
      <span className='text-zinc-400 text-xs'>{video?.descriptionSnippet}</span>
  </div>
</div>
</Link>
  )
}

export default SearchResultVideoCard