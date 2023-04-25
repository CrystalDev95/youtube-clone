import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { fetchDataApi } from '../utils/api';
import Sidebar from './Sidebar';
import SearchResultVideoCard from './SearchResultVideoCard'

const SearchResult = () => {
  const [result, setResult] = useState();
  const {searchQuery} = useParams();
  const { setLoading } = useContext(Context)

  useEffect (() => {
    fetchSearchResults();
  }, [searchQuery])

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataApi(`search/?q=${searchQuery}`)
      .then((res) => {
        setResult(res?.contents);
        console.log(res?.contents)
        setLoading(false);
      })
  }

  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow w-[calc(100%-500px)] h-full overflow-y-auto'>
      {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
      </div>
      </div>
  )
}

export default SearchResult