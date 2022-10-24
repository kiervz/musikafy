import { ChartWorld } from "../../../pages/Discover/types";

export interface Controls {
  isPlaying:        boolean,
  repeat:           boolean,
  isActive:         boolean,
  setRepeat:        (params: any) => void,
  shuffle:          boolean,
  setShuffle:       (params: any) => void,
  currentSongs:     ChartWorld[],
  handlePlayPause:  () => void,
  handlePrevSong:   () => void,
  handleNextSong:   () => void
}
