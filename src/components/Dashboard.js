import React from 'react'
import Card from './Card'
import {playlists} from '../PlaylistsData'
import Section from './Section'
import { artists } from '../ArtistsData'

const Dashboard = () => {

  
    jsxPlaylist = playlists.map((val,index)=> {
        return <Card key={index} title={val.title} image={val.image} description={val.subtitle}/>
    })

    jsxArtists = artists.map((val,index)=> {
        return <Card key={index} type={"artist"} title={val.name} image={val.image} description={val.type.charAt(0).toUpperCase()+val.type.slice(1)}/>
    })


  return (
    <div className="right-section">
        <div className="heading">For you Sections</div>
        <Section heading={"Discover"} list={jsxPlaylist}/>
        <Section heading={"Artists"} list={jsxArtists}/>
      </div>
  )
}

export default Dashboard