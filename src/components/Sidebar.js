import React from "react";
import SongCard from "./SongCard";
import { song } from "../SongsData";

const SideBar = () => {
  const SongList = song.list.map((value, index, array) => {
    return <SongCard key={index} song={value} />;
  });
  return (
    <div className="left-section">
      <div className="heading">Your Songs</div>
      <div className="song-container">{SongList}</div>
    </div>
  );
};

export default SideBar;
