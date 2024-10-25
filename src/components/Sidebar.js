import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import { song } from "../SongsData";

const SideBar = () => {
  const [searchString, setSearchString] = useState("");
  const [songList, setSongList] = useState([]);
  const [filterSongList, setFilterSongList] = useState([])

  useEffect(() => {
    fetchSong();
  }, []);

  const fetchSong = async () => {
    try {
      const data = await fetch(
        "https://www.jiosaavn.com/api.php?__call=playlist.getDetails&listid=903166403&api_version=4&_format=json&_marker=0&ctx=wap6dot0"
      );
      const json = await data.json();
      setSongList(json?.list);
      setFilterSongList(json?.list)
    } catch (error) {
      setSongList(song.list);
      setFilterSongList(song.list)
    }
  };
  const SongList = filterSongList.map((value, index, array) => {
    return <SongCard key={index} song={value} />;
  });
  return (
    <div className="left-section">
      <div className="heading">Your Songs</div>
      <div className="search-container">
        <input
          className="search"
          placeholder="Taa raa raara"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
          const filteredList = songList.filter((val)=>{ 
            return val.title.toLowerCase().includes(searchString.toLowerCase());
          })
          setFilterSongList(filteredList);
        }}>
          <img src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"></img>
        </button>
      </div>
      <div className="song-container">{SongList}</div>
    </div>
  );
};

export default SideBar;
