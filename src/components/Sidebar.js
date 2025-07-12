import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import { song } from "../SongsData";

const SideBar = () => {
  const [searchString, setSearchString] = useState("");
  const [songList, setSongList] = useState([]);
  const [filterSongList, setFilterSongList] = useState([]);

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
      setFilterSongList(json?.list);
    } catch (error) {
      console.log("Failed to fetch song from jio savan api");
      setSongList(song.list);
      setFilterSongList(song.list);
    }
  };

  const SongList = filterSongList.map((value, index, array) => {
    return <SongCard key={index} song={value} />;
  });

  return (
    <div className="left-section box-border h-full w-1/4 border border-[rgba(255,255,255,0.3)] p-4 overflow-y-hidden ">
      <div className="heading text-2xl mb-4 font-medium">Your Songs</div>
      <div className="search-container flex items-center gap-1 mb-1.5">
        <input
          type="text"
          className="search text-lg p-2 border-2 border-white rounded-lg
             focus:outline-none focus:ring-2 focus:ring-[#ccd5e8]"  
          placeholder="Search..."
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button
          className="search-btn bg-[#ff0060] rounded-lg border-2 border-white"
          onClick={() => {
            const filteredList = songList.filter((val) => {
              return val.title
                .toLowerCase()
                .includes(searchString.toLowerCase());
            });
            setFilterSongList(filteredList);
          }}
        >
          <img  className="w-10" src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"></img>
        </button>
      </div>
      <div className="song-container h-[95%] overflow-y-scroll overflow-x-hidden pb-12">{SongList}</div>
    </div>
  );
};

export default SideBar;
