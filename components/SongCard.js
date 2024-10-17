import React from 'react'

const SongCard = ({song}) => {
  return (
    <div className={`card horizontal`}>
      <img
        className="card-image"
        src={song.image}
        alt="img"
      />
      <div className="card-heading">{song.title}</div>
    </div>
  )
}

export default SongCard