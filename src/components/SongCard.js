import React from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../utils/playlistSlice";

const SongCard = ({ song }) => {


  const dispatch = useDispatch()

  const handleAddSong=()=>{
    console.log(song)
    dispatch(addSong(song))
  }

  return (
    <div data-testid="songCard" className={`
        relative group
        card horizontal
        box-border flex cursor-pointer
        border border-[rgba(255,255,255,0)] rounded-sm p-2.5
        hover:bg-[rgba(255,255,255,0.1)]
        hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        hover:backdrop-blur-[10px]
        hover:backdrop-saturate-[110%]
        hover:border-[rgba(255,255,255,0.3)]
        items-center gap-4
      `}>
      <img
        className="card-image w-16 h-full rounded-sm"
        src={song.image}
        alt="img"
      />
      <div className="card-heading text-[18px] font-semibold w-max text-nowrap">
        {song.title}
      </div>
      <div
        className="
          add-button absolute right-0 text-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none group-hover:pointer-events-auto
        "
        onClick={()=>handleAddSong()}
      >
        🎶
      </div>
    </div>
  );
};

export default SongCard;
