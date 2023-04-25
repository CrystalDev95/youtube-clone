import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppContext } from './context/contextApi'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'


const App = () => {
  return (
  <AppContext>
      <div className='flex flex-col h-full'>
        <Header />
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
          <Route path="/video/:id" element={<VideoDetails />}/>
        </Routes>
        </div>
      </AppContext>
  )
}

export default App