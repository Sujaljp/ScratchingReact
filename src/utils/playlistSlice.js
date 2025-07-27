import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name : 'playlist',
    initialState : {
        songs : []
    },
    reducers:{
        addSong: (state, action)=>{
            state.songs.push(action.payload)
        },
        removeSong:(state, action)=>{
            state.songs.filter((song)=>{
                song.id = action.payload.id
            })
        },
        clearPlaylist: (state)=>{
            state.songs.length = 0
        }
    }
})

export const {addSong, removeSong, clearPlaylist} = playlistSlice.actions
export default playlistSlice.reducer