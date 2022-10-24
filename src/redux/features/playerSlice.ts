import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const reducers = {
  setActiveSong: (state: any, action: any) => {
    state.activeSong = action.payload.song;

    if (action.payload?.data?.tracks?.hits) {
      state.currentSongs = action.payload.data.tracks.hits;
    } else if (action.payload?.data?.properties) {
      state.currentSongs = action.payload?.data?.tracks;
    } else {
      state.currentSongs = action.payload.data;
    }

    state.currentIndex = action.payload.i;
    state.isActive = true;
  },

  nextSong: (state: any, action: any) => {
    if (state.currentSongs[action.payload]?.track) {
      state.activeSong = state.currentSongs[action.payload]?.track;
    } else {
      state.activeSong = state.currentSongs[action.payload];
    }

    state.currentIndex = action.payload;
    state.isActive = true;
  },

  prevSong: (state: any, action: any) => {
    if (state.currentSongs[action.payload]?.track) {
      state.activeSong = state.currentSongs[action.payload]?.track;
    } else {
      state.activeSong = state.currentSongs[action.payload];
    }

    state.currentIndex = action.payload;
    state.isActive = true;
  },

  playPause: (state: any, action: any) => {
    state.isPlaying = action.payload;
  },

  selectGenreListId: (state: any, action: any) => {
    state.genreListId = action.payload;
  },
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers
});

export const playerAction = playerSlice.actions;

export default playerSlice.reducer;
