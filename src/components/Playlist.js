import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from './SongCard'
import { clearPlaylist } from '../utils/playlistSlice'


const Playlist = () => {

  const playlist = useSelector((state)=> state.playlist.songs)
  
  const dispatch = useDispatch()

  const handleClearPlaylist = () =>{
    dispatch(clearPlaylist())
  }

  const Playlist = playlist.map((song, index) => {
    return <SongCard key={index} song={song}/>
  })


  return (
    <div className='text-center'>
      <div className='text-4xl'>My Playlist</div>
      <button 
        onClick={handleClearPlaylist}
        className="my-4
          px-6 py-2 rounded-lg
          bg-red-500 text-white font-semibold
          hover:bg-red-700 hover:shadow-md
          active:scale-95 transition-all duration-200
        "
      >
        🗑️ Clear Playlist
      </button>
      <div className="song-container h-[95%] overflow-y-scroll overflow-x-hidden pb-12">{Playlist}</div>
    </div>
  )
}

export default Playlist