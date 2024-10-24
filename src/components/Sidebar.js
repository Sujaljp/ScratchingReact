import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

const SideBar = () => {

  const [songList,setSongList] = useState([]);

  useEffect(()=>{
    fetchSong()
  },[])

  const fetchSong = async () =>{
    const data = await fetch("https://www.jiosaavn.com/api.php?__call=playlist.getDetails&listid=903166403&api_version=4&_format=json&_marker=0&ctx=wap6dot0")
    const json = await data.json()
    setSongList(json?.list)
  }
  const SongList = songList.map((value, index, array) => {
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
