import { ChartWorld } from "../../../pages/Discover/types";

export interface Player {
  activeSong:   ChartWorld,
  isPlaying:    boolean,
  currentIndex: number,
  volume:       number,
  seekTime:     number,
  onEnded:      any,
  onTimeUpdate: any,
  onLoadedData: any,
  repeat:       boolean
}
