import React from 'react'
import Card, { actorCard } from './Card'
import {playlists} from '../PlaylistsData'
import Section from './Section'
import { artists } from '../ArtistsData'

const Dashboard = () => {

  console.log("Dashboard was loaded")

  
    jsxPlaylist = playlists.map((val,index)=> {
        return <Card key={index} title={val.title} image={val.image} description={val.subtitle}/>
    })

    const ActorCard = actorCard(Card)

    jsxArtists = artists.map((val,index)=> {
        return val.role.toLowerCase()=="actor" ?
          <ActorCard key={index} type={"artist"} title={val.name} image={val.image} description={val.role.charAt(0).toUpperCase()+val.role.slice(1)}/>:
          <Card key={index} type={"artist"} title={val.name} image={val.image} description={val.role.charAt(0).toUpperCase()+val.role.slice(1)}/>
    })


  return (
    <div>
        <div className="heading  text-2xl mb-4 font-medium">For you Sections</div>
        <Section heading={"Discover"} list={jsxPlaylist}/>
        <Section heading={"Artists"} list={jsxArtists}/>
      </div>
  )
}

export default Dashboard